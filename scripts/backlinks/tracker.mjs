#!/usr/bin/env node
/**
 * OBG Backlink Tracker — Status Dashboard & Update CLI
 *
 * Usage:
 *   node scripts/backlinks/tracker.mjs                          # Show full dashboard
 *   node scripts/backlinks/tracker.mjs --tier 1                 # Filter by tier
 *   node scripts/backlinks/tracker.mjs --type directory         # Filter by type
 *   node scripts/backlinks/tracker.mjs --status pending         # Filter by status
 *   node scripts/backlinks/tracker.mjs --update <id> <status>   # Update a target's status
 *   node scripts/backlinks/tracker.mjs --update clutch submitted --note "Submitted 2026-03-05"
 *   node scripts/backlinks/tracker.mjs --update clutch live --url "https://clutch.co/profile/obg"
 *   node scripts/backlinks/tracker.mjs --update clutch follow_up --date "2026-03-19"
 *   node scripts/backlinks/tracker.mjs --due                    # Show targets due for follow-up
 *   node scripts/backlinks/tracker.mjs --summary                # Brief summary only
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TARGETS_FILE = join(__dirname, 'targets.json');

// ── Status Display Config ─────────────────────────────────────────────────────
const STATUS_ICONS = {
  pending: '⚪',
  submitted: '🔵',
  live: '🟢',
  rejected: '🔴',
  no_response: '🟡',
  follow_up: '🟠',
};

const TYPE_LABELS = {
  directory: '📁 Directory',
  listicle: '📋 Listicle',
  guest_post: '✍️  Guest Post',
  haro: '📰 HARO',
};

// ── Helpers ──────────────────────────────────────────────────────────────────
function loadData() {
  return JSON.parse(readFileSync(TARGETS_FILE, 'utf8'));
}

function saveData(data) {
  writeFileSync(TARGETS_FILE, JSON.stringify(data, null, 2));
}

function getAllTargets(data) {
  return [
    ...(data.directories || []),
    ...(data.listicles || []),
    ...(data.guest_posts || []),
    ...(data.haro_platforms || []),
  ];
}

function findTarget(data, id) {
  const sections = ['directories', 'listicles', 'guest_posts', 'haro_platforms'];
  for (const section of sections) {
    const idx = (data[section] || []).findIndex(t => t.id === id);
    if (idx !== -1) return { section, idx, target: data[section][idx] };
  }
  return null;
}

function isFollowUpDue(target) {
  if (!target.follow_up_date) return false;
  return new Date(target.follow_up_date) <= new Date();
}

function daysSince(dateStr) {
  if (!dateStr) return null;
  const diff = Date.now() - new Date(dateStr).getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function daysUntil(dateStr) {
  if (!dateStr) return null;
  const diff = new Date(dateStr).getTime() - Date.now();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function padRight(str, len) {
  return String(str).substring(0, len).padEnd(len);
}

function padLeft(str, len) {
  return String(str).substring(0, len).padStart(len);
}

// ── Dashboard ──────────────────────────────────────────────────────────────────
function showDashboard(filters = {}) {
  const data = loadData();
  const all = getAllTargets(data);

  let targets = all;
  if (filters.tier) targets = targets.filter(t => t.tier == filters.tier);
  if (filters.type) targets = targets.filter(t => t.type === filters.type);
  if (filters.status) targets = targets.filter(t => t.status === filters.status);

  // Stats
  const stats = {
    total: all.length,
    pending: all.filter(t => t.status === 'pending').length,
    submitted: all.filter(t => t.status === 'submitted').length,
    live: all.filter(t => t.status === 'live').length,
    rejected: all.filter(t => t.status === 'rejected').length,
    no_response: all.filter(t => t.status === 'no_response').length,
    follow_up_due: all.filter(isFollowUpDue).length,
    tier1_live: all.filter(t => t.tier === 1 && t.status === 'live').length,
    tier1_total: all.filter(t => t.tier === 1).length,
  };

  console.log('\n' + '═'.repeat(70));
  console.log('  OBG BACKLINK TRACKER DASHBOARD');
  console.log('  ' + new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
  console.log('═'.repeat(70));

  console.log(`
  SUMMARY
  ─────────────────────────────
  Total targets:    ${stats.total}
  🟢 Live:          ${stats.live}
  🔵 Submitted:     ${stats.submitted}
  ⚪ Pending:       ${stats.pending}
  🟡 No response:   ${stats.no_response}
  🔴 Rejected:      ${stats.rejected}
  🟠 Follow-up due: ${stats.follow_up_due}

  Tier 1 progress: ${stats.tier1_live}/${stats.tier1_total} live
  Estimated DA gain when all Tier 1 live: +25-40 points
`);

  if (stats.follow_up_due > 0) {
    console.log('  ⚠️  FOLLOW-UP REQUIRED:');
    all.filter(isFollowUpDue).forEach(t => {
      console.log(`     • ${t.name} — ${t.status} since ${t.submitted_date || t.outreach_sent || '?'}`);
    });
    console.log('');
  }

  // Group by type
  const groups = {
    'Directories': targets.filter(t => t.type === 'directory'),
    'Listicles': targets.filter(t => t.type === 'listicle'),
    'Guest Posts': targets.filter(t => t.type === 'guest_post'),
    'HARO Platforms': targets.filter(t => !t.type || t.type === 'haro'),
  };

  for (const [groupName, groupTargets] of Object.entries(groups)) {
    if (!groupTargets.length) continue;

    console.log(`  ${groupName.toUpperCase()}`);
    console.log('  ' + '─'.repeat(67));
    console.log(`  ${padRight('Name', 30)} ${padRight('Status', 12)} ${padRight('DA', 5)} ${padRight('Tier', 5)} Days`);
    console.log('  ' + '─'.repeat(67));

    for (const t of groupTargets) {
      const icon = STATUS_ICONS[t.status] || '⚪';
      const days = t.submitted_date ? daysSince(t.submitted_date) :
                   t.outreach_sent ? daysSince(t.outreach_sent) : null;
      const daysStr = days !== null ? `${days}d ago` : '';
      const followUpStr = isFollowUpDue(t) ? ' ⚠️' : '';

      console.log(`  ${padRight(t.name, 30)} ${icon} ${padRight(t.status, 10)} ${padRight(t.da || '?', 5)} ${padRight(t.tier || '-', 5)} ${daysStr}${followUpStr}`);

      if (t.live_url || t.published_url) {
        console.log(`     🔗 ${t.live_url || t.published_url}`);
      }
    }
    console.log('');
  }

  // Action items
  const actionable = all.filter(t => t.status === 'pending' && t.tier === 1).slice(0, 5);
  if (actionable.length > 0) {
    console.log('  📋 NEXT ACTIONS (Tier 1 Pending)');
    console.log('  ' + '─'.repeat(67));
    actionable.forEach((t, i) => {
      const url = t.submit_url || t.contact_url || t.signup_url;
      console.log(`  ${i + 1}. ${t.name} (DA ${t.da || '?'})`);
      console.log(`     → ${url}`);
      if (t.notes) console.log(`     💡 ${t.notes.substring(0, 100)}...`);
      console.log('');
    });
  }

  console.log('  COMMANDS');
  console.log('  node scripts/backlinks/tracker.mjs --update <id> <status>');
  console.log('  node scripts/backlinks/tracker.mjs --update clutch submitted');
  console.log('  node scripts/backlinks/tracker.mjs --update g2 live --url "https://g2.com/...");');
  console.log('  node scripts/backlinks/tracker.mjs --due   (show follow-up due targets)');
  console.log('═'.repeat(70) + '\n');
}

function showDue() {
  const data = loadData();
  const due = getAllTargets(data).filter(isFollowUpDue);

  console.log('\n🟠 FOLLOW-UPS DUE\n');
  if (!due.length) {
    console.log('  No follow-ups due right now.\n');
    return;
  }

  due.forEach(t => {
    const days = daysUntil(t.follow_up_date);
    console.log(`• ${t.name} (${t.id})`);
    console.log(`  Status: ${t.status}`);
    console.log(`  Follow-up due: ${t.follow_up_date} (${Math.abs(days)} days ${days < 0 ? 'ago' : 'from now'})`);
    console.log(`  URL: ${t.submit_url || t.contact_url || t.url}`);
    console.log('');
  });
}

function showSummary() {
  const data = loadData();
  const all = getAllTargets(data);
  const live = all.filter(t => t.status === 'live').length;
  const submitted = all.filter(t => t.status === 'submitted').length;
  const due = all.filter(isFollowUpDue).length;

  console.log(`\nOBG Backlinks: ${live} live | ${submitted} in review | ${due} need follow-up | ${all.length} total tracked\n`);
}

// ── Update Command ────────────────────────────────────────────────────────────
function updateTarget(id, status, options = {}) {
  const VALID_STATUSES = ['pending', 'submitted', 'live', 'rejected', 'no_response', 'follow_up'];

  if (!VALID_STATUSES.includes(status)) {
    console.error(`Invalid status "${status}". Valid: ${VALID_STATUSES.join(', ')}`);
    process.exit(1);
  }

  const data = loadData();
  const found = findTarget(data, id);

  if (!found) {
    console.error(`Target "${id}" not found. Available IDs:`);
    getAllTargets(data).forEach(t => console.log(`  ${t.id} (${t.name})`));
    process.exit(1);
  }

  const { section, idx } = found;
  const target = data[section][idx];
  const today = new Date().toISOString().split('T')[0];

  // Update status
  target.status = status;

  // Update dates based on status
  if (status === 'submitted') {
    target.submitted_date = target.submitted_date || today;
    target.outreach_sent = target.outreach_sent || today;
    // Auto-set follow-up in 14 days if not specified
    if (!options.date) {
      const followUp = new Date();
      followUp.setDate(followUp.getDate() + 14);
      target.follow_up_date = followUp.toISOString().split('T')[0];
    }
  }

  if (status === 'live') {
    target.live_url = options.url || target.live_url;
    target.published_url = options.url || target.published_url;
    target.follow_up_date = null; // Clear follow-up when live
  }

  if (options.url) {
    target.live_url = options.url;
    target.published_url = options.url;
  }

  if (options.date) {
    target.follow_up_date = options.date;
  }

  if (options.note) {
    target.notes = options.note + (target.notes ? ` | ${target.notes}` : '');
  }

  // Update stats
  data.stats = {
    ...data.stats,
    submitted: getAllTargets(data).filter(t => t.status === 'submitted').length + (status === 'submitted' ? 1 : 0),
    live: getAllTargets(data).filter(t => t.status === 'live').length + (status === 'live' ? 1 : 0),
    rejected: getAllTargets(data).filter(t => t.status === 'rejected').length + (status === 'rejected' ? 1 : 0),
  };

  data[section][idx] = target;
  saveData(data);

  const icon = STATUS_ICONS[status] || '⚪';
  console.log(`\n${icon} Updated: ${target.name}`);
  console.log(`   Status: ${status}`);
  if (target.live_url) console.log(`   URL: ${target.live_url}`);
  if (target.follow_up_date) console.log(`   Follow-up: ${target.follow_up_date}`);
  console.log('');
}

// ── Main ──────────────────────────────────────────────────────────────────────
function main() {
  const args = process.argv.slice(2);

  if (args.includes('--due')) {
    showDue();
    return;
  }

  if (args.includes('--summary')) {
    showSummary();
    return;
  }

  if (args.includes('--update')) {
    const updateIdx = args.indexOf('--update');
    const id = args[updateIdx + 1];
    const status = args[updateIdx + 2];

    if (!id || !status) {
      console.error('Usage: --update <id> <status> [--url <url>] [--date <date>] [--note "note"]');
      process.exit(1);
    }

    const options = {};
    if (args.includes('--url')) options.url = args[args.indexOf('--url') + 1];
    if (args.includes('--date')) options.date = args[args.indexOf('--date') + 1];
    if (args.includes('--note')) options.note = args[args.indexOf('--note') + 1];

    updateTarget(id, status, options);
    return;
  }

  // Default: show dashboard with optional filters
  const filters = {};
  if (args.includes('--tier')) filters.tier = args[args.indexOf('--tier') + 1];
  if (args.includes('--type')) filters.type = args[args.indexOf('--type') + 1];
  if (args.includes('--status')) filters.status = args[args.indexOf('--status') + 1];

  showDashboard(filters);
}

main();
