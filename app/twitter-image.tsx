import { ImageResponse } from "next/og";

export const alt = "Rahul Jangir – Freelance Full Stack Web Developer in Jaipur, India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #020617 0%, #0c4a6e 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#38bdf8", letterSpacing: 4, marginBottom: 24 }}>
          AVAILABLE FOR FREELANCE PROJECTS
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>Rahul Jangir</div>
        <div style={{ display: "flex", fontSize: 48, marginTop: 16, color: "#e2e8f0" }}>
          Freelance Full Stack Web Developer
        </div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 32, color: "#94a3b8" }}>
          Websites · E-commerce · Web Apps · React · Next.js · MERN
        </div>
        <div style={{ display: "flex", fontSize: 26, marginTop: 48, color: "#64748b" }}>
          Jaipur, India · Clients worldwide · CTO @ Zynetechs
        </div>
      </div>
    ),
    size
  );
}
