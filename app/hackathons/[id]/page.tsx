import { notFound } from "next/navigation";
import Link from "next/link";
import { hackathonsData } from "@/data/hackathons";

const NAV_H = 68;

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return hackathonsData.map(h => ({ id: h.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const entry = hackathonsData.find(h => h.id === id);
  if (!entry) return {};
  return {
    title: `${entry.eventName} — Naren S J`,
    description: entry.outcome,
  };
}

export default async function HackathonDetailPage({ params }: Props) {
  const { id } = await params;
  const entry = hackathonsData.find(h => h.id === id);
  if (!entry) notFound();

  const isHackathon = (entry.category ?? "hackathon") === "hackathon";
  const backHref  = "/#hackathons";
  const backLabel = isHackathon ? "Hackathons & Awards" : "Competitions";

  const badgeBg =
    entry.participationType === "Winner"                  ? "#1d1d1f" :
    entry.participationType === "Best Innovative Project" ? "#0066cc" :
    "#f5f5f7";
  const badgeColor =
    entry.participationType === "Winner" ||
    entry.participationType === "Best Innovative Project"
      ? "#ffffff" : "#1d1d1f";
  const badgeBorder = badgeBg === "#f5f5f7" ? "#d2d2d7" : badgeBg;

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#ffffff",
      paddingTop: `${NAV_H}px`,
      fontFamily: "var(--font-body)",
      color: "#1d1d1f",
    }}>

      {/* ── Apple two-column layout ── */}
      <div
        className="hack-detail-grid"
        style={{
          maxWidth: "90rem",
          marginInline: "auto",
          paddingInline: "clamp(1.25rem, 5vw, 4.5rem)",
          paddingBlock: "clamp(2rem, 5vw, 4rem)",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
          gap: "clamp(2rem, 5vw, 5rem)",
          alignItems: "start",
        }}
      >
        {/* LEFT — Event image, fully visible */}
        <div style={{
          backgroundColor: "#f5f5f7",
          borderRadius: "1.25rem",
          border: "1px solid #e8e8ed",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "320px",
          position: "sticky",
          top: `${NAV_H + 20}px`,
        }}>
          {entry.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={entry.image}
              alt={entry.eventName}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          ) : (
            <div style={{
              width: "100%",
              minHeight: "320px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#86868b",
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
            </div>
          )}
        </div>

        {/* RIGHT — Details */}
        <div style={{ paddingTop: "0.5rem" }}>

          {/* Back link — inline, no separate bar */}
          <Link href={backHref} style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.375rem",
            fontSize: "0.8125rem",
            fontWeight: 500,
            color: "#86868b",
            textDecoration: "none",
            fontFamily: "var(--font-heading)",
            marginBottom: "1.5rem",
          }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M10 12L6 8l4-4" />
            </svg>
            {backLabel}
          </Link>

          {/* Category */}
          <p style={{
            fontSize: "0.6875rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#86868b",
            fontFamily: "var(--font-heading)",
            marginBottom: "0.75rem",
          }}>
            {isHackathon ? "Hackathon & Award" : "Competition"}
          </p>

          {/* Event name */}
          <h1 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "#1d1d1f",
            marginBottom: "1.25rem",
          }}>
            {entry.eventName}
          </h1>

          {/* Organiser */}
          <p style={{
            fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
            fontWeight: 600,
            color: "#0066cc",
            fontFamily: "var(--font-heading)",
            marginBottom: "1.5rem",
          }}>
            {entry.organiser}
          </p>

          <div style={{ height: "1px", backgroundColor: "#d2d2d7", marginBottom: "1.5rem" }} />

          {/* Result + date */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "1.75rem",
          }}>
            <span style={{
              padding: "0.3125rem 0.875rem",
              borderRadius: "9999px",
              backgroundColor: badgeBg,
              color: badgeColor,
              border: `1px solid ${badgeBorder}`,
              fontSize: "0.8125rem",
              fontWeight: 700,
              fontFamily: "var(--font-heading)",
            }}>
              {entry.participationType}
            </span>
            <span style={{
              fontSize: "0.875rem",
              color: "#86868b",
              fontFamily: "var(--font-heading)",
            }}>
              {entry.date.slice(0, 7)}
            </span>
          </div>

          {/* Outcome */}
          <p style={{
            fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)",
            color: "#515154",
            lineHeight: 1.75,
            marginBottom: "2.5rem",
          }}>
            {entry.outcome}
          </p>

          {/* Back button */}
          <Link href={backHref} style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.875rem 1.75rem",
            borderRadius: "9999px",
            backgroundColor: "#f5f5f7",
            border: "1px solid #d2d2d7",
            fontSize: "0.9375rem",
            fontWeight: 600,
            fontFamily: "var(--font-heading)",
            color: "#1d1d1f",
            textDecoration: "none",
          }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M10 12L6 8l4-4" />
            </svg>
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Mobile stack */}
      <style>{`
        @media (max-width: 768px) {
          .hack-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
