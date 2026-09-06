import Link from "next/link";
import GlitchTV from "@/components/ui/GlitchTV";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "var(--font-body)",
        textAlign: "center",
        gap: "2rem",
      }}
    >
      {/* Glitch TV — centered, responsive size */}
      <div style={{ transform: "scale(clamp(0.7, 4vw, 1))", transformOrigin: "center center" }}>
        <GlitchTV
          message="404 — NOT FOUND"
          width={380}
          height={240}
          textColor="#ff3b30"
        />
      </div>

      {/* Text */}
      <div style={{ maxWidth: "36ch" }}>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "#1d1d1f",
            lineHeight: 1.05,
            marginBottom: "0.875rem",
          }}
        >
          Page not found.
        </h1>
        <p
          style={{
            fontSize: "clamp(0.9375rem, 1.5vw, 1.0625rem)",
            color: "#86868b",
            lineHeight: 1.65,
            marginBottom: "2rem",
          }}
        >
          Looks like this signal got lost. The page you&apos;re looking for doesn&apos;t exist or was moved.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.875rem 1.75rem",
            borderRadius: "9999px",
            backgroundColor: "#1d1d1f",
            color: "#ffffff",
            fontSize: "0.9375rem",
            fontWeight: 600,
            fontFamily: "var(--font-heading)",
            textDecoration: "none",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M10 12L6 8l4-4" />
          </svg>
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
}
