import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Replace with your email address
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'your-email@example.com';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, business, stage, message, paymentStatus } = body;

    // Validate required fields
    if (!fullName || !email) {
      return NextResponse.json(
        { error: 'Full name and email are required' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const response = await resend.emails.send({
      from: 'Scale My Business <onboarding@resend.dev>',
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New Program Enrollment: ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: rgb(99,40,210);">New Program Enrollment</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Applicant Information</h3>
            
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone/WhatsApp:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Business Name:</strong> ${business || 'Not provided'}</p>
            
            <h3 style="margin-top: 20px; color: #333;">Program Details</h3>
            
            <p><strong>Business Stage:</strong> ${stage || 'Not specified'}</p>
            <p><strong>Payment Status:</strong> <span style="color: rgb(255,155,56); font-weight: bold;">${paymentStatus === 'after' ? '✓ Already Paid' : '⏳ Payment Pending'}</span></p>
            
            ${message ? `<p><strong>Additional Message:</strong></p><p style="background: white; padding: 12px; border-left: 3px solid rgb(99,40,210);">${message.replace(/\n/g, '<br>')}</p>` : ''}
          </div>
          
          <div style="background: rgb(99,40,210); color: white; padding: 15px; border-radius: 8px; text-align: center;">
            <p style="margin: 0;"><strong>Program Price:</strong> ₦30,000</p>
            <p style="margin: 5px 0 0;">3 Weeks Intensive · Limited Slots</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 20px; text-align: center;">
            This is an automated email from Scale My Business enrollment form.
          </p>
        </div>
      `,
    });

    if (response.error) {
      console.error('Resend error:', response.error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully', data: response.data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
