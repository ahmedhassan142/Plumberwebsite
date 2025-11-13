import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/lib/models/Contact';
import { sendEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    
    // Auto-detect emergency priority
    if (body.serviceType === 'Emergency Service' || body.message.toLowerCase().includes('emergency')) {
      body.priority = 'emergency';
    }

    const contact = await Contact.create(body);

    // Send confirmation email to customer
    try {
      const customerEmailResult = await sendEmail({
        to: body.email,
        subject: 'Thank You for Contacting ProFlow Plumbing!',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .details { background: white; padding: 20px; border-radius: 5px; margin: 20px 0; }
              .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
              .emergency { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 15px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>ProFlow Plumbing</h1>
                <p>Your Trusted Plumbing Experts</p>
              </div>
              <div class="content">
                <h2>Thank You for Your Inquiry, ${body.name}!</h2>
                <p>We have received your message and will get back to you within 24 hours.</p>
                
                <div class="details">
                  <h3>Your Service Request Details:</h3>
                  <p><strong>Service Type:</strong> ${body.serviceType}</p>
                  <p><strong>Best Time to Contact:</strong> ${body.bestTimeToContact || 'Any time'}</p>
                  <p><strong>Your Message:</strong></p>
                  <p>${body.message}</p>
                </div>

                ${body.priority === 'emergency' ? `
                <div class="emergency">
                  <h3>🚨 Emergency Service Notice</h3>
                  <p>We've identified your request as an emergency. Our team will contact you immediately.</p>
                  <p><strong>For immediate assistance, call us at: (555) 123-4567</strong></p>
                </div>
                ` : ''}

                <p><strong>What happens next?</strong></p>
                <ol>
                  <li>Our team will review your request</li>
                  <li>We'll contact you at your preferred time</li>
                  <li>We'll schedule a service appointment</li>
                  <li>Our professional plumber will arrive and fix the issue</li>
                </ol>

                <p><strong>Business Hours:</strong><br>
                Monday - Friday: 7:00 AM - 9:00 PM<br>
                Saturday - Sunday: 24/7 Emergency Service Available</p>
              </div>
              <div class="footer">
                <p>ProFlow Plumbing &copy; ${new Date().getFullYear()}</p>
                <p>123 Plumbing Street, City, State 12345</p>
                <p>Phone: (555) 123-4567 | Email: info@proflowplumbing.com</p>
              </div>
            </div>
          </body>
          </html>
        `
      });

      if (!customerEmailResult.success) {
        console.error('Failed to send customer confirmation email:', customerEmailResult.error);
      }
    } catch (emailError) {
      console.error('Error sending customer email:', emailError);
    }

    // Send notification email to admin
    try {
      const adminEmailResult = await sendEmail({
        to: "ah770643@gmail.com", // Your email
        subject: `New Contact Form Submission - ${body.serviceType}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #dc3545; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
              .details { background: white; padding: 15px; border-radius: 5px; margin: 15px 0; }
              .priority-high { background: #f8d7da; border-left: 4px solid #dc3545; padding: 10px; }
              .priority-emergency { background: #fff3cd; border-left: 4px solid #ffc107; padding: 10px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
                <p>Priority: ${body.priority?.toUpperCase() || 'MEDIUM'}</p>
              </div>
              <div class="content">
                <div class="${body.priority === 'emergency' ? 'priority-emergency' : body.priority === 'high' ? 'priority-high' : 'details'}">
                  <h3>Customer Information:</h3>
                  <p><strong>Name:</strong> ${body.name}</p>
                  <p><strong>Email:</strong> ${body.email}</p>
                  <p><strong>Phone:</strong> ${body.phone}</p>
                  <p><strong>Service Type:</strong> ${body.serviceType}</p>
                  <p><strong>Best Time to Contact:</strong> ${body.bestTimeToContact || 'Any time'}</p>
                  ${body.address ? `<p><strong>Address:</strong> ${body.address}</p>` : ''}
                </div>

                <div class="details">
                  <h3>Customer Message:</h3>
                  <p>${body.message}</p>
                </div>

                <div class="details">
                  <h3>Quick Actions:</h3>
                  <p>
                    <a href="mailto:${body.email}?subject=Re: Your plumbing service request" style="background: #007bff; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px; margin-right: 10px;">
                      Reply via Email
                    </a>
                    <a href="tel:${body.phone}" style="background: #28a745; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;">
                      Call Customer
                    </a>
                  </p>
                </div>

                <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </body>
          </html>
        `
      });

      if (!adminEmailResult.success) {
        console.error('Failed to send admin notification email:', adminEmailResult.error);
      }
    } catch (adminEmailError) {
      console.error('Error sending admin email:', adminEmailError);
    }

    return NextResponse.json(
      { 
        contact, 
        message: 'Contact form submitted successfully. We will get back to you soon!' 
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating contact:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json(
        { error: 'Validation error', details: errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status');
    const priority = searchParams.get('priority');

    const filter: any = {};
    if (status) filter.status = status;
    if (priority) filter.priority = priority;

    const skip = (page - 1) * limit;

    const contacts = await Contact.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Contact.countDocuments(filter);
    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      contacts,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}