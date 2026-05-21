import { NextRequest, NextResponse, userAgent } from "next/server";
import connectDB from "@/lib/mongodb";
import Visitor from "@/models/Visitor";

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const count = await Visitor.countDocuments();
    return NextResponse.json({ status: "success", count }, { status: 200 });
  } catch (error: any) {
    console.error("Visitor GET error:", error);
    return NextResponse.json(
      { status: "error", message: "Failed to fetch visitor count" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    // Extract IP address
    const ipAddress = 
      request.headers.get("x-forwarded-for") || 
      request.headers.get("x-real-ip") || 
      "unknown";

    // Extract User Agent details using Next.js helper
    const ua = userAgent(request);
    const browser = ua.browser.name || "Unknown";
    const os = ua.os.name || "Unknown";
    const deviceType = ua.device.type || "desktop";
    const rawUserAgent = request.headers.get("user-agent") || "Unknown";

    // Create a new visitor record
    await Visitor.create({
      ipAddress,
      userAgent: rawUserAgent,
      browser,
      os,
      deviceType,
    });

    const count = await Visitor.countDocuments();

    return NextResponse.json(
      { status: "success", message: "Visitor recorded", count },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Visitor POST error:", error);
    return NextResponse.json(
      { status: "error", message: "Failed to record visitor" },
      { status: 500 }
    );
  }
}
