import mongoose, { Document, Schema } from 'mongoose';

export interface IService extends Document {
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  priceRange?: {
    min: number;
    max: number;
    unit: string;
  };
  duration: string;
  isActive: boolean;
  images: string[];
  metaTitle: string;
  metaDescription: string;
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, 'Service title is required'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  slug: {
    type: String,
    required: [true, 'Slug is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Service description is required'],
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  shortDescription: {
    type: String,
    required: [true, 'Short description is required'],
    maxlength: [200, 'Short description cannot be more than 200 characters']
  },
  icon: {
    type: String,
    required: [true, 'Icon is required']
  },
  features: [{
    type: String,
    required: true
  }],
  priceRange: {
    min: {
      type: Number,
      min: 0
    },
    max: {
      type: Number,
      min: 0
    },
    unit: {
      type: String,
      default: 'USD'
    }
  },
  duration: {
    type: String,
    default: 'Varies'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  images: [{
    type: String
  }],
  metaTitle: {
    type: String,
    maxlength: [60, 'Meta title cannot be more than 60 characters']
  },
  metaDescription: {
    type: String,
    maxlength: [160, 'Meta description cannot be more than 160 characters']
  }
}, {
  timestamps: true
});

// Index for better query performance
ServiceSchema.index({ slug: 1, isActive: 1 });
ServiceSchema.index({ createdAt: -1 });

export default mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);