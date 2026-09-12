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
    // ── Identity
    "Naren S J",
    "Naren SJ",
    "narensj",

    // ── Roles
    "AI Engineer",
    "AI Engineer India",
    "C++ Developer",
    "C++ Expert",
    "Software Engineer",
    "Full Stack Developer",
    "Full Stack Engineer",
    "Technical Head",
    "Tech Lead",
    "Product Management",
    "Leadership",
    "Freelance Software Engineer",
    "Systems Programmer",
    "Next.js Developer",
    "React Developer",
    "Machine Learning Engineer",
    "RAG AI Engineer",
    "High Performance Systems Engineer",
    "Backend Engineer",

    // ── Advanced Projects
    "SPManager AI Project Management",
    "CRIMSON Criminal Network Analysis AI",
    "ALMS AI Market Linkage Platform",
    "Traffix AI Traffic Management",
    "CampusLink Campus Platform",
    "BrainScript Python AI Scripting",
    "CredChain Blockchain Certificate Verification",
    "WorkFox Decentralized Freelance Platform",
    "Vanijya AI Vendor Platform",
    "WAF Transformer Web Application Firewall AI",
    "Student Manager System",
    "ISDC Innovation Startup Platform",
    "Aerophilia 2025",

    // ── Intermediate Projects
    "TaskMatrix Project Management App",
    "AI Image Generator",
    "AI Assistant Chatbot",
    "NexStock Inventory Management",
    "Voter Management System C++",
    "Live Code Editor",
    "Budget Tracker App",
    "SketchOn Drawing App",
    "Tandoor Restaurant Website",
    "Shreematha Organisation Website",
    "i-Movie 2.0 Streaming App",

    // ── Tech Stack (search terms)
    "Next.js",
    "TypeScript",
    "Python",
    "C++",
    "Epoll",
    "RAG",
    "Gemini AI",
    "MongoDB",
    "PostgreSQL",
    "Blockchain Solidity",
    "Socket.IO",
    "FastAPI",
    "Graph Neural Networks",
    "Portfolio 2026",
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
      "https://github.com/Naren1520",
      "https://linkedin.com/in/narensj20",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "RAG Systems",
      "Graph Neural Networks",
      "Full Stack Development",
      "Systems Programming",
      "C++",
      "Epoll High Concurrency",
      "TypeScript",
      "Next.js",
      "Python",
      "FastAPI",
      "Blockchain",
      "Product Management",
      "Technical Leadership",
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

