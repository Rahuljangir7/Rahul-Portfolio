import mongoose, { Schema, Document } from 'mongoose';

export interface IVisitor extends Document {
  ipAddress: string;
  userAgent: string;
  browser: string;
  os: string;
  deviceType: string;
  createdAt: Date;
}

const VisitorSchema: Schema = new Schema(
  {
    ipAddress: {
      type: String,
      required: true,
      index: true,
    },
    userAgent: {
      type: String,
      default: 'Unknown',
    },
    browser: {
      type: String,
      default: 'Unknown',
    },
    os: {
      type: String,
      default: 'Unknown',
    },
    deviceType: {
      type: String,
      default: 'Unknown',
    },
  },
  {
    timestamps: true,
  }
);

// Prevent mongoose from recompiling the model in development
const Visitor = mongoose.models.Visitor || mongoose.model<IVisitor>('Visitor', VisitorSchema);

export default Visitor;
