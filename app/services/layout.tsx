import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Web Development Services – Websites, E-commerce & Web Apps",
  description:
    "Hire a freelance web developer for custom websites, e-commerce development, Next.js/React web apps, 3D websites, SEO and maintenance. Fixed quotes, direct communication, clients in India & worldwide.",
  keywords: ["freelance web development services", "hire web developer", "ecommerce website development", "Next.js development services", "website development company Jaipur", "website maintenance services"],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Freelance Web Development Services – Websites, E-commerce & Web Apps",
    description: "Hire a freelance web developer for custom websites, e-commerce development, Next.js/React web apps, 3D websites, SEO and maintenance. Fixed quotes, direct communication, clients in India & worldwide.",
    url: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
