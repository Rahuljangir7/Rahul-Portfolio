import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Web Development Tips & Experiences",
  description:
    "Articles on web development, 3D web components, databases and freelancing by Rahul Jangir, freelance full stack developer.",
  keywords: ["web development blog", "freelance developer blog", "Next.js tips"],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog – Web Development Tips & Experiences",
    description: "Articles on web development, 3D web components, databases and freelancing by Rahul Jangir, freelance full stack developer.",
    url: "/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
