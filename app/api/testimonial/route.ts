import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Testimonial from '@/lib/models/Testimonial';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const approvedOnly = searchParams.get('approvedOnly') !== 'false';
    const featuredOnly = searchParams.get('featuredOnly') === 'true';
    const limit = parseInt(searchParams.get('limit') || '10');

    const filter: any = {};
    if (approvedOnly) filter.isApproved = true;
    if (featuredOnly) filter.featured = true;

    const testimonials = await Testimonial.find(filter)
      .sort({ rating: -1, createdAt: -1 })
      .limit(limit);

    return NextResponse.json({ testimonials });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
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
    
    const testimonial = await Testimonial.create(body);

    return NextResponse.json(
      { 
        testimonial, 
        message: 'Testimonial submitted successfully. It will be visible after approval.' 
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating testimonial:', error);
    
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