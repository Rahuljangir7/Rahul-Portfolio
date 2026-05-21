import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  thumbnail: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: "web" | "mobile" | "desktop" | "ai" | "other";
  order: number;
  status: "draft" | "published" | "archived";
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"],
    },
    description: {
      type: String,
      required: [true, "Project description is required"],
      maxlength: [2000, "Description cannot exceed 2000 characters"],
    },
    shortDescription: {
      type: String,
      required: [true, "Short description is required"],
      maxlength: [150, "Short description cannot exceed 150 characters"],
    },
    technologies: [
      {
        type: String,
        trim: true,
      },
    ],
    thumbnail: {
      type: String,
      required: [true, "Thumbnail URL is required"],
    },
    images: [
      {
        type: String,
      },
    ],
    liveUrl: {
      type: String,
      trim: true,
    },
    githubUrl: {
      type: String,
      trim: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      enum: ["web", "mobile", "desktop", "ai", "other"],
      default: "web",
    },
    order: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },
    seo: {
      metaTitle: {
        type: String,
        maxlength: [60, "Meta title cannot exceed 60 characters"],
      },
      metaDescription: {
        type: String,
        maxlength: [160, "Meta description cannot exceed 160 characters"],
      },
      keywords: [
        {
          type: String,
        },
      ],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

ProjectSchema.index({
  title: "text",
  description: "text",
  technologies: "text",
});
ProjectSchema.index({ status: 1, order: 1 });
ProjectSchema.index({ featured: 1, status: 1 });

ProjectSchema.virtual("url").get(function () {
  return `/projects/${this._id}`;
});

ProjectSchema.pre("save", function (this: IProject, next) {
  if (this.isModified("title") && !this.seo?.metaTitle) {
    this.seo = this.seo || {};
    this.seo.metaTitle = this.title;
  }
  if (this.isModified("shortDescription") && !this.seo?.metaDescription) {
    this.seo = this.seo || {};
    this.seo.metaDescription = this.shortDescription;
  }
  next();
});

const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
