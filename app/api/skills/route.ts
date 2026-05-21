import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Skill from "@/models/Skill";
import { sanitizeInput, checkRateLimit } from "@/lib/security";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get("category");
    const featured = searchParams.get("featured");

    const query: any = {};
    if (category) query.category = category;
    if (featured === "true") query.featured = true;

    const skills = await Skill.find(query)
      .sort({ order: 1, name: 1 })
      .select("-__v");

    return NextResponse.json({
      status: "success",
      data: { skills },
    });
  } catch (error: any) {
    return NextResponse.json(
      { status: "error", message: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const rateLimit = checkRateLimit(ip, 5, 3600000); // 5 requests per hour

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
      name: sanitizeInput(body.name),
      category: body.category || "other",
      proficiency: Math.min(100, Math.max(0, Number(body.proficiency) || 75)),
      icon: body.icon ? sanitizeInput(body.icon) : undefined,
      order: Number(body.order) || 0,
      featured: Boolean(body.featured),
    };

    const skill = await Skill.create(sanitizedData);

    return NextResponse.json(
      { status: "success", data: { skill } },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("Skill creation error:", error);
    return NextResponse.json(
      { status: "error", message: "Internal server error" },
      { status: 500 },
    );
  }
}
