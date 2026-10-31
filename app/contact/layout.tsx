import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Me – Get a Free Quote for Your Website or App",
  description:
    "Hire Rahul Jangir, freelance full stack developer, for your website, e-commerce store or web app. Reply within 24 hours via form, email or WhatsApp. Free quote.",
  keywords: ["hire freelance web developer", "contact web developer", "website quote", "hire developer India"],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Hire Me – Get a Free Quote for Your Website or App",
    description: "Hire Rahul Jangir, freelance full stack developer, for your website, e-commerce store or web app. Reply within 24 hours via form, email or WhatsApp. Free quote.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
