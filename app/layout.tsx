import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import Nav from "@/components/layout/Nav";
import VoiceAgent from "@/components/ui/VoiceAgent";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://narensj.netlify.app";

const TITLE       = "Naren S J — AI Engineer & Software Builder";
const DESCRIPTION = "Naren S J builds intelligent systems, full-stack software, and high-performance applications across AI, systems programming, C++, and the web. Available for freelance and full-time roles.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: {
    google: "tHlwl10dW5OpSPP1BXII9bLqkmJu8qyCG_NDUukwhrU",
  },

  title: {
    default: TITLE,
    template: "%s | Naren S J",
  },
  description: DESCRIPTION,

  authors: [{ name: "Naren S J", url: siteUrl }],
  creator: "Naren S J",
  publisher: "Naren S J",

  keywords: [
    "Naren S J",
    "AI Engineer",
    "Software Engineer",
    "Full Stack Developer",
    "Systems Programmer",
    "C++ Developer",
    "Next.js Developer",
    "React Developer",
    "Machine Learning Engineer",
    "RAG AI",
    "High Performance Systems",
    "Freelance Software Engineer",
    "India Software Engineer",
    "Portfolio",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    siteName: "Naren S J",
    title: TITLE,
    description: DESCRIPTION,
    url: siteUrl,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Naren S J — AI Engineer & Software Builder",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.svg"],
    creator: "@narensj",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Naren S J",
    url: siteUrl,
    image: `${siteUrl}/narensj.png`,
    jobTitle: "AI Engineer & Software Builder",
    description: DESCRIPTION,
    sameAs: [
      "https://github.com/NarenSJ",
      "https://linkedin.com/in/narensj",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Full Stack Development",
      "Systems Programming",
      "C++",
      "TypeScript",
      "Next.js",
      "RAG Systems",
    ],
  };

  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScrollProvider>
          <header>
            <Nav />
          </header>
          {children}
          <VoiceAgent />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

