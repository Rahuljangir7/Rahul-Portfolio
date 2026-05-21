import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Rahul Jangir, a Full Stack Web Developer specializing in the MERN Stack, React Native, and Laravel with a passion for building robust digital solutions.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
