import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import { PRIMARY_KEYWORDS, SITE_NAME, SITE_URL, siteJsonLd } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const TITLE = "Rahul Jangir | Freelance Full Stack Web Developer in Jaipur, India – Hire Me";
const DESCRIPTION =
  "Hire Rahul Jangir, a freelance full stack web developer in Jaipur, India (and CTO at Zynetechs). I build fast, SEO-friendly websites, e-commerce stores and custom web apps with React, Next.js & MERN for clients worldwide. Get a free quote.";

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: "%s | Rahul Jangir",
  },
  description: DESCRIPTION,
  keywords: PRIMARY_KEYWORDS,
  applicationName: "Rahul Jangir Portfolio",
  category: "technology",
  authors: [{ name: "Rahul Jangir", url: SITE_URL }],
  creator: "Rahul Jangir",
  publisher: "Rahul Jangir",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
  // Paste the token from Google Search Console here (or set the env var) to verify ownership.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteJsonLd),
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
