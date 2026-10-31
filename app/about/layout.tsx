import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Rahul Jangir – Freelance Full Stack Developer & CTO",
  description:
    "Rahul Jangir is a freelance full stack web developer in Jaipur, India and CTO at Zynetechs, building websites, e-commerce stores and web apps with MERN, Next.js and Laravel.",
  keywords: ["about Rahul Jangir", "freelance developer Jaipur", "full stack developer India", "Zynetechs CTO"],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Rahul Jangir – Freelance Full Stack Developer & CTO",
    description: "Rahul Jangir is a freelance full stack web developer in Jaipur, India and CTO at Zynetechs, building websites, e-commerce stores and web apps with MERN, Next.js and Laravel.",
    url: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
