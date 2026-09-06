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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://narensj.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Naren S J — AI Engineer & Software Builder",
  description:
    "Naren S J builds intelligent systems, full-stack software, and engineering experiences across AI, systems programming, and the web.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Naren S J — AI Engineer & Software Builder",
    description:
      "Naren S J builds intelligent systems, full-stack software, and engineering experiences across AI, systems programming, and the web.",
    url: siteUrl,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Naren S J — AI Engineer & Software Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naren S J — AI Engineer & Software Builder",
    description:
      "Naren S J builds intelligent systems, full-stack software, and engineering experiences across AI, systems programming, and the web.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable}`}
    >
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

