import nodemailer from 'nodemailer';
import { Lead } from '@/types';

export interface EmailTemplate {
  subject: string;
  html: string;
}

function getTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (not regular password)
    },
  });
}

export function getSequenceTemplate(step: number, lead: Lead): EmailTemplate {
  const firstName = lead.name.split(' ')[0];
  const fromName = 'Jon Klein | Online Brand Growth';

  const templates: Record<number, EmailTemplate> = {
    1: {
      subject: `Great connecting at ASD, ${firstName} — here's what we do`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a; line-height: 1.7;">
          <p>Hi ${firstName},</p>
          
          <p>It was great meeting you at ASD Market Week! I wanted to follow up while the show is still fresh.</p>
          
          <p>At <strong>Online Brand Growth</strong>, we help brands like ${lead.company} scale on Amazon and DTC channels — from listing optimization and PPC management to full brand strategy. We've helped our partners significantly increase their sales velocity while protecting their brand positioning.</p>
          
          <p>I'd love to explore whether there's a fit for us to work together. A quick 20-minute call would let us dig into your goals for ${lead.productCategory} and see where we might add the most value.</p>
          
          <p>Are you open to connecting this week or next?</p>
          
          <p style="margin-top: 32px;">
            Best,<br>
            <strong>Jon Klein</strong><br>
            Online Brand Growth<br>
            <a href="https://onlinebrandgrowth.com" style="color: #E8B84B;">onlinebrandgrowth.com</a>
          </p>
        </div>
      `,
    },
    2: {
      subject: `A quick idea for ${lead.company}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a; line-height: 1.7;">
          <p>Hi ${firstName},</p>
          
          <p>Wanted to share something that might be useful for ${lead.company}.</p>
          
          <p>One of the biggest opportunities we see for brands in the <strong>${lead.productCategory}</strong> space right now is closing the gap between discovery and conversion on Amazon — particularly through enhanced brand content, strategic keyword targeting, and well-structured PPC campaigns that don't eat margin.</p>
          
          <p>We recently helped a similar brand increase their organic ranking for key terms by 60% in 90 days without increasing ad spend. Happy to share more detail on how we approached it.</p>
          
          <p>Would a 20-minute strategy call be worth your time? I'm happy to come prepared with some initial thoughts specific to ${lead.company}.</p>
          
          <p style="margin-top: 32px;">
            Best,<br>
            <strong>Jon Klein</strong><br>
            Online Brand Growth<br>
            <a href="https://onlinebrandgrowth.com" style="color: #E8B84B;">onlinebrandgrowth.com</a>
          </p>
        </div>
      `,
    },
    3: {
      subject: `Last note from me, ${firstName}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a; line-height: 1.7;">
          <p>Hi ${firstName},</p>
          
          <p>I know post-show is always hectic, so I'll keep this short.</p>
          
          <p>I genuinely think there could be a strong fit between what we do at Online Brand Growth and where ${lead.company} is headed — especially in the ${lead.productCategory} category.</p>
          
          <p>If the timing isn't right, no worries at all. But if you'd like to explore it, I'm easy to reach:</p>
          
          <ul style="padding-left: 20px;">
            <li>Reply to this email</li>
            <li>Book a call: <a href="https://onlinebrandgrowth.com" style="color: #E8B84B;">onlinebrandgrowth.com</a></li>
          </ul>
          
          <p>Either way, wishing you a great Q2. Hope we get a chance to work together down the road.</p>
          
          <p style="margin-top: 32px;">
            Warm regards,<br>
            <strong>Jon Klein</strong><br>
            Online Brand Growth<br>
            <a href="https://onlinebrandgrowth.com" style="color: #E8B84B;">onlinebrandgrowth.com</a>
          </p>
        </div>
      `,
    },
  };

  return templates[step] || templates[1];
}

export async function sendEmail(
  to: string,
  template: EmailTemplate,
  fromName: string = 'Jon Klein | Online Brand Growth'
): Promise<{ success: boolean; error?: string }> {
  try {
    const transporter = getTransporter();
    await transporter.sendMail({
      from: `"${fromName}" <${process.env.GMAIL_USER}>`,
      to,
      subject: template.subject,
      html: template.html,
    });
    return { success: true };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error: String(error) };
  }
}
