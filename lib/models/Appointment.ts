import mongoose, { Document, Schema } from 'mongoose';

export interface IAppointment extends Document {
  contactId: mongoose.Types.ObjectId;
  serviceType: string;
  scheduledDate: Date;
  timeSlot: string;
  duration: number; // in minutes
  status: 'scheduled' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled' | 'no-show';
  assignedPlumber?: string;
  estimatedCost?: number;
  actualCost?: number;
  customerNotes?: string;
  plumberNotes?: string;
  address: string;
  contactPhone: string;
  contactEmail: string;
  emergency: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const AppointmentSchema: Schema = new Schema({
  contactId: {
    type: Schema.Types.ObjectId,
    ref: 'Contact',
    required: true
  },
  serviceType: {
    type: String,
    required: true
  },
  scheduledDate: {
    type: Date,
    required: true
  },
  timeSlot: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    default: 60, // 60 minutes default
    min: 15
  },
  status: {
    type: String,
    enum: ['scheduled', 'confirmed', 'in-progress', 'completed', 'cancelled', 'no-show'],
    default: 'scheduled'
  },
  assignedPlumber: {
    type: String,
    trim: true
  },
  estimatedCost: {
    type: Number,
    min: 0
  },
  actualCost: {
    type: Number,
    min: 0
  },
  customerNotes: {
    type: String,
    maxlength: [500, 'Customer notes cannot be more than 500 characters']
  },
  plumberNotes: {
    type: String,
    maxlength: [500, 'Plumber notes cannot be more than 500 characters']
  },
  address: {
    type: String,
    required: true
  },
  contactPhone: {
    type: String,
    required: true
  },
  contactEmail: {
    type: String,
    required: true
  },
  emergency: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Index for better query performance
AppointmentSchema.index({ scheduledDate: 1, status: 1 });
AppointmentSchema.index({ contactId: 1 });
AppointmentSchema.index({ status: 1 });

export default mongoose.models.Appointment || mongoose.model<IAppointment>('Appointment', AppointmentSchema);