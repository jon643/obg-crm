#!/usr/bin/env node
/**
 * OBG HARO / Journalist Query Monitor
 *
 * Monitors RSS feeds from journalist query platforms (HARO/Featured.com, Qwoted, SourceBottle)
 * and uses Claude to identify relevant opportunities and draft expert responses.
 *
 * Usage:
 *   node scripts/backlinks/haro-monitor.mjs              # Check all platforms, print results
 *   node scripts/backlinks/haro-monitor.mjs --respond    # Also generate response drafts
 *   node scripts/backlinks/haro-monitor.mjs --platform featured  # Single platform
 *
 * Setup required:
 *   - Sign up at https://featured.com/experts/ (HARO is now run by Featured.com)
 *   - Sign up at https://www.sourcebottle.com/source/register/
 *   - Optional: https://www.qwoted.com/join/ for premium queries
 *   - Monitor emails daily OR run this script (which checks RSS feeds)
 *
 * Note: HARO does not have a public API. This monitors the Featured.com RSS feed
 *       and common ecommerce/business query email digests if forwarded to a parsing endpoint.
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Config ──────────────────────────────────────────────────────────────────
const STATE_FILE = join(__dirname, 'haro-state.json');
const RESPONSES_DIR = join(__dirname, 'haro-responses');
const LOG_FILE = join(__dirname, 'haro.log');

// Keywords that make a HARO query relevant to OBG
const RELEVANCE_KEYWORDS = [
  'amazon', 'fba', 'ecommerce', 'e-commerce', 'ppc', 'marketplace',
  'brand protection', 'advertising', 'selling online', 'dtc', 'direct to consumer',
  'product launch', 'retail', 'shopify', 'online store', 'supply chain',
  'inventory', 'fulfillment', 'logistics', 'brand growth', 'digital marketing',
  'paid advertising', 'search ads', 'keyword', 'conversion rate', 'seo'
];

// OBG expert context for responses
const OBG_EXPERT_CONTEXT = `
You are drafting an expert HARO/journalist response on behalf of Jon Klein, Co-Founder of Online Brand Growth.

CREDENTIALS TO CITE:
- Jon Klein, Co-Founder, Online Brand Growth (onlinebrandgrowth.com)
- Former Amazon brand owner who built and sold 7-8 figure brands before co-founding OBG in 2018
- Managed $50M+ in Amazon advertising spend
- Clients include brands that have grown 30x, 50% YOY, doubled-to-tripled revenue under OBG

RESPONSE RULES:
1. Answer the journalist's specific question directly and substantively — don't be vague
2. Include 1-2 specific data points or frameworks (TACoS target of 8-12%, PPC Lifecycle phases, etc.)
3. Bio/attribution line at the end: "Jon Klein, Co-Founder, Online Brand Growth (onlinebrandgrowth.com)"
4. Maximum 250 words for the response
5. Never pitch OBG's services explicitly — the backlink comes from being quoted as an expert
6. Sound like a practitioner, not a consultant
`;

// ── Helpers ──────────────────────────────────────────────────────────────────
function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  try {
    const existing = existsSync(LOG_FILE) ? readFileSync(LOG_FILE, 'utf8') : '';
    writeFileSync(LOG_FILE, existing + line + '\n');
  } catch {}
}

function loadState() {
  if (existsSync(STATE_FILE)) return JSON.parse(readFileSync(STATE_FILE, 'utf8'));
  return { processed_ids: [], last_checked: null, opportunities_found: 0, responses_drafted: 0 };
}

function saveState(state) {
  writeFileSync(STATE_FILE, JSON.stringify({ ...state, last_checked: new Date().toISOString() }, null, 2));
}

function getApiKey() {
  try {
    return execSync('security find-generic-password -s "obg-anthropic" -a "api_key" -w', {
      encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe']
    }).trim();
  } catch {
    throw new Error('Anthropic API key not found in Keychain.');
  }
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : require('http');
    const req = https.get(url, {
      headers: { 'User-Agent': 'OBG-HARO-Monitor/1.0' }
    }, (res) => {
      let data = '';
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.setTimeout(10000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

function parseRSSItems(xml) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  while ((match = itemRegex.exec(xml)) !== null) {
    const item = match[1];
    const title = (item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) ||
                   item.match(/<title>(.*?)<\/title>/) || [])[1] || '';
    const description = (item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/) ||
                          item.match(/<description>(.*?)<\/description>/) || [])[1] || '';
    const link = (item.match(/<link>(.*?)<\/link>/) || [])[1] || '';
    const pubDate = (item.match(/<pubDate>(.*?)<\/pubDate>/) || [])[1] || '';
    const guid = (item.match(/<guid[^>]*>(.*?)<\/guid>/) || [])[1] || link || title;

    if (title) items.push({ title, description, link, pubDate, guid });
  }
  return items;
}

function isRelevant(item) {
  const text = `${item.title} ${item.description}`.toLowerCase();
  return RELEVANCE_KEYWORDS.some(kw => text.includes(kw));
}

function callClaude(apiKey, prompt) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: 'claude-opus-4-5',
      max_tokens: 600,
      messages: [{ role: 'user', content: prompt }],
      system: OBG_EXPERT_CONTEXT,
    });

    const req = https.request({
      hostname: 'api.anthropic.com',
      path: '/v1/messages',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'Content-Length': Buffer.byteLength(body),
      },
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.error) reject(new Error(parsed.error.message));
          else resolve(parsed.content[0].text);
        } catch (e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ── Platform Feeds ────────────────────────────────────────────────────────────
const PLATFORMS = {
  featured: {
    name: 'Featured.com (HARO)',
    // Featured.com category feeds for business/ecommerce
    feeds: [
      'https://featured.com/feed/category/business/',
      'https://featured.com/feed/category/marketing/',
      'https://featured.com/feed/category/technology/',
    ],
    note: 'Sign up at https://featured.com/experts/ for direct email queries'
  },
  // Qwoted and SourceBottle are primarily email-based — this script monitors
  // their public query boards when available
  sourcebottle: {
    name: 'SourceBottle',
    feeds: [
      'https://www.sourcebottle.com/feed/'
    ],
    note: 'Sign up at https://www.sourcebottle.com/source/register/'
  }
};

// ── Manual Query Entry ────────────────────────────────────────────────────────
// When you receive HARO digest emails, paste relevant queries here and run with --respond
const MANUAL_QUERIES = [
  // Example format - add real queries from your email digest here:
  // {
  //   id: 'manual-2026-03-05-1',
  //   source: 'HARO email digest',
  //   title: 'Looking for experts on Amazon advertising strategies',
  //   description: 'I\'m writing a piece for Forbes about how brands can improve their Amazon PPC ROI in 2026. Looking for agency experts who manage significant ad spend.',
  //   deadline: '2026-03-06T17:00:00Z',
  //   journalist: 'Forbes contributor',
  // }
];

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  const args = process.argv.slice(2);
  const generateResponses = args.includes('--respond');
  const platform = args.includes('--platform') ? args[args.indexOf('--platform') + 1] : null;

  log('=== OBG HARO Monitor Starting ===');

  const state = loadState();
  let apiKey = null;

  if (generateResponses) {
    try { apiKey = getApiKey(); } catch (e) { log(`WARNING: ${e.message} — cannot generate responses`); }
  }

  const opportunities = [];

  // ── Check RSS feeds ────────────────────────────────────────────────────────
  const platformsToCheck = platform ? { [platform]: PLATFORMS[platform] } : PLATFORMS;

  for (const [key, config] of Object.entries(platformsToCheck)) {
    if (!config) { log(`Unknown platform: ${key}`); continue; }
    log(`Checking ${config.name}...`);

    for (const feedUrl of config.feeds) {
      try {
        const xml = await fetchUrl(feedUrl);
        const items = parseRSSItems(xml);
        log(`  ${feedUrl}: ${items.length} items found`);

        for (const item of items) {
          if (state.processed_ids.includes(item.guid)) continue;
          if (!isRelevant(item)) continue;

          opportunities.push({
            id: item.guid,
            platform: config.name,
            title: item.title,
            description: item.description.replace(/<[^>]+>/g, '').substring(0, 500),
            link: item.link,
            pubDate: item.pubDate,
            source: feedUrl,
          });
        }
      } catch (e) {
        log(`  WARNING: Could not fetch ${feedUrl}: ${e.message}`);
        log(`  Note: Some HARO platforms are email-only. Check ${config.note}`);
      }
    }
  }

  // ── Add manual queries ─────────────────────────────────────────────────────
  for (const query of MANUAL_QUERIES) {
    if (!state.processed_ids.includes(query.id)) {
      opportunities.push({ ...query, platform: query.source });
    }
  }

  log(`\nFound ${opportunities.length} new relevant opportunities`);

  if (opportunities.length === 0) {
    console.log('\n✓ No new relevant HARO queries found.');
    console.log('\nREMINDER — Manual monitoring steps:');
    console.log('1. Sign up as a source at: https://featured.com/experts/');
    console.log('2. Sign up at: https://www.sourcebottle.com/source/register/');
    console.log('3. When you receive email digests, paste relevant queries into MANUAL_QUERIES array');
    console.log('4. Re-run with --respond to generate Claude-drafted responses');
    saveState(state);
    return;
  }

  // ── Display opportunities ──────────────────────────────────────────────────
  console.log('\n' + '═'.repeat(60));
  console.log('NEW HARO OPPORTUNITIES FOR OBG');
  console.log('═'.repeat(60));

  for (const opp of opportunities) {
    console.log(`\n📰 ${opp.platform}`);
    console.log(`   Title: ${opp.title}`);
    console.log(`   ${opp.description.substring(0, 200)}...`);
    if (opp.link) console.log(`   Link: ${opp.link}`);
    if (opp.deadline) console.log(`   Deadline: ${opp.deadline}`);
  }

  // ── Generate responses ─────────────────────────────────────────────────────
  if (generateResponses && apiKey) {
    log('\nGenerating response drafts...');
    if (!existsSync(RESPONSES_DIR)) {
      const { mkdirSync } = await import('fs');
      mkdirSync(RESPONSES_DIR, { recursive: true });
    }

    for (const opp of opportunities) {
      try {
        log(`Generating response for: ${opp.title}`);

        const prompt = `A journalist is looking for expert sources. Here is their query:

TITLE: ${opp.title}
QUERY: ${opp.description}
PLATFORM: ${opp.platform}

Write an expert response that Jon Klein, Co-Founder of Online Brand Growth, would submit as a source.

The response should:
1. Directly answer the journalist's specific question
2. Include a specific data point, framework, or client result from OBG's experience
3. Be authoritative but not salesy
4. End with attribution: "-- Jon Klein, Co-Founder, Online Brand Growth (onlinebrandgrowth.com)"

Maximum 250 words.`;

        const response = await callClaude(apiKey, prompt);

        const filename = `${Date.now()}-${opp.id.replace(/[^a-z0-9]/gi, '-').substring(0, 50)}.json`;
        const filepath = join(RESPONSES_DIR, filename);
        writeFileSync(filepath, JSON.stringify({
          opportunity: opp,
          response_draft: response,
          generated_at: new Date().toISOString(),
          status: 'draft',
        }, null, 2));

        console.log(`\n${'─'.repeat(60)}`);
        console.log(`RESPONSE DRAFT: ${opp.title}`);
        console.log('─'.repeat(60));
        console.log(response);
        console.log(`\n✓ Saved to: ${filepath}`);

        state.responses_drafted++;
        await new Promise(r => setTimeout(r, 1500));
      } catch (e) {
        log(`ERROR generating response for ${opp.id}: ${e.message}`);
      }
    }
  } else if (!generateResponses) {
    console.log('\n💡 Run with --respond to generate Claude-drafted response emails');
  }

  // ── Update state ──────────────────────────────────────────────────────────
  state.processed_ids.push(...opportunities.map(o => o.id));
  state.opportunities_found += opportunities.length;
  saveState(state);

  log(`\n=== Done. ${opportunities.length} opportunities found, ${generateResponses ? state.responses_drafted : 0} responses drafted ===`);
}

main().catch(e => {
  log(`FATAL: ${e.message}`);
  process.exit(1);
});
