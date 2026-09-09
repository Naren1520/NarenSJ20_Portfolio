/**
 * FeatureIcon — maps a string key to a clean SVG icon.
 * Used in project detail pages instead of emojis.
 *
 * Keys are assigned in data/projectDetails.ts → feature.icon
 */

interface Props {
  name?: string;
  size?: number;
  color?: string;
}

const S = 22; // default size

function Svg({
  size,
  color,
  children,
}: {
  size: number;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export default function FeatureIcon({
  name = "default",
  size = S,
  color = "#1d1d1f",
}: Props) {
  const p = { size, color };

  switch (name) {
    /* ── location / map ─────────────────────────── */
    case "location":
      return <Svg {...p}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></Svg>;

    /* ── calendar / forecast ────────────────────── */
    case "calendar":
      return <Svg {...p}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></Svg>;

    /* ── lightning / live / speed ───────────────── */
    case "lightning":
      return <Svg {...p}><path d="M13 2L4.09 12.96A1 1 0 005 14.5h6.5L10 22l9.91-11.04A1 1 0 0019 9.5H12.5L13 2z"/></Svg>;

    /* ── mobile / responsive ────────────────────── */
    case "mobile":
      return <Svg {...p}><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 17h.01"/></Svg>;

    /* ── kanban / board ─────────────────────────── */
    case "board":
      return <Svg {...p}><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></Svg>;

    /* ── users / team ───────────────────────────── */
    case "users":
      return <Svg {...p}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></Svg>;

    /* ── chart / analytics ──────────────────────── */
    case "chart":
      return <Svg {...p}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></Svg>;

    /* ── refresh / sync ─────────────────────────── */
    case "sync":
      return <Svg {...p}><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></Svg>;

    /* ── graph / network ────────────────────────── */
    case "graph":
      return <Svg {...p}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/></Svg>;

    /* ── robot / AI / brain ─────────────────────── */
    case "ai":
      return <Svg {...p}><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><path d="M12 15h.01"/></Svg>;

    /* ── search / magnifier ─────────────────────── */
    case "search":
      return <Svg {...p}><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></Svg>;

    /* ── folder / case / file ───────────────────── */
    case "folder":
      return <Svg {...p}><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></Svg>;

    /* ── shield / security ──────────────────────── */
    case "shield":
      return <Svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></Svg>;

    /* ── lock ───────────────────────────────────── */
    case "lock":
      return <Svg {...p}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></Svg>;

    /* ── server / database ──────────────────────── */
    case "server":
      return <Svg {...p}><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/></Svg>;

    /* ── layers / stack ─────────────────────────── */
    case "layers":
      return <Svg {...p}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></Svg>;

    /* ── code ───────────────────────────────────── */
    case "code":
      return <Svg {...p}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></Svg>;

    /* ── globe / web ────────────────────────────── */
    case "globe":
      return <Svg {...p}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></Svg>;

    /* ── zap / webhook / realtime ───────────────── */
    case "zap":
      return <Svg {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></Svg>;

    /* ── cpu / processing ───────────────────────── */
    case "cpu":
      return <Svg {...p}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></Svg>;

    /* ── check / verified ───────────────────────── */
    case "check":
      return <Svg {...p}><polyline points="20 6 9 17 4 12"/></Svg>;

    /* ── sparkles / magic ───────────────────────── */
    case "sparkles":
      return <Svg {...p}><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M5 17l.75 2.25L8 20l-2.25.75L5 23l-.75-2.25L2 20l2.25-.75L5 17z"/><path d="M19 2l.75 2.25L22 5l-2.25.75L19 8l-.75-2.25L16 5l2.25-.75L19 2z"/></Svg>;

    /* ── qr / scan ──────────────────────────────── */
    case "qr":
      return <Svg {...p}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M17 20v.01M20 14h.01M14 17h.01M20 17v3"/></Svg>;

    /* ── music / audio ──────────────────────────── */
    case "music":
      return <Svg {...p}><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></Svg>;

    /* ── trending / stock ───────────────────────── */
    case "trending":
      return <Svg {...p}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></Svg>;

    /* ── default fallback ───────────────────────── */
    default:
      return <Svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></Svg>;
  }
}
