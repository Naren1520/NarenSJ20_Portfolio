"use client";

import { useEffect, useState } from "react";

const USERNAME    = "Narensj20";
const PROFILE_URL = `https://leetcode.com/u/${USERNAME}/`;

/* Approximate LeetCode total counts (updated periodically) */
const TOTAL = { easy: 840, medium: 1770, hard: 775 };

interface LCStats {
  totalSolved: number;
  easySolved:  number;
  mediumSolved: number;
  hardSolved:  number;
}

function Bar({
  label, solved, total, color,
}: { label: string; solved: number; total: number; color: string }) {
  const pct = total > 0 ? Math.min((solved / total) * 100, 100) : 0;
  return (
    <div>
      <div style={{
        display: "flex", justifyContent: "space-between",
        marginBottom: "0.3rem",
      }}>
        <span style={{
          fontSize: "0.6875rem", fontWeight: 600,
          color: "#515154", fontFamily: "var(--font-heading)",
        }}>
          {label}
        </span>
        <span style={{
          fontSize: "0.6875rem", color: "#86868b",
          fontFamily: "var(--font-heading)",
        }}>
          <strong style={{ color: "#1d1d1f", fontWeight: 700 }}>{solved}</strong>
          <span style={{ color: "#c7c7cc" }}>/{total}</span>
        </span>
      </div>
      <div style={{
        height: "5px", borderRadius: "9999px",
        backgroundColor: "#e8e8ed", overflow: "hidden",
      }}>
        <div style={{
          height: "100%", borderRadius: "9999px",
          backgroundColor: color,
          width: `${pct}%`,
          transition: "width 0.7s ease",
        }} />
      </div>
    </div>
  );
}

export default function LeetCodeStats() {
  const [stats,   setStats]   = useState<LCStats | null>(null);
  const [error,   setError]   = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://alfa-leetcode-api.onrender.com/${USERNAME}/solved`)
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((d) => {
        /* API returns: solvedProblem, easySolved, mediumSolved, hardSolved */
        if (typeof d.solvedProblem !== "number") throw new Error("bad shape");
        setStats({
          totalSolved:  d.solvedProblem  ?? 0,
          easySolved:   d.easySolved     ?? 0,
          mediumSolved: d.mediumSolved   ?? 0,
          hardSolved:   d.hardSolved     ?? 0,
        });
        setLoading(false);
      })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  /* ── Loading ── */
  if (loading) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 0" }}>
        <span style={{
          width: "1rem", height: "1rem", flexShrink: 0,
          borderRadius: "9999px",
          border: "2px solid #d2d2d7", borderTopColor: "#ffa116",
          animation: "spin 0.7s linear infinite", display: "block",
        }} />
        <span style={{ fontSize: "0.75rem", color: "#86868b", fontFamily: "var(--font-heading)" }}>
          Loading…
        </span>
      </div>
    );
  }

  /* ── Error fallback ── */
  if (error || !stats) {
    return (
      <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer"
        style={{
          display: "inline-flex", alignItems: "center", gap: "0.3rem",
          fontSize: "0.8125rem", fontWeight: 600, color: "#0066cc",
          textDecoration: "none", fontFamily: "var(--font-heading)",
        }}>
        View Profile
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" />
        </svg>
      </a>
    );
  }

  const totalAll = TOTAL.easy + TOTAL.medium + TOTAL.hard;

  return (
    <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer"
      style={{ display: "block", textDecoration: "none", color: "inherit" }}
      aria-label="View LeetCode profile">

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

        {/* Big solved number */}
        <div style={{ textAlign: "center" }}>
          <p style={{
            margin: 0,
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 4vw, 2.5rem)",
            fontWeight: 800,
            color: "#1d1d1f",
            lineHeight: 1,
          }}>
            {stats.totalSolved}
          </p>
          <p style={{
            margin: "0.25rem 0 0",
            fontSize: "0.6875rem",
            fontWeight: 700,
            color: "#ffa116",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontFamily: "var(--font-heading)",
          }}>
            Solved / {totalAll.toLocaleString()}
          </p>
        </div>

        {/* Breakdown bars */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
          <Bar label="Easy"   solved={stats.easySolved}   total={TOTAL.easy}   color="#00af9b" />
          <Bar label="Medium" solved={stats.mediumSolved} total={TOTAL.medium} color="#ffa116" />
          <Bar label="Hard"   solved={stats.hardSolved}   total={TOTAL.hard}   color="#ef4743" />
        </div>

        {/* Footer */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "flex-end",
          gap: "0.25rem", borderTop: "1px solid #d2d2d7", paddingTop: "0.625rem",
        }}>
          <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: "#86868b", fontFamily: "var(--font-heading)" }}>
            View profile
          </span>
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#86868b" strokeWidth="2">
            <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" />
          </svg>
        </div>
      </div>
    </a>
  );
}
