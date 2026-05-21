import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital services including Custom Web Development, 3D Web Experiences, Responsive UI/UX Design, E-Commerce Solutions, and SEO Optimization by Rahul Jangir.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
