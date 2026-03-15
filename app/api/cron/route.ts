import { NextRequest, NextResponse } from 'next/server';
import { getAllLeads, saveLead } from '@/lib/storage';
import { sendEmail, getSequenceTemplate } from '@/lib/email';
import { Lead } from '@/types';

// Cron: runs daily at 9am - advances email sequences automatically
// Vercel cron: "0 14 * * *" (9am EST = 2pm UTC)

function daysSince(isoDate: string): number {
  const then = new Date(isoDate).getTime();
  const now = Date.now();
  return Math.floor((now - then) / (1000 * 60 * 60 * 24));
}

export async function GET(req: NextRequest) {
  // Verify this is called by Vercel cron (or allow manual trigger with secret)
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const leads = await getAllLeads();
  const results: { leadId: string; step: number; success: boolean }[] = [];

  for (const lead of leads) {
    if (lead.status !== 'sequence' && lead.sequenceStep === 0) continue;
    if (lead.status === 'partner' || lead.status === 'closed') continue;
    if (!lead.sequenceStarted) continue;
    if (lead.sequenceStep >= 3) continue; // Sequence complete

    const daysSinceStart = daysSince(lead.sequenceStarted);
    
    // Step schedule: 1 = day 0, 2 = day 4, 3 = day 10
    const schedules: Record<number, number> = { 1: 0, 2: 4, 3: 10 };
    const nextStep = lead.sequenceStep + 1;
    const daysRequired = schedules[nextStep];

    if (daysRequired !== undefined && daysSinceStart >= daysRequired) {
      const template = getSequenceTemplate(nextStep, lead);
      const result = await sendEmail(lead.email, template);
      const now = new Date().toISOString();

      lead.emailHistory.push({
        step: nextStep,
        sentAt: now,
        subject: template.subject,
        status: result.success ? 'sent' : 'failed',
      });

      if (result.success) {
        lead.sequenceStep = nextStep;
        lead.lastEmailSent = now;
      }

      lead.updatedAt = now;
      await saveLead(lead);
      results.push({ leadId: lead.id, step: nextStep, success: result.success });
    }
  }

  return NextResponse.json({ processed: results.length, results });
}
