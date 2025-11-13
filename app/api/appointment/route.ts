import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Appointment from '@/lib/models/Appointment';
import Contact from '@/lib/models/Contact';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status');
    const date = searchParams.get('date');

    const filter: any = {};
    if (status) filter.status = status;
    if (date) {
      const startDate = new Date(date);
      const endDate = new Date(date);
      endDate.setDate(endDate.getDate() + 1);
      filter.scheduledDate = {
        $gte: startDate,
        $lt: endDate
      };
    }

    const skip = (page - 1) * limit;

    const appointments = await Appointment.find(filter)
      .populate('contactId', 'name email phone')
      .sort({ scheduledDate: 1 })
      .skip(skip)
      .limit(limit);

    const total = await Appointment.countDocuments(filter);
    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      appointments,
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
    console.error('Error fetching appointments:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    
    // First create or find contact
    let contact = await Contact.findOne({ email: body.contactEmail });
    if (!contact) {
      contact = await Contact.create({
        name: body.contactName,
        email: body.contactEmail,
        phone: body.contactPhone,
        serviceType: body.serviceType,
        message: `Appointment scheduled for ${body.serviceType} on ${body.scheduledDate}`,
        address: body.address
      });
    }

    // Create appointment
    const appointment = await Appointment.create({
      ...body,
      contactId: contact._id
    });

    return NextResponse.json(
      { 
        appointment: await appointment.populate('contactId', 'name email phone'),
        message: 'Appointment scheduled successfully' 
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating appointment:', error);
    
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