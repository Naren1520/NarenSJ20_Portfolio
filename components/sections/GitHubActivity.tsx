"use client";

import { useState } from "react";

const USERNAME = "Naren1520";

export default function GitHubActivity() {
  const [streakFailed,  setStreakFailed]  = useState(false);
  const [graphFailed,   setGraphFailed]   = useState(false);

  // Streak stats — white/light theme matching the portfolio
  const streakUrl =
    `https://streak-stats.demolab.com?user=${USERNAME}` +
    `&theme=default` +
    `&background=F5F5F7&border=D2D2D7` +
    `&ring=1d1d1f&fire=0066cc&currStreakNum=1d1d1f` +
    `&sideNums=1d1d1f&currStreakLabel=86868b` +
    `&sideLabels=86868b&dates=86868b` +
    `&hide_border=false&border_radius=12`;

  // Contribution graph — light theme
  const graphUrl =
    `https://ghchart.rshah.org/${USERNAME}`;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

      {/* Streak stats */}
      {!streakFailed ? (
        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View GitHub contribution streak"
          style={{ display: "block" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={streakUrl}
            alt="GitHub contribution streak"
            onError={() => setStreakFailed(true)}
            style={{ width: "100%", height: "auto", borderRadius: "0.75rem", display: "block" }}
          />
        </a>
      ) : (
        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "0.875rem", color: "#0066cc", fontWeight: 600, textDecoration: "none" }}
        >
          View GitHub Profile →
        </a>
      )}

      {/* Contribution graph */}
      {!graphFailed ? (
        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View GitHub contribution graph"
          style={{ display: "block", padding: "1rem", backgroundColor: "#ffffff", borderRadius: "0.75rem", border: "1px solid #d2d2d7" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={graphUrl}
            alt="GitHub contribution graph"
            onError={() => setGraphFailed(true)}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </a>
      ) : null}

    </div>
  );
}
