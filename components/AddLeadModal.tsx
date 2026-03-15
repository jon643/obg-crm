'use client';

import { useState } from 'react';

interface Props {
  categoryOptions: string[];
  onClose: () => void;
  onSaved: () => void;
}

const inputStyle = {
  background: '#1A1A1A', border: '1px solid #2A2A2A', color: '#F0EDE8',
  padding: '10px 14px', fontSize: 13, width: '100%', boxSizing: 'border-box' as const,
  fontFamily: "'DM Mono', monospace", outline: 'none', marginTop: 6,
};

const labelStyle = {
  fontSize: 10, letterSpacing: 2, textTransform: 'uppercase' as const,
  color: '#666', fontFamily: "'DM Mono', monospace",
};

export default function AddLeadModal({ categoryOptions, onClose, onSaved }: Props) {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    productCategory: '', boothNotes: '', linkedinUrl: '', websiteUrl: '',
    internalNotes: '',
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  async function submit() {
    if (!form.name || !form.company || !form.email || !form.productCategory) {
      setError('Name, company, email, and category are required.');
      return;
    }
    setSaving(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        onSaved();
      } else {
        setError('Failed to save. Try again.');
      }
    } finally {
      setSaving(false);
    }
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
    }}>
      <div style={{
        background: '#141414', border: '1px solid #2A2A2A', width: '100%', maxWidth: 560,
        maxHeight: '90vh', overflowY: 'auto', padding: 36,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#F0EDE8', margin: 0 }}>
            New Lead
          </h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#666', fontSize: 18, cursor: 'pointer' }}>✕</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ gridColumn: 'span 1' }}>
            <label style={labelStyle}>Name *</label>
            <input style={inputStyle} value={form.name} onChange={set('name')} placeholder="Full name" />
          </div>
          <div>
            <label style={labelStyle}>Company *</label>
            <input style={inputStyle} value={form.company} onChange={set('company')} placeholder="Company name" />
          </div>
          <div>
            <label style={labelStyle}>Email *</label>
            <input style={inputStyle} type="email" value={form.email} onChange={set('email')} placeholder="email@company.com" />
          </div>
          <div>
            <label style={labelStyle}>Phone</label>
            <input style={inputStyle} value={form.phone} onChange={set('phone')} placeholder="(555) 000-0000" />
          </div>
          <div style={{ gridColumn: 'span 2' }}>
            <label style={labelStyle}>Product Category *</label>
            <select style={{ ...inputStyle }} value={form.productCategory} onChange={set('productCategory')}>
              <option value="">Select category...</option>
              {categoryOptions.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label style={labelStyle}>LinkedIn URL</label>
            <input style={inputStyle} value={form.linkedinUrl} onChange={set('linkedinUrl')} placeholder="linkedin.com/in/..." />
          </div>
          <div>
            <label style={labelStyle}>Website</label>
            <input style={inputStyle} value={form.websiteUrl} onChange={set('websiteUrl')} placeholder="company.com" />
          </div>
          <div style={{ gridColumn: 'span 2' }}>
            <label style={labelStyle}>Booth / Show Notes</label>
            <textarea style={{ ...inputStyle, height: 80, resize: 'vertical' }} value={form.boothNotes} onChange={set('boothNotes')} placeholder="What did you talk about? Booth number, products they showed, interest level..." />
          </div>
          <div style={{ gridColumn: 'span 2' }}>
            <label style={labelStyle}>Internal Notes</label>
            <textarea style={{ ...inputStyle, height: 60, resize: 'vertical' }} value={form.internalNotes} onChange={set('internalNotes')} placeholder="Private notes for your reference..." />
          </div>
        </div>

        {error && <p style={{ color: '#E84B4B', fontSize: 12, marginTop: 12 }}>{error}</p>}

        <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
          <button
            onClick={submit}
            disabled={saving}
            style={{
              background: '#E8B84B', color: '#0F0F0F', border: 'none', padding: '12px 28px',
              fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase',
              cursor: saving ? 'not-allowed' : 'pointer', fontFamily: "'DM Mono', monospace",
              opacity: saving ? 0.7 : 1,
            }}
          >
            {saving ? 'Saving...' : 'Save Lead'}
          </button>
          <button
            onClick={onClose}
            style={{
              background: 'none', color: '#666', border: '1px solid #2A2A2A', padding: '12px 24px',
              fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase', cursor: 'pointer',
              fontFamily: "'DM Mono', monospace",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
