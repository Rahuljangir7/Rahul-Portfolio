import { NextRequest, NextResponse } from "next/server";
import { sanitizeInput, checkRateLimit } from "@/lib/security";

// Candidate models in priority order
const MODELS = [
  "gemini-3.5-flash",
  "gemini-3.7-flash",
  "gemini-flash-latest",
  "gemini-3.8-flash"
];

const SYSTEM_INSTRUCTION = `You are "Rahul AI", the official intelligent portfolio assistant for Rahul Jangir.
You represent Rahul Jangir and his company Zynetechs with high professionalism, warmth, and deep technical knowledge.

Key Information about Rahul Jangir:
- **Title & Role:** Chief Technology Officer (CTO) at Zynetechs (https://zynetechs.com) & Full Stack Architect.
- **Location:** Jaipur, Rajasthan, India.
- **Core Expertise:** Next.js 15, React 19, Node.js, Express.js, Three.js (3D Web Experiences), MERN Stack, Redis (In-Memory Caching & Rate Limiting), MongoDB, MySQL, Laravel, AWS, and Technical SEO.
- **Leadership at Zynetechs:** Leads technical architecture and product excellence alongside Founder & CEO Ajay Jain. Zynetechs provides end-to-end digital marketing, SEO, custom web development, and AI solutions for businesses across India, UAE, UK, USA, and globally.
- **Notable Projects Built/Architected:**
  1. **S2dioera** (s2dioera.com): Creative studio platform with immersive 3D/visual showcases & Redis backend caching.
  2. **Menvero** (menvero.in): Men's fashion & grooming e-commerce with curated recommendations.
  3. **TrendMe** (trendme.in): Multi-vendor e-commerce platform with real-time inventory management.
  4. **Silk Spells** (silkspells.com): Premium luxury silk brand web experience.
  5. **Miss Rekha** (missrekha.in): Designer boutique apparel platform.
  6. **Veshgo** (veshgo.com): Event planning & digital invitations platform.
  7. **T3 Stocks**: Custom high-performance financial web application.
  8. **Upcoming Venture:** Building an innovative collaborative digital earning & business enablement platform officially launching in January.
- **Contact & Hiring:**
  - WhatsApp / Phone: +91 9950108143
  - Email: dbrpjangir9977@gmail.com
  - LinkedIn: https://www.linkedin.com/in/rahuljangir143/
  - GitHub: https://github.com/Rahuljangir7
  - Website: https://rahuljangir.zynetechs.com

Guidelines for your replies:
1. Be polite, friendly, helpful, and concise. Format your answers with clear markdown (bullet points, bold text).
2. Answer queries in the same language the visitor asks in (English, Hindi, or Hinglish).
3. If a visitor asks to hire Rahul or collaborate on a project, encourage them to connect via the Contact page, WhatsApp (+91 9950108143), or email.
4. You can also answer general programming, web development, SEO, architecture, and technology questions like an expert mentor.
5. Never hallucinate or give out private passwords or internal credentials.`;

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "anonymous";

    // Rate limiting: 15 messages per minute per IP
    const rateCheck = checkRateLimit(`chat_${ip}`, 15, 60000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          status: "error",
          message: "Too many requests. Please wait a moment before sending another message."
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { messages, message } = body;

    const apiKey = process.env.GEMINI_API_KEY?.replace(/^["']|["']$/g, "").trim();
    if (!apiKey) {
      return NextResponse.json(
        {
          status: "error",
          message: "AI Chatbot API Key is not configured on the server."
        },
        { status: 500 }
      );
    }

    // Format conversation history for Gemini API
    const formattedContents: Array<{
      role: "user" | "model";
      parts: Array<{ text: string }>;
    }> = [];

    if (Array.isArray(messages) && messages.length > 0) {
      for (const m of messages.slice(-10)) {
        if (!m.content) continue;
        formattedContents.push({
          role: m.role === "assistant" || m.role === "model" ? "model" : "user",
          parts: [{ text: sanitizeInput(m.content) }]
        });
      }
    } else if (message) {
      formattedContents.push({
        role: "user",
        parts: [{ text: sanitizeInput(message) }]
      });
    } else {
      return NextResponse.json(
        { status: "error", message: "Message is required." },
        { status: 400 }
      );
    }

    const payload = {
      system_instruction: {
        parts: [{ text: SYSTEM_INSTRUCTION }]
      },
      contents: formattedContents,
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 1000
      }
    };

    let replyText = "";
    let lastError = "";

    // Attempt generation across available models with automatic fallback
    for (const model of MODELS) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": apiKey
          },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          const data = await res.json();
          replyText =
            data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
          if (replyText) break;
        } else {
          const errData = await res.text();
          lastError = `${model}: ${res.status} ${errData}`;
          console.warn(`Gemini model ${model} failed, trying fallback:`, lastError);
        }
      } catch (err: any) {
        lastError = err?.message || String(err);
        console.warn(`Model ${model} network error, trying fallback...`, lastError);
      }
    }

    if (!replyText) {
      return NextResponse.json(
        {
          status: "error",
          message: "Unable to reach AI services right now. Please try again shortly.",
          details: process.env.NODE_ENV === "development" ? lastError : undefined
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        status: "success",
        reply: replyText
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: error?.message || "Internal server error"
      },
      { status: 500 }
    );
  }
}
