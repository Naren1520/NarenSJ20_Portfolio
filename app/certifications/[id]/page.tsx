import { notFound } from "next/navigation";
import Link from "next/link";
import { certificationsData } from "@/data/certifications";

const NAV_H = 68;

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return certificationsData.map(c => ({ id: c.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const cert = certificationsData.find(c => c.id === id);
  if (!cert) return {};
  return {
    title: `${cert.name} — Naren S J`,
    description: cert.description ?? `${cert.name} issued by ${cert.issuer}`,
  };
}

export default async function CertificationDetailPage({ params }: Props) {
  const { id } = await params;
  const cert = certificationsData.find(c => c.id === id);
  if (!cert) notFound();

  const badgeBg     = cert.status === "Certified" ? "#1d1d1f" : "#f0fdf4";
  const badgeColor  = cert.status === "Certified" ? "#ffffff" : "#166534";
  const badgeBorder = cert.status === "Certified" ? "#1d1d1f" : "#86efac";

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#ffffff",
      paddingTop: `${NAV_H}px`,
      fontFamily: "var(--font-body)",
      color: "#1d1d1f",
    }}>

      {/* ── Apple-style two-column layout ── */}
      <div style={{
        maxWidth: "90rem",
        marginInline: "auto",
        paddingInline: "clamp(1.25rem, 5vw, 4.5rem)",
        paddingBlock: "clamp(2rem, 5vw, 4rem)",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
        gap: "clamp(2rem, 5vw, 5rem)",
        alignItems: "start",
      }}
      className="cert-detail-grid"
      >

        {/* LEFT — Certificate image in off-white box, fully visible */}
        <div style={{
          backgroundColor: "#f5f5f7",
          borderRadius: "1.25rem",
          border: "1px solid #e8e8ed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(1.5rem, 4vw, 3rem)",
          minHeight: "380px",
          position: "sticky",
          top: `${NAV_H + 20}px`,
        }}>
          {cert.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={cert.image}
              alt={`${cert.name} certificate`}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",   /* show full certificate — no cropping */
                display: "block",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
              }}
            />
          ) : (
            <div style={{
              width: "100%",
              minHeight: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              color: "#86868b",
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
              <p style={{ fontSize: "0.875rem", fontFamily: "var(--font-heading)" }}>No image available</p>
            </div>
          )}
        </div>

        {/* RIGHT — Details */}
        <div style={{ paddingTop: "0.5rem" }}>

          {/* Back link */}
          <Link href="/#certifications" style={{
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
            Certifications
          </Link>

          {/* Category eyebrow */}
          <p style={{
            fontSize: "0.6875rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#86868b",
            fontFamily: "var(--font-heading)",
            marginBottom: "0.75rem",
          }}>
            Verified Credential
          </p>

          {/* Cert name */}
          <h1 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "#1d1d1f",
            marginBottom: "1.5rem",
          }}>
            {cert.name}
          </h1>

          {/* Issuer */}
          <p style={{
            fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
            fontWeight: 600,
            color: "#0066cc",
            fontFamily: "var(--font-heading)",
            marginBottom: "1.5rem",
          }}>
            {cert.issuer}
          </p>

          {/* Divider */}
          <div style={{ height: "1px", backgroundColor: "#d2d2d7", marginBottom: "1.5rem" }} />

          {/* Status + date */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "1.75rem",
          }}>
            {cert.status && (
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
                {cert.status}
              </span>
            )}
            <span style={{
              fontSize: "0.875rem",
              color: "#86868b",
              fontFamily: "var(--font-heading)",
            }}>
              Issued {cert.dateIssued}
            </span>
          </div>

          {/* Description */}
          {cert.description && (
            <p style={{
              fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)",
              color: "#515154",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}>
              {cert.description}
            </p>
          )}

          {/* Actions */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "0.5rem" }}>
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
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
                Verify Credential
                <svg width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" />
                </svg>
              </a>
            )}
            <Link href="/#certifications" style={{
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
              All Certifications
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile: stack image below content */}
      <style>{`
        @media (max-width: 768px) {
          .cert-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
