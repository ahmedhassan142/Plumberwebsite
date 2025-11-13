import mongoose, { Document, Schema } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  status: 'new' | 'contacted' | 'quoted' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'emergency';
  address?: string;
  bestTimeToContact: string;
  source: string;
  assignedTo?: string;
  notes: string[];
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  serviceType: {
    type: String,
    required: [true, 'Service type is required'],
    enum: [
      'Emergency Service',
      'Residential Plumbing',
      'Commercial Plumbing',
      'Installation',
      'Maintenance',
      'Drain Services',
      'Other'
    ]
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    maxlength: [2000, 'Message cannot be more than 2000 characters']
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'quoted', 'completed', 'cancelled'],
    default: 'new'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'emergency'],
    default: 'medium'
  },
  address: {
    type: String,
    trim: true
  },
  bestTimeToContact: {
    type: String,
    default: 'Any time'
  },
  source: {
    type: String,
    default: 'website'
  },
  assignedTo: {
    type: String,
    trim: true
  },
  notes: [{
    type: String,
    trim: true
  }],
  isRead: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Index for better query performance
ContactSchema.index({ status: 1, createdAt: -1 });
ContactSchema.index({ priority: 1, createdAt: -1 });
ContactSchema.index({ email: 1 });

export default mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);