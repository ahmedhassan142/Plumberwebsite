import mongoose, { Document, Schema } from 'mongoose';

export interface ITestimonial extends Document {
  customerName: string;
  customerLocation: string;
  rating: number;
  comment: string;
  serviceReceived: string;
  beforeImage?: string;
  afterImage?: string;
  isApproved: boolean;
  featured: boolean;
  response?: string;
  respondedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const TestimonialSchema: Schema = new Schema({
  customerName: {
    type: String,
    required: [true, 'Customer name is required'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  customerLocation: {
    type: String,
    required: [true, 'Customer location is required'],
    trim: true
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot be more than 5']
  },
  comment: {
    type: String,
    required: [true, 'Comment is required'],
    maxlength: [1000, 'Comment cannot be more than 1000 characters']
  },
  serviceReceived: {
    type: String,
    required: [true, 'Service received is required']
  },
  beforeImage: {
    type: String
  },
  afterImage: {
    type: String
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  featured: {
    type: Boolean,
    default: false
  },
  response: {
    type: String,
    maxlength: [500, 'Response cannot be more than 500 characters']
  },
  respondedAt: {
    type: Date
  }
}, {
  timestamps: true
});

// Index for better query performance
TestimonialSchema.index({ isApproved: 1, featured: 1, rating: -1 });
TestimonialSchema.index({ createdAt: -1 });

export default mongoose.models.Testimonial || mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);