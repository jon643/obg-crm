import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { getAllLeads, saveLead } from '@/lib/storage';
import { Lead } from '@/types';

export async function GET() {
  try {
    const leads = await getAllLeads();
    return NextResponse.json(leads);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const now = new Date().toISOString();
    
    const lead: Lead = {
      id: uuidv4(),
      name: body.name,
      company: body.company,
      email: body.email,
      phone: body.phone || '',
      productCategory: body.productCategory,
      boothNotes: body.boothNotes || '',
      linkedinUrl: body.linkedinUrl || '',
      websiteUrl: body.websiteUrl || '',
      status: 'new',
      createdAt: now,
      updatedAt: now,
      sequenceStep: 0,
      emailHistory: [],
      internalNotes: body.internalNotes || '',
    };

    await saveLead(lead);
    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create lead' }, { status: 500 });
  }
}
