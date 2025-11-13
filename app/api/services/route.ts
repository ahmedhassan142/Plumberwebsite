import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Service from '@/lib/models/Service';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const activeOnly = searchParams.get('activeOnly') !== 'false';

    if (slug) {
      // Get single service by slug
      const service = await Service.findOne({ 
        slug, 
        ...(activeOnly && { isActive: true }) 
      });

      if (!service) {
        return NextResponse.json(
          { error: 'Service not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({ service });
    }

    // Get all services
    const services = await Service.find(
      activeOnly ? { isActive: true } : {}
    ).sort({ createdAt: -1 });

    return NextResponse.json({ services });
  } catch (error) {
    console.error('Error fetching services:', error);
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
    
    const service = await Service.create(body);

    return NextResponse.json(
      { service, message: 'Service created successfully' },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating service:', error);
    
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