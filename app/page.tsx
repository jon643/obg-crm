'use client';

import { useState, useEffect } from 'react';
import { Lead, LeadStatus, STATUS_LABELS, STATUS_COLORS } from '@/types';
import AddLeadModal from '@/components/AddLeadModal';
import LeadDetail from '@/components/LeadDetail';

const CATEGORY_OPTIONS = [
  'Health & Beauty', 'Fashion & Apparel', 'Home & Garden', 'Electronics & Accessories',
  'Toys & Games', 'Pet Supplies', 'Food & Beverage', 'Sports & Outdoors',
  'Baby & Kids', 'Jewelry & Watches', 'Arts & Crafts', 'Other',
];

export default function CRMPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [selected, setSelected] = useState<Lead | null>(null);
  const [filter, setFilter] = useState<LeadStatus | 'all'>('all');
  const [search, setSearch] = useState('');

  async function fetchLeads() {
    const res = await fetch('/api/leads');
    const data = await res.json();
    setLeads(Array.isArray(data) ? data : []);
    setLoading(false);
  }

  useEffect(() => { fetchLeads(); }, []);

  const filtered = leads.filter(l => {
    const matchStatus = filter === 'all' || l.status === filter;
    const q = search.toLowerCase();
    const matchSearch = !q || l.name.toLowerCase().includes(q) || l.company.toLowerCase().includes(q) || l.productCategory.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  const counts = {
    all: leads.length,
    new: leads.filter(l => l.status === 'new').length,
    contacted: leads.filter(l => l.status === 'contacted').length,
    sequence: leads.filter(l => l.status === 'sequence').length,
    partner: leads.filter(l => l.status === 'partner').length,
    closed: leads.filter(l => l.status === 'closed').length,
  };

  return (
    <div className="min-h-screen" style={{ background: '#0F0F0F', color: '#F0EDE8', fontFamily: "'DM Mono', monospace" }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid #2A2A2A', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#E8B84B' }} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, letterSpacing: '-0.5px', color: '#F0EDE8' }}>
              OBG — Lead CRM
            </span>
          </div>
          <p style={{ fontSize: 11, color: '#666', marginTop: 4, letterSpacing: 2, textTransform: 'uppercase' }}>
            ASD Market Week 2026 &amp; Beyond
          </p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          style={{
            background: '#E8B84B', color: '#0F0F0F', border: 'none', padding: '10px 22px',
            fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase',
            cursor: 'pointer', fontFamily: "'DM Mono', monospace",
          }}
        >
          + Add Lead
        </button>
      </header>

      {/* Stats Bar */}
      <div style={{ padding: '16px 32px', borderBottom: '1px solid #1E1E1E', display: 'flex', gap: 32 }}>
        {(Object.entries(counts) as [string, number][]).map(([key, count]) => (
          <button
            key={key}
            onClick={() => setFilter(key as LeadStatus | 'all')}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
              opacity: filter === key ? 1 : 0.4, transition: 'opacity 0.15s',
              fontFamily: "'DM Mono', monospace",
            }}
          >
            <span style={{ fontSize: 22, fontWeight: 700, color: key === 'all' ? '#F0EDE8' : STATUS_COLORS[key as LeadStatus] || '#F0EDE8' }}>
              {count}
            </span>
            <span style={{ fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: '#888' }}>
              {key === 'all' ? 'Total' : STATUS_LABELS[key as LeadStatus]?.replace(' ✓', '') || key}
            </span>
          </button>
        ))}
      </div>

      {/* Search */}
      <div style={{ padding: '16px 32px', borderBottom: '1px solid #1A1A1A' }}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search leads, companies, categories..."
          style={{
            background: '#1A1A1A', border: '1px solid #2A2A2A', color: '#F0EDE8',
            padding: '8px 16px', fontSize: 13, width: '100%', maxWidth: 400,
            fontFamily: "'DM Mono', monospace", outline: 'none',
          }}
        />
      </div>

      {/* Lead Table */}
      <div style={{ padding: '24px 32px' }}>
        {loading ? (
          <div style={{ textAlign: 'center', color: '#555', paddingTop: 80, fontSize: 13 }}>Loading leads...</div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#444', paddingTop: 80 }}>
            <p style={{ fontSize: 13, letterSpacing: 1 }}>NO LEADS YET</p>
            <p style={{ fontSize: 12, color: '#333', marginTop: 8 }}>Add your first ASD contact above ↑</p>
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #2A2A2A' }}>
                {['Name / Company', 'Category', 'Status', 'Seq.', 'Added', ''].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '8px 12px', fontSize: 10, letterSpacing: 2, color: '#555', textTransform: 'uppercase', fontWeight: 400 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map(lead => (
                <tr
                  key={lead.id}
                  onClick={() => setSelected(lead)}
                  style={{
                    borderBottom: '1px solid #1A1A1A', cursor: 'pointer',
                    transition: 'background 0.1s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#161616')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <td style={{ padding: '14px 12px' }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#F0EDE8' }}>{lead.name}</div>
                    <div style={{ fontSize: 11, color: '#666', marginTop: 2 }}>{lead.company}</div>
                  </td>
                  <td style={{ padding: '14px 12px', fontSize: 12, color: '#888' }}>{lead.productCategory}</td>
                  <td style={{ padding: '14px 12px' }}>
                    <span style={{
                      display: 'inline-block', padding: '3px 10px', fontSize: 10,
                      letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600,
                      background: STATUS_COLORS[lead.status] + '22',
                      color: STATUS_COLORS[lead.status], border: `1px solid ${STATUS_COLORS[lead.status]}44`,
                    }}>
                      {STATUS_LABELS[lead.status]}
                    </span>
                  </td>
                  <td style={{ padding: '14px 12px', fontSize: 12, color: '#666' }}>
                    {lead.sequenceStep > 0 ? `Step ${lead.sequenceStep}/3` : '—'}
                  </td>
                  <td style={{ padding: '14px 12px', fontSize: 11, color: '#555' }}>
                    {new Date(lead.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </td>
                  <td style={{ padding: '14px 12px', fontSize: 11, color: '#444' }}>→</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {showAdd && (
        <AddLeadModal
          categoryOptions={CATEGORY_OPTIONS}
          onClose={() => setShowAdd(false)}
          onSaved={() => { setShowAdd(false); fetchLeads(); }}
        />
      )}

      {selected && (
        <LeadDetail
          lead={selected}
          onClose={() => setSelected(null)}
          onUpdated={() => { setSelected(null); fetchLeads(); }}
        />
      )}
    </div>
  );
}
