import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { sanitizeInput, isValidEmail, checkRateLimit } from "@/lib/security";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const status = searchParams.get("status");

    const query: any = {};
    if (status) query.status = status;

    const skip = (page - 1) * limit;

    const [contacts, total] = await Promise.all([
      Contact.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .select("-__v -ipAddress -userAgent"),
      Contact.countDocuments(query),
    ]);

    return NextResponse.json({
      status: "success",
      data: {
        contacts,
        pagination: {
          current: page,
          pages: Math.ceil(total / limit),
          total,
          limit,
        },
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "error",
        message: error?.message || "Internal server error",
      },
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
    const rateLimit = checkRateLimit(ip, 5, 60000); // 5 requests per minute

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
    const { name, email, subject, message } = body;

    // Input validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { status: "error", message: "All fields are required" },
        { status: 400 },
      );
    }

    // Email validation
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { status: "error", message: "Invalid email address" },
        { status: 400 },
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
    };

    const contact = await Contact.create({
      ...sanitizedData,
      ipAddress: ip,
      userAgent: request.headers.get("user-agent")?.substring(0, 500),
    });

    // Send emails using nodemailer
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Email to Admin
      const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: "dbrpjangir9977@gmail.com",
        subject: `New Contact Submission from ${sanitizedData.name}: ${sanitizedData.subject}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2>New Contact Request</h2>
            <p><strong>Name:</strong> ${sanitizedData.name}</p>
            <p><strong>Email:</strong> ${sanitizedData.email}</p>
            <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${sanitizedData.message}</p>
          </div>
        `,
      };

      // Acknowledgment Email to User
      const userMailOptions = {
        from: process.env.EMAIL_USER,
        to: sanitizedData.email,
        subject: "Thank you for contacting Rahul Jangir!",
        html: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h3>Hello ${sanitizedData.name},</h3>
            <p>Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
            <hr/>
            <h4>Your Message Details:</h4>
            <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
            <p style="white-space: pre-wrap;">${sanitizedData.message}</p>
            <br/>
            <p>Best Regards,</p>
            <p><strong>Rahul Jangir</strong></p>
          </div>
        `,
      };

      await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(userMailOptions),
      ]);
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // We log the error but still return success for the contact creation
    }

    return NextResponse.json(
      {
        status: "success",
        message: "Message sent successfully",
        data: { contact },
      },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("Contact form error:", error);

    // Handle Mongoose validation errors gracefully
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(
        (err: any) => err.message,
      );
      return NextResponse.json(
        { status: "error", message: messages.join(", ") },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        status: "error",
        message: error?.message || "Internal server error",
      },
      { status: 500 },
    );
  }
}
