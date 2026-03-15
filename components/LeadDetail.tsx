'use client';

import { useState } from 'react';
import { Lead, LeadStatus, STATUS_LABELS, STATUS_COLORS } from '@/types';

interface Props {
  lead: Lead;
  onClose: () => void;
  onUpdated: () => void;
}

const labelStyle = {
  fontSize: 10, letterSpacing: 2, textTransform: 'uppercase' as const,
  color: '#555', fontFamily: "'DM Mono', monospace", display: 'block', marginBottom: 4,
};

const inputStyle = {
  background: '#1A1A1A', border: '1px solid #2A2A2A', color: '#F0EDE8',
  padding: '8px 12px', fontSize: 13, width: '100%', boxSizing: 'border-box' as const,
  fontFamily: "'DM Mono', monospace", outline: 'none',
};

const STATUSES: LeadStatus[] = ['new', 'contacted', 'sequence', 'partner', 'closed'];

const SEQ_STEPS = [
  { step: 1, label: 'Step 1 — Day 0', desc: 'Show follow-up intro email' },
  { step: 2, label: 'Step 2 — Day 4', desc: 'Value-add with case study angle' },
  { step: 3, label: 'Step 3 — Day 10', desc: 'Final soft close' },
];

export default function LeadDetail({ lead, onClose, onUpdated }: Props) {
  const [status, setStatus] = useState<LeadStatus>(lead.status);
  const [notes, setNotes] = useState(lead.internalNotes);
  const [saving, setSaving] = useState(false);
  const [sending, setSending] = useState<number | null>(null);
  const [emailMsg, setEmailMsg] = useState('');

  async function save() {
    setSaving(true);
    await fetch(`/api/leads/${lead.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status, internalNotes: notes }),
    });
    setSaving(false);
    onUpdated();
  }

  async function sendEmail(step: number) {
    setSending(step);
    setEmailMsg('');
    const res = await fetch('/api/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ leadId: lead.id, step }),
    });
    const data = await res.json();
    setSending(null);
    if (data.success) {
      setEmailMsg(`✓ Step ${step} email sent to ${lead.email}`);
      setTimeout(onUpdated, 1500);
    } else {
      setEmailMsg(`✗ Failed: ${data.error || 'Unknown error'}`);
    }
  }

  async function deleteLead() {
    if (!confirm(`Delete ${lead.name}? This cannot be undone.`)) return;
    await fetch(`/api/leads/${lead.id}`, { method: 'DELETE' });
    onUpdated();
  }

  const sentSteps = new Set(lead.emailHistory.filter(e => e.status === 'sent').map(e => e.step));

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
    }}>
      <div style={{
        background: '#141414', borderLeft: '1px solid #2A2A2A', width: '100%', maxWidth: 500,
        height: '100%', overflowY: 'auto', padding: 36, display: 'flex', flexDirection: 'column', gap: 28,
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#F0EDE8', margin: 0 }}>{lead.name}</h2>
            <p style={{ fontSize: 13, color: '#888', marginTop: 4 }}>{lead.company}</p>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#555', fontSize: 18, cursor: 'pointer' }}>✕</button>
        </div>

        {/* Contact Info */}
        <section>
          <p style={{ ...labelStyle, marginBottom: 12, color: '#E8B84B' }}>Contact Info</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div>
              <label style={labelStyle}>Email</label>
              <p style={{ fontSize: 13, color: '#CCC', margin: 0 }}>{lead.email || '—'}</p>
            </div>
            <div>
              <label style={labelStyle}>Phone</label>
              <p style={{ fontSize: 13, color: '#CCC', margin: 0 }}>{lead.phone || '—'}</p>
            </div>
            <div>
              <label style={labelStyle}>Category</label>
              <p style={{ fontSize: 13, color: '#CCC', margin: 0 }}>{lead.productCategory}</p>
            </div>
            <div>
              <label style={labelStyle}>Website</label>
              {lead.websiteUrl ? (
                <a href={lead.websiteUrl.startsWith('http') ? lead.websiteUrl : `https://${lead.websiteUrl}`} target="_blank" rel="noreferrer" style={{ fontSize: 13, color: '#E8B84B', margin: 0 }}>{lead.websiteUrl}</a>
              ) : <p style={{ fontSize: 13, color: '#555', margin: 0 }}>—</p>}
            </div>
            {lead.linkedinUrl && (
              <div style={{ gridColumn: 'span 2' }}>
                <label style={labelStyle}>LinkedIn</label>
                <a href={lead.linkedinUrl.startsWith('http') ? lead.linkedinUrl : `https://${lead.linkedinUrl}`} target="_blank" rel="noreferrer" style={{ fontSize: 13, color: '#E8B84B' }}>{lead.linkedinUrl}</a>
              </div>
            )}
          </div>
        </section>

        {/* Show Notes */}
        {lead.boothNotes && (
          <section>
            <p style={{ ...labelStyle, marginBottom: 8, color: '#E8B84B' }}>Show Notes</p>
            <p style={{ fontSize: 13, color: '#AAA', lineHeight: 1.6, margin: 0, background: '#1A1A1A', padding: 12, border: '1px solid #222' }}>{lead.boothNotes}</p>
          </section>
        )}

        {/* Status */}
        <section>
          <p style={{ ...labelStyle, marginBottom: 10, color: '#E8B84B' }}>Status</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {STATUSES.map(s => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                style={{
                  padding: '5px 14px', fontSize: 11, letterSpacing: 1, textTransform: 'uppercase',
                  cursor: 'pointer', fontFamily: "'DM Mono', monospace", fontWeight: 600,
                  background: status === s ? STATUS_COLORS[s] : 'transparent',
                  color: status === s ? '#0F0F0F' : STATUS_COLORS[s],
                  border: `1px solid ${STATUS_COLORS[s]}`,
                  transition: 'all 0.15s',
                }}
              >
                {STATUS_LABELS[s]}
              </button>
            ))}
          </div>
        </section>

        {/* Email Sequence */}
        <section>
          <p style={{ ...labelStyle, marginBottom: 10, color: '#E8B84B' }}>Email Sequence</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {SEQ_STEPS.map(({ step, label, desc }) => {
              const sent = sentSteps.has(step);
              return (
                <div key={step} style={{
                  background: '#1A1A1A', border: `1px solid ${sent ? '#2A3A2A' : '#222'}`,
                  padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 600, color: sent ? '#4BE87A' : '#CCC', margin: 0 }}>{label}</p>
                    <p style={{ fontSize: 11, color: '#555', margin: '2px 0 0' }}>{desc}</p>
                    {sent && (
                      <p style={{ fontSize: 10, color: '#4BE87A', margin: '2px 0 0' }}>
                        ✓ Sent {new Date(lead.emailHistory.find(e => e.step === step)!.sentAt).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => sendEmail(step)}
                    disabled={sending === step}
                    style={{
                      background: sent ? 'transparent' : '#E8B84B22',
                      color: sent ? '#4BE87A' : '#E8B84B',
                      border: `1px solid ${sent ? '#4BE87A55' : '#E8B84B55'}`,
                      padding: '6px 14px', fontSize: 10, letterSpacing: 1, textTransform: 'uppercase',
                      cursor: sending === step ? 'not-allowed' : 'pointer', fontFamily: "'DM Mono', monospace",
                      fontWeight: 600,
                    }}
                  >
                    {sending === step ? '...' : sent ? 'Resend' : 'Send'}
                  </button>
                </div>
              );
            })}
          </div>
          {emailMsg && (
            <p style={{ fontSize: 12, marginTop: 10, color: emailMsg.startsWith('✓') ? '#4BE87A' : '#E84B4B' }}>{emailMsg}</p>
          )}
        </section>

        {/* Internal Notes */}
        <section>
          <p style={{ ...labelStyle, marginBottom: 8, color: '#E8B84B' }}>Internal Notes</p>
          <textarea
            value={notes}
            onChange={e => setNotes(e.target.value)}
            style={{ ...inputStyle, height: 80, resize: 'vertical' }}
            placeholder="Private notes..."
          />
        </section>

        {/* Actions */}
        <div style={{ display: 'flex', gap: 10, marginTop: 'auto', paddingTop: 8 }}>
          <button
            onClick={save}
            disabled={saving}
            style={{
              background: '#E8B84B', color: '#0F0F0F', border: 'none', padding: '11px 24px',
              fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase',
              cursor: saving ? 'not-allowed' : 'pointer', fontFamily: "'DM Mono', monospace",
              flex: 1,
            }}
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
          <button
            onClick={deleteLead}
            style={{
              background: 'none', color: '#E84B4B55', border: '1px solid #E84B4B33', padding: '11px 16px',
              fontSize: 12, cursor: 'pointer', fontFamily: "'DM Mono', monospace",
            }}
          >
            Delete
          </button>
        </div>

        <p style={{ fontSize: 10, color: '#333', textAlign: 'center' }}>
          Added {new Date(lead.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>
    </div>
  );
}
