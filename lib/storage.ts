import { kv } from '@vercel/kv';
import { Lead } from '@/types';

export const LEADS_KEY = 'crm:leads';

export async function getAllLeads(): Promise<Lead[]> {
  try {
    const leads = await kv.get<Lead[]>(LEADS_KEY);
    return leads || [];
  } catch {
    return [];
  }
}

export async function saveLead(lead: Lead): Promise<void> {
  const leads = await getAllLeads();
  const idx = leads.findIndex(l => l.id === lead.id);
  if (idx >= 0) {
    leads[idx] = lead;
  } else {
    leads.unshift(lead);
  }
  await kv.set(LEADS_KEY, leads);
}

export async function deleteLead(id: string): Promise<void> {
  const leads = await getAllLeads();
  await kv.set(LEADS_KEY, leads.filter(l => l.id !== id));
}

export async function getLeadById(id: string): Promise<Lead | null> {
  const leads = await getAllLeads();
  return leads.find(l => l.id === id) || null;
}
