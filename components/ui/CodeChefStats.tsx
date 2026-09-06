"use client";

import { useEffect, useState } from "react";

const USERNAME    = "narensj";
const PROFILE_URL = `https://www.codechef.com/users/${USERNAME}`;

interface CCData {
  totalSolved:    number;
  totalActiveDays: number;
  totalContests:  number;
  currentRating:  number | null;
  maxRating:      number | null;
  rank:           string | null;
  badgesCount:    number;
}

/* CodeChef chef hat SVG */
function ChefIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3C9.24 3 7 5.24 7 8c0 1.3.5 2.48 1.3 3.38L7 20h10l-1.3-8.62C16.5 10.48 17 9.3 17 8c0-2.76-2.24-5-5-5z"
        fill="#5B4638" />
      <rect x="7" y="19" width="10" height="2" rx="1" fill="#5B4638" />
    </svg>
  );
}

function StatBox({
  value, label, accent = "#1d1d1f",
}: { value: string | number; label: string; accent?: string }) {
  return (
    <div style={{
      flex: "1 1 0",
      padding: "0.875rem",
      backgroundColor: "#ffffff",
      border: "1px solid #e8e8ed",
      borderRadius: "0.75rem",
      textAlign: "center",
      minWidth: 0,
    }}>
      <p style={{
        margin: 0,
        fontFamily: "var(--font-heading)",
        fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
        fontWeight: 800,
        color: accent,
        lineHeight: 1,
      }}>
        {value}
      </p>
      <p style={{
        margin: "0.3rem 0 0",
        fontSize: "0.625rem",
        fontWeight: 700,
        color: "#86868b",
        textTransform: "uppercase",
        letterSpacing: "0.07em",
        fontFamily: "var(--font-heading)",
      }}>
        {label}
      </p>
    </div>
  );
}

export default function CodeChefStats() {
  const [data,    setData]    = useState<CCData | null>(null);
  const [error,   setError]   = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://codechef-stats.tashif.codes/${USERNAME}`)
      .then(r => r.ok ? r.json() : Promise.reject())
      .then((res) => {
        if (res.status === "success" && res.data) {
          setData(res.data);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  if (loading) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "1rem 0" }}>
        <span style={{
          width: "1.125rem", height: "1.125rem", borderRadius: "9999px",
          border: "2px solid #d2d2d7", borderTopColor: "#5B4638",
          animation: "spin 0.7s linear infinite", display: "block", flexShrink: 0,
        }} />
        <span style={{ fontSize: "0.8125rem", color: "#86868b", fontFamily: "var(--font-heading)" }}>
          Loading CodeChef stats…
        </span>
      </div>
    );
  }

  if (error || !data) {
    return (
      <a
        href={PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex", alignItems: "center", gap: "0.375rem",
          fontSize: "0.8125rem", fontWeight: 600, color: "#0066cc",
          textDecoration: "none", padding: "0.5rem 0",
          fontFamily: "var(--font-heading)",
        }}
      >
        View CodeChef Profile
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" />
        </svg>
      </a>
    );
  }

  return (
    <a
      href={PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "block", textDecoration: "none", color: "inherit" }}
      aria-label="View CodeChef profile"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

        {/* Brand header */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <ChefIcon />
          <div>
            <p style={{
              margin: 0,
              fontFamily: "var(--font-heading)",
              fontSize: "0.9375rem",
              fontWeight: 700,
              color: "#1d1d1f",
            }}>
              CodeChef
            </p>
            <p style={{
              margin: 0,
              fontSize: "0.6875rem",
              color: "#86868b",
              fontFamily: "var(--font-heading)",
              letterSpacing: "0.04em",
            }}>
              @{USERNAME}
            </p>
          </div>

          {/* Rating badge if available */}
          {data.currentRating && (
            <span style={{
              marginLeft: "auto",
              padding: "0.25rem 0.75rem",
              borderRadius: "9999px",
              backgroundColor: "#f5f5f7",
              border: "1px solid #d2d2d7",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#5B4638",
              fontFamily: "var(--font-heading)",
            }}>
              {data.currentRating} rating
            </span>
          )}
        </div>

        {/* Stats grid */}
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <StatBox value={data.totalSolved}      label="Solved"      accent="#5B4638" />
          <StatBox value={data.totalActiveDays}  label="Active Days" accent="#1d1d1f" />
          {data.totalContests > 0 && (
            <StatBox value={data.totalContests} label="Contests"    accent="#1d1d1f" />
          )}
          {data.badgesCount > 0 && (
            <StatBox value={data.badgesCount}   label="Badges"      accent="#ffa116" />
          )}
        </div>

        {/* Max rating if available */}
        {data.maxRating && (
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.5rem 0.75rem",
            backgroundColor: "#f5f5f7",
            borderRadius: "0.625rem",
          }}>
            <span style={{
              fontSize: "0.75rem",
              color: "#86868b",
              fontFamily: "var(--font-heading)",
            }}>
              Peak Rating
            </span>
            <span style={{
              fontSize: "0.875rem",
              fontWeight: 700,
              color: "#5B4638",
              fontFamily: "var(--font-heading)",
            }}>
              {data.maxRating}
            </span>
          </div>
        )}

        {/* Footer */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "flex-end",
          gap: "0.25rem", borderTop: "1px solid #d2d2d7", paddingTop: "0.75rem",
        }}>
          <span style={{
            fontSize: "0.75rem", fontWeight: 600, color: "#86868b",
            fontFamily: "var(--font-heading)",
          }}>
            View full profile
          </span>
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none"
            stroke="#86868b" strokeWidth="2">
            <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" />
          </svg>
        </div>
      </div>
    </a>
  );
}
