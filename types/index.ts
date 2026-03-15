export type LeadStatus = 'new' | 'contacted' | 'sequence' | 'partner' | 'closed';

export interface Lead {
  id: string;
  // Contact Info
  name: string;
  company: string;
  email: string;
  phone?: string;
  // Show Info
  productCategory: string;
  boothNotes: string;
  linkedinUrl?: string;
  websiteUrl?: string;
  // CRM
  status: LeadStatus;
  createdAt: string;
  updatedAt: string;
  // Email Sequence
  sequenceStep: number; // 0 = not started, 1 = day1, 2 = day4, 3 = day10
  sequenceStarted?: string; // ISO date when sequence was enrolled
  lastEmailSent?: string;
  emailHistory: EmailRecord[];
  // Notes
  internalNotes: string;
}

export interface EmailRecord {
  step: number;
  sentAt: string;
  subject: string;
  status: 'sent' | 'failed';
}

export const STATUS_LABELS: Record<LeadStatus, string> = {
  new: 'New Lead',
  contacted: 'Contacted',
  sequence: 'In Sequence',
  partner: 'Partner ✓',
  closed: 'Closed',
};

export const STATUS_COLORS: Record<LeadStatus, string> = {
  new: '#E8B84B',
  contacted: '#4B9AE8',
  sequence: '#8B4BE8',
  partner: '#4BE87A',
  closed: '#888',
};
