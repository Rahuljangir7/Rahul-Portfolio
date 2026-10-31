import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Projects & Portfolio – Websites, E-commerce & Web Apps",
  description:
    "Portfolio of client websites, e-commerce stores and web applications built by freelance full stack developer Rahul Jangir with React, Next.js, Node.js and MySQL.",
  keywords: ["web developer portfolio", "ecommerce website examples", "freelance developer projects", "Next.js projects"],
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Client Projects & Portfolio – Websites, E-commerce & Web Apps",
    description: "Portfolio of client websites, e-commerce stores and web applications built by freelance full stack developer Rahul Jangir with React, Next.js, Node.js and MySQL.",
    url: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
