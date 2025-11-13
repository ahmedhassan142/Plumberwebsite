import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Service from '@/lib/models/Service';

interface Params {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: Params) {
  try {
    await connectDB();

    const service = await Service.findById(params.id);

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

export async function PUT(request: NextRequest, { params }: Params) {
  try {
    await connectDB();

    const body = await request.json();
    
    const service = await Service.findByIdAndUpdate(
      params.id,
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

export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    await connectDB();

    const service = await Service.findByIdAndDelete(params.id);

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