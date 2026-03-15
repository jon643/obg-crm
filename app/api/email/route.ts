import { NextRequest, NextResponse } from 'next/server';
import { getLeadById, saveLead } from '@/lib/storage';
import { sendEmail, getSequenceTemplate } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const { leadId, step } = await req.json();
    
    const lead = await getLeadById(leadId);
    if (!lead) return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    if (!lead.email) return NextResponse.json({ error: 'Lead has no email' }, { status: 400 });

    const template = getSequenceTemplate(step, lead);
    const result = await sendEmail(lead.email, template);

    const now = new Date().toISOString();
    lead.emailHistory.push({
      step,
      sentAt: now,
      subject: template.subject,
      status: result.success ? 'sent' : 'failed',
    });

    if (result.success) {
      lead.sequenceStep = step;
      lead.lastEmailSent = now;
      lead.status = 'sequence';
      if (!lead.sequenceStarted) lead.sequenceStarted = now;
    }

    lead.updatedAt = now;
    await saveLead(lead);

    return NextResponse.json({ success: result.success, error: result.error });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
