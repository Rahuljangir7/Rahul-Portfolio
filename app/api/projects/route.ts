import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Project from "@/models/Project";
import { sanitizeInput, checkRateLimit } from "@/lib/security";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1");
    const limit = Math.min(parseInt(searchParams.get("limit") || "10"), 50); // Max 50 per page
    const category = searchParams.get("category");
    const featured = searchParams.get("featured");
    const search = searchParams.get("search");

    const query: any = { status: "published" };

    if (category) query.category = category;
    if (featured === "true") query.featured = true;
    if (search) {
      query.$text = { $search: sanitizeInput(search) };
    }

    const skip = (page - 1) * limit;

    const [projects, total] = await Promise.all([
      Project.find(query)
        .sort({ order: 1, createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .select("-__v"),
      Project.countDocuments(query),
    ]);

    // Fallback to dummy data if no projects found
    if (projects.length === 0) {
      return NextResponse.json({
        status: "success",
        data: {
          projects: dummyProjects,
          pagination: {
            current: 1,
            pages: 1,
            total: dummyProjects.length,
            limit,
          },
        },
      });
    }

    return NextResponse.json({
      status: "success",
      data: {
        projects,
        pagination: {
          current: page,
          pages: Math.ceil(total / limit),
          total,
          limit,
        },
      },
    });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json({
      status: "success",
      data: {
        projects: dummyProjects,
        pagination: {
          current: 1,
          pages: 1,
          total: dummyProjects.length,
          limit: 10,
        },
      },
    });
  }
}

const dummyProjects = [
  {
    _id: "dummy1",
    title: "3D Portfolio",
    shortDescription: "Modern 3D portfolio website with Three.js",
    technologies: ["React", "Three.js", "Node.js", "MongoDB"],
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    liveUrl: "#",
    githubUrl: "#",
    category: "web",
    featured: true,
    status: "published",
  },
  {
    _id: "dummy2",
    title: "E-Commerce Platform",
    shortDescription: "Full-stack e-commerce solution",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    liveUrl: "#",
    githubUrl: "#",
    category: "web",
    featured: true,
    status: "published",
  },
  {
    _id: "dummy3",
    title: "AI Chat Assistant",
    shortDescription: "Intelligent chatbot with NLP",
    technologies: ["Python", "TensorFlow", "FastAPI", "React"],
    thumbnail: "https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&q=80&w=800",
    liveUrl: "#",
    githubUrl: "#",
    category: "ai",
    featured: false,
    status: "published",
  },
];

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    // Rate limiting for creation
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const rateLimit = checkRateLimit(ip, 3, 3600000); // 3 requests per hour

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          status: "error",
          message: "Too many requests. Please try again later.",
        },
        { status: 429 },
      );
    }

    const body = await request.json();

    // Input validation and sanitization
    const sanitizedData = {
      title: sanitizeInput(body.title),
      description: sanitizeInput(body.description),
      shortDescription: sanitizeInput(body.shortDescription),
      technologies: (body.technologies || []).map((t: string) =>
        sanitizeInput(t),
      ),
      thumbnail: sanitizeInput(body.thumbnail),
      images: (body.images || []).map((img: string) => sanitizeInput(img)),
      liveUrl: body.liveUrl ? sanitizeInput(body.liveUrl) : undefined,
      githubUrl: body.githubUrl ? sanitizeInput(body.githubUrl) : undefined,
      featured: Boolean(body.featured),
      category: body.category || "web",
      order: Number(body.order) || 0,
      status: body.status || "draft",
    };

    const project = await Project.create(sanitizedData);

    return NextResponse.json(
      { status: "success", data: { project } },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("Project creation error:", error);
    return NextResponse.json(
      { status: "error", message: "Internal server error" },
      { status: 500 },
    );
  }
}
