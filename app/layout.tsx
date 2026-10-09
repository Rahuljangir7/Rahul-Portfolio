import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import FloatingActionButtons from "@/components/FloatingActionButtons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "Rahul Jangir | CTO at Zynetechs | Full Stack Architect",
    template: "%s | Rahul Jangir",
  },
  description:
    "Portfolio of Rahul Jangir, Chief Technology Officer (CTO) at Zynetechs and Full Stack Architect based in Jaipur. Specializing in MERN Stack, Next.js, Three.js, enterprise e-commerce, and high-performance digital systems.",
  keywords: [
    "Rahul Jangir",
    "Rahul Jangir CTO",
    "CTO Zynetechs",
    "Zynetechs Jaipur",
    "Full Stack Architect",
    "Full Stack Developer Jaipur",
    "MERN Stack Developer",
    "Next.js Developer",
    "Three.js 3D Web Developer",
    "Ecommerce Web Developer",
    "Freelance Web Developer India",
    "SEO Expert",
  ],
  authors: [{ name: "Rahul Jangir", url: "https://rahuljangir.zynetechs.com" }],
  creator: "Rahul Jangir",
  publisher: "Rahul Jangir",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rahuljangir.zynetechs.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rahuljangir.zynetechs.com",
    title: "Rahul Jangir | CTO at Zynetechs | Full Stack Architect",
    description:
      "Portfolio of Rahul Jangir, Chief Technology Officer at Zynetechs and Full Stack Architect specializing in MERN Stack, Next.js, Three.js, and enterprise systems.",
    siteName: "Rahul Jangir Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rahul Jangir Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Jangir | CTO at Zynetechs | Full Stack Architect",
    description:
      "Portfolio of Rahul Jangir, Chief Technology Officer at Zynetechs and Full Stack Architect.",
    images: ["/og-image.jpg"],
    creator: "@rahuljangir7",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/logo.png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rahul Jangir",
              "url": "https://rahuljangir.zynetechs.com",
              "jobTitle": "Chief Technology Officer (CTO)",
              "worksFor": {
                "@type": "Organization",
                "name": "Zynetechs",
                "url": "https://zynetechs.com"
              },
              "sameAs": [
                "https://github.com/Rahuljangir7",
                "https://www.linkedin.com/in/rahuljangir143/",
                "https://www.instagram.com/rahul.jangir_143/",
                "https://www.facebook.com/profile.php?id=61578464571304"
              ],
              "knowsAbout": [
                "Technical Leadership",
                "Full Stack Architecture",
                "3D Web Design",
                "React",
                "Next.js",
                "Three.js",
                "Node.js",
                "Cloud Systems"
              ]
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased overflow-x-hidden bg-slate-950 text-slate-50`}
      >
        <CustomCursor />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="min-h-screen relative z-10">{children}</main>
          <Footer />
          <FloatingActionButtons />
        </div>
      </body>
    </html>
  );
}
