import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/lib/models/Contact';

// ✅ Remove the old Params interface and use Promise directly

export async function GET(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> } // ✅ Add Promise
) {
  try {
    await connectDB();

    // ✅ Await params first
    const { id } = await params;

    const contact = await Contact.findById(id); // ✅ Use resolved id

    if (!contact) {
      return NextResponse.json(
        { error: 'Contact not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ contact });
  } catch (error) {
    console.error('Error fetching contact:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> } // ✅ Add Promise
) {
  try {
    await connectDB();

    // ✅ Await params first
    const { id } = await params;

    const body = await request.json();
    
    const contact = await Contact.findByIdAndUpdate(
      id, // ✅ Use resolved id
      body,
      { new: true, runValidators: true }
    );

    if (!contact) {
      return NextResponse.json(
        { error: 'Contact not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      contact,
      message: 'Contact updated successfully'
    });
  } catch (error: any) {
    console.error('Error updating contact:', error);
    
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

export async function DELETE(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> } // ✅ Add Promise
) {
  try {
    await connectDB();

    // ✅ Await params first
    const { id } = await params;

    const contact = await Contact.findByIdAndDelete(id); // ✅ Use resolved id

    if (!contact) {
      return NextResponse.json(
        { error: 'Contact not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: 'Contact deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting contact:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}