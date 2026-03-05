#!/usr/bin/env node
/**
 * OBG Daily Backlink Runner
 *
 * Orchestrates the entire backlink acquisition workflow:
 *   1. Check for HARO opportunities
 *   2. Process pending outreach (generate draft emails)
 *   3. Print follow-up reminders
 *   4. Generate a weekly report
 *
 * Usage:
 *   node scripts/backlinks/run-backlinks.mjs              # Full daily run
 *   node scripts/backlinks/run-backlinks.mjs --haro       # HARO check only
 *   node scripts/backlinks/run-backlinks.mjs --outreach   # Generate outreach emails only
 *   node scripts/backlinks/run-backlinks.mjs --report     # Weekly report only
 *   node scripts/backlinks/run-backlinks.mjs --status     # Print quick status
 *
 * This script is designed to be run from launchd (daily at 8am) or manually.
 * It is SAFE to run daily — it only processes new targets and skips already-processed ones.
 */

import { execSync, spawnSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..');

// ── Config ──────────────────────────────────────────────────────────────────
const TARGETS_FILE = join(__dirname, 'targets.json');
const STATE_FILE = join(__dirname, 'runner-state.json');
const LOG_FILE = join(__dirname, 'run-backlinks.log');
const REPORTS_DIR = join(__dirname, 'reports');

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
  return {
    last_run: null,
    last_report: null,
    last_haro_check: null,
    last_outreach_run: null,
    total_runs: 0,
    directories_submitted: 0,
    outreach_emails_generated: 0,
    haro_opportunities_found: 0,
  };
}

function saveState(state) {
  writeFileSync(STATE_FILE, JSON.stringify({
    ...state,
    last_run: new Date().toISOString(),
    total_runs: state.total_runs + 1,
  }, null, 2));
}

function loadTargets() {
  return JSON.parse(readFileSync(TARGETS_FILE, 'utf8'));
}

function getAllTargets(data) {
  return [
    ...(data.directories || []),
    ...(data.listicles || []),
    ...(data.guest_posts || []),
    ...(data.haro_platforms || []),
  ];
}

function runScript(scriptPath, args = []) {
  const result = spawnSync('node', [scriptPath, ...args], {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
  });
  return {
    success: result.status === 0,
    stdout: result.stdout || '',
    stderr: result.stderr || '',
    status: result.status,
  };
}

function daysSince(dateStr) {
  if (!dateStr) return 999;
  const diff = Date.now() - new Date(dateStr).getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function isFollowUpDue(target) {
  if (!target.follow_up_date) return false;
  return new Date(target.follow_up_date) <= new Date();
}

function getApiKey() {
  try {
    return execSync('security find-generic-password -s "obg-anthropic" -a "api_key" -w', {
      encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe']
    }).trim();
  } catch {
    return null;
  }
}

function callClaude(apiKey, prompt) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: 'claude-opus-4-5',
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }],
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

// ── Step 1: Directory Status Check ───────────────────────────────────────────
function checkDirectories() {
  const data = loadTargets();
  const dirs = data.directories || [];

  const tier1 = dirs.filter(d => d.tier === 1);
  const pending = tier1.filter(d => d.status === 'pending');
  const submitted = tier1.filter(d => d.status === 'submitted');
  const live = tier1.filter(d => d.status === 'live');

  console.log('\n📁 DIRECTORY LISTINGS STATUS');
  console.log('─'.repeat(50));
  console.log(`  Tier 1: ${live.length}/${tier1.length} live`);

  if (pending.length > 0) {
    console.log(`\n  ⚪ PENDING (${pending.length} to submit):`);
    pending.forEach(d => {
      console.log(`    • ${d.name} (DA ${d.da})`);
      console.log(`      → ${d.submit_url}`);
    });
    console.log('\n  ACTION REQUIRED: Submit to these directories manually.');
    console.log('  After submitting, run: node scripts/backlinks/tracker.mjs --update <id> submitted');
  }

  if (submitted.length > 0) {
    console.log(`\n  🔵 IN REVIEW (${submitted.length}):`);
    submitted.forEach(d => {
      const days = daysSince(d.submitted_date);
      const followUpDue = isFollowUpDue(d);
      console.log(`    • ${d.name} — submitted ${days}d ago${followUpDue ? ' ⚠️ FOLLOW-UP DUE' : ''}`);
    });
  }

  if (live.length > 0) {
    console.log(`\n  🟢 LIVE (${live.length}):`);
    live.forEach(d => {
      console.log(`    • ${d.name}: ${d.live_url || 'URL not recorded'}`);
    });
  }
}

// ── Step 2: Outreach Queue ─────────────────────────────────────────────────
async function processOutreachQueue(state) {
  const data = loadTargets();
  const outreachTargets = [
    ...(data.listicles || []).filter(t => t.status === 'pending'),
    ...(data.guest_posts || []).filter(t => t.status === 'pending'),
  ];

  console.log('\n✍️  OUTREACH QUEUE');
  console.log('─'.repeat(50));

  if (outreachTargets.length === 0) {
    console.log('  ✓ All outreach targets processed');
    return state;
  }

  console.log(`  ${outreachTargets.length} pending outreach targets:`);
  outreachTargets.forEach(t => {
    const contact = t.contact_url || t.submit_url;
    const typeLabel = t.type === 'listicle' ? 'Listicle inclusion' : 'Guest post';
    console.log(`  • ${t.name} (${typeLabel}, DA ${t.da})`);
    console.log(`    → ${contact}`);
  });

  // Check if outreach emails have been generated
  const outreachDir = join(__dirname, 'outreach');
  if (!existsSync(outreachDir)) {
    console.log('\n  💡 No outreach emails generated yet.');
    console.log('  Run: node scripts/backlinks/generate-outreach.mjs --preview');
    console.log('  Then: node scripts/backlinks/generate-outreach.mjs');
  } else {
    const { readdirSync } = await import('fs');
    const drafts = readdirSync(outreachDir).filter(f => f.endsWith('.json'));
    console.log(`\n  📄 ${drafts.length} outreach draft(s) ready in scripts/backlinks/outreach/`);
    console.log('  Review drafts and send them manually, then update status:');
    console.log('  node scripts/backlinks/tracker.mjs --update <id> submitted');
  }

  return state;
}

// ── Step 3: Follow-up Reminders ───────────────────────────────────────────
function checkFollowUps() {
  const data = loadTargets();
  const allTargets = getAllTargets(data);
  const due = allTargets.filter(isFollowUpDue);

  if (due.length === 0) return;

  console.log('\n🟠 FOLLOW-UPS DUE TODAY');
  console.log('─'.repeat(50));
  due.forEach(t => {
    console.log(`  • ${t.name}`);
    console.log(`    Status: ${t.status} | Due: ${t.follow_up_date}`);
    const url = t.submit_url || t.contact_url || t.url;
    console.log(`    URL: ${url}`);
  });
  console.log('\n  Update when done: node scripts/backlinks/tracker.mjs --update <id> <status>');
}

// ── Step 4: Weekly Report ─────────────────────────────────────────────────
async function generateWeeklyReport(state, apiKey) {
  const lastReport = state.last_report ? new Date(state.last_report) : null;
  const daysSinceReport = lastReport ? daysSince(state.last_report) : 999;

  if (daysSinceReport < 7) {
    log(`Weekly report not due yet (${daysSinceReport} days since last report)`);
    return state;
  }

  log('Generating weekly backlink report...');

  const data = loadTargets();
  const all = getAllTargets(data);

  const report = {
    date: new Date().toISOString().split('T')[0],
    total_targets: all.length,
    live: all.filter(t => t.status === 'live').length,
    submitted: all.filter(t => t.status === 'submitted').length,
    pending: all.filter(t => t.status === 'pending').length,
    rejected: all.filter(t => t.status === 'rejected').length,
    no_response: all.filter(t => t.status === 'no_response').length,
    live_targets: all.filter(t => t.status === 'live').map(t => ({
      name: t.name, da: t.da, url: t.live_url || t.published_url
    })),
    tier1_progress: `${all.filter(t => t.tier === 1 && t.status === 'live').length}/${all.filter(t => t.tier === 1).length}`,
  };

  // Generate Claude summary if API key available
  if (apiKey && report.live > 0) {
    try {
      const summary = await callClaude(apiKey, `
Write a brief 3-sentence weekly backlink campaign summary for Online Brand Growth:

Stats this week:
- ${report.live} backlinks live (DA sites: ${report.live_targets.map(t => `${t.name} DA${t.da}`).join(', ')})
- ${report.submitted} submissions in review
- ${report.pending} targets still pending
- Tier 1 progress: ${report.tier1_progress}

Keep it factual and forward-looking. End with the highest-priority action for next week.
      `);
      report.ai_summary = summary;
    } catch {}
  }

  // Save report
  if (!existsSync(REPORTS_DIR)) mkdirSync(REPORTS_DIR, { recursive: true });
  const reportFile = join(REPORTS_DIR, `report-${report.date}.json`);
  writeFileSync(reportFile, JSON.stringify(report, null, 2));

  console.log('\n📊 WEEKLY BACKLINK REPORT');
  console.log('─'.repeat(50));
  console.log(`  Live: ${report.live} | In review: ${report.submitted} | Pending: ${report.pending}`);
  console.log(`  Tier 1 progress: ${report.tier1_progress}`);
  if (report.ai_summary) {
    console.log('\n' + report.ai_summary);
  }
  console.log(`\n  Full report saved: ${reportFile}`);

  return { ...state, last_report: new Date().toISOString() };
}

// ── HARO Check ────────────────────────────────────────────────────────────
async function checkHARO(state) {
  const daysSinceHaro = state.last_haro_check ? daysSince(state.last_haro_check) : 999;

  // Check HARO daily
  if (daysSinceHaro < 1) {
    log('HARO already checked today, skipping');
    return state;
  }

  console.log('\n📰 HARO / JOURNALIST QUERY CHECK');
  console.log('─'.repeat(50));

  const haroScript = join(__dirname, 'haro-monitor.mjs');
  if (!existsSync(haroScript)) {
    console.log('  haro-monitor.mjs not found');
    return state;
  }

  const result = runScript(haroScript, []);
  if (result.stdout) {
    // Print key parts
    const lines = result.stdout.split('\n').filter(l =>
      l.includes('opportunit') || l.includes('HARO') || l.includes('📰') || l.includes('No new')
    );
    lines.forEach(l => console.log(`  ${l.trim()}`));
  }

  if (!result.success) {
    console.log('  Note: HARO platforms are primarily email-based.');
    console.log('  Sign up manually at:');
    console.log('    • https://featured.com/experts/ (HARO)');
    console.log('    • https://www.sourcebottle.com/source/register/');
    console.log('    • https://www.qwoted.com/join/');
  }

  return { ...state, last_haro_check: new Date().toISOString() };
}

// ── Quick Status ─────────────────────────────────────────────────────────
function showQuickStatus() {
  const data = loadTargets();
  const all = getAllTargets(data);
  const live = all.filter(t => t.status === 'live').length;
  const submitted = all.filter(t => t.status === 'submitted').length;
  const due = all.filter(isFollowUpDue).length;
  const pending = all.filter(t => t.status === 'pending').length;
  const tier1Live = all.filter(t => t.tier === 1 && t.status === 'live').length;
  const tier1Total = all.filter(t => t.tier === 1).length;

  console.log(`
OBG Backlink Tracker
────────────────────
  🟢 Live:       ${live}
  🔵 Submitted:  ${submitted}
  ⚪ Pending:    ${pending}
  🟠 Follow-up:  ${due} due today

  Tier 1: ${tier1Live}/${tier1Total} live
  Total tracked: ${all.length}
`);
}

// ── Main ──────────────────────────────────────────────────────────────────
async function main() {
  const args = process.argv.slice(2);

  if (args.includes('--status')) {
    showQuickStatus();
    return;
  }

  if (args.includes('--report')) {
    const apiKey = getApiKey();
    const state = loadState();
    await generateWeeklyReport({ ...state, last_report: null }, apiKey); // Force report
    return;
  }

  log('=== OBG Backlink Runner Starting ===');

  let state = loadState();
  const apiKey = getApiKey();

  console.log('\n' + '═'.repeat(50));
  console.log('  OBG BACKLINK CAMPAIGN — DAILY RUN');
  console.log('  ' + new Date().toLocaleDateString('en-US', { dateStyle: 'full' }));
  console.log('═'.repeat(50));

  // Run selected or all steps
  if (args.includes('--haro') || !args.length) {
    state = await checkHARO(state);
  }

  if (args.includes('--outreach') || !args.length) {
    state = await processOutreachQueue(state);
  }

  if (!args.includes('--haro') && !args.includes('--outreach')) {
    // Full run
    checkDirectories();
    checkFollowUps();

    if (apiKey) {
      state = await generateWeeklyReport(state, apiKey);
    }
  }

  saveState(state);

  console.log('\n' + '─'.repeat(50));
  console.log('  USEFUL COMMANDS');
  console.log('  node scripts/backlinks/tracker.mjs               # Full dashboard');
  console.log('  node scripts/backlinks/tracker.mjs --due         # Follow-ups due');
  console.log('  node scripts/backlinks/generate-outreach.mjs --preview  # Preview emails');
  console.log('  node scripts/backlinks/haro-monitor.mjs --respond       # HARO responses');
  console.log('─'.repeat(50) + '\n');

  log('=== Run complete ===');
}

main().catch(e => {
  log(`FATAL: ${e.message}`);
  console.error(e);
  process.exit(1);
});
