import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Service from '@/lib/models/Service';

// ✅ Remove the old Params interface and use Promise directly

export async function GET(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> } // ✅ Add Promise
) {
  try {
    await connectDB();

    // ✅ Await params first
    const { id } = await params;

    const service = await Service.findById(id); // ✅ Use resolved id

    if (!service) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ service });
  } catch (error) {
    console.error('Error fetching service:', error);
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
    
    const service = await Service.findByIdAndUpdate(
      id, // ✅ Use resolved id
      body,
      { new: true, runValidators: true }
    );

    if (!service) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      service,
      message: 'Service updated successfully'
    });
  } catch (error: any) {
    console.error('Error updating service:', error);
    
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Service with this slug already exists' },
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

    const service = await Service.findByIdAndDelete(id); // ✅ Use resolved id

    if (!service) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: 'Service deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting service:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}