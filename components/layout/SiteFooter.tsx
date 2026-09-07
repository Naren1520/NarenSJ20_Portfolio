"use client";

import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Work",         href: "#work"         },
  { label: "Experience",   href: "#experience"   },
  { label: "Education",    href: "#education"    },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact",      href: "#contact"      },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy",  href: "/privacy" },
  { label: "Terms of Service", href: "/terms"  },
];

export default function SiteFooter() {
  return (
    <footer
      style={{
        borderTop: "1px solid #d2d2d7",
        backgroundColor: "#ffffff",
        fontFamily: "var(--font-body)",
      }}
      aria-label="Site footer"
    >
      {/* ── Main footer row ───────────────────────── */}
      <div
        style={{
          maxWidth: "var(--content-max-w)",
          marginInline: "auto",
          paddingInline: "var(--container-pad-x)",
          paddingTop: "clamp(2.5rem, 5vw, 3.5rem)",
          paddingBottom: "2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 14rem), 1fr))",
          gap: "2.5rem",
        }}
      >
        {/* Brand column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span
              style={{
                width: "0.5rem",
                height: "0.5rem",
                borderRadius: "9999px",
                backgroundColor: "#1d1d1f",
                display: "block",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.0625rem",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#1d1d1f",
              }}
            >
              Naren S J
            </span>
          </div>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#86868b",
              lineHeight: 1.65,
              maxWidth: "22ch",
              margin: 0,
            }}
          >
            AI Engineer &amp; Software Builder.
            <br />
            Building intelligent systems and engineering experiences.
          </p>
        </div>

        {/* Navigation column */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: "#86868b",
              marginBottom: "1rem",
            }}
          >
            Navigate
          </p>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.625rem",
            }}
          >
            {FOOTER_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#515154",
                    textDecoration: "none",
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#1d1d1f")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#515154")
                  }
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal column */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: "#86868b",
              marginBottom: "1rem",
            }}
          >
            Legal
          </p>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.625rem",
            }}
          >
            {LEGAL_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#515154",
                    textDecoration: "none",
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#1d1d1f")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#515154")
                  }
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid #e8e8ed",
          maxWidth: "var(--content-max-w)",
          marginInline: "auto",
          paddingInline: "var(--container-pad-x)",
          paddingBlock: "1.25rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem",
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            color: "#86868b",
            margin: 0,
            fontFamily: "var(--font-heading)",
          }}
        >
          Copyright © {new Date().getFullYear()} Naren S J. All rights reserved.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {LEGAL_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              style={{
                fontSize: "0.75rem",
                color: "#86868b",
                fontWeight: 500,
                textDecoration: "none",
                fontFamily: "var(--font-heading)",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#1d1d1f")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#86868b")
              }
            >
              {label}
            </Link>
          ))}
          <span
            style={{
              fontSize: "0.75rem",
              color: "#d2d2d7",
              userSelect: "none",
            }}
          >
            |
          </span>
          <p
            style={{
              fontSize: "0.75rem",
              color: "#86868b",
              margin: 0,
              fontFamily: "var(--font-heading)",
            }}
          >
            Designed &amp; built by Naren S J
          </p>
        </div>
      </div>
    </footer>
  );
}
