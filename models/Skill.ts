import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ISkill extends Document {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'other';
  proficiency: number;
  icon?: string;
  order: number;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const SkillSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Skill name is required'],
      trim: true,
      unique: true,
    },
    category: {
      type: String,
      enum: ['frontend', 'backend', 'database', 'devops', 'tools', 'other'],
      required: [true, 'Skill category is required'],
    },
    proficiency: {
      type: Number,
      min: 0,
      max: 100,
      default: 75,
    },
    icon: {
      type: String,
    },
    order: {
      type: Number,
      default: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

SkillSchema.index({ category: 1, order: 1 });
SkillSchema.index({ featured: 1 });

const Skill: Model<ISkill> = mongoose.models.Skill || mongoose.model<ISkill>('Skill', SkillSchema);

export default Skill;
