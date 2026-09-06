"use client";

/**
 * SocialLinks — isometric 3-D social icon card.
 * Converted from styled-components → inline <style> tag.
 * No external dependencies, no icon libraries.
 *
 * Usage:
 *   <SocialLinks />                        // defaults: GitHub, LinkedIn, Email, Resume
 *   <SocialLinks direction="row" />        // horizontal layout
 *   <SocialLinks links={[...]} />          // custom links
 */

export interface SocialLink {
  label: string;
  href: string;
  color?: string;
  icon: "github" | "linkedin" | "email" | "resume" | "twitter" | "instagram";
}

const DEFAULT_LINKS: SocialLink[] = [
  { label: "GitHub",    href: "https://github.com/Naren1520",                    icon: "github"    },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/narensj20",            icon: "linkedin"  },
  { label: "Instagram", href: "https://www.instagram.com/naren_s.j._/",           icon: "instagram" },
  { label: "Email",     href: "mailto:narensonu1520@gmail.com",                   icon: "email"     },
  { label: "Resume",    href: "/resume",                                           icon: "resume"    },
];

const ACCENT = "#c0a882";

/* ── Inline SVG paths ─────────────────────────────────────────── */
const ICONS: Record<SocialLink["icon"], { viewBox: string; d: string | string[] }> = {
  github: {
    viewBox: "0 0 24 24",
    d: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z",
  },
  linkedin: {
    viewBox: "0 0 448 512",
    d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
  },
  email: {
    viewBox: "0 0 24 24",
    d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
  },
  resume: {
    viewBox: "0 0 24 24",
    d: [
      "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z",
      "M14 2v6h6",
      "M16 13H8M16 17H8M10 9H8",
    ],
  },
  twitter: {
    viewBox: "0 0 512 512",
    d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
  },
  instagram: {
    viewBox: "0 0 448 512",
    d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z",
  },
};

interface Props {
  links?: SocialLink[];
  direction?: "column" | "row";
}

export default function SocialLinks({ links = DEFAULT_LINKS, direction = "column" }: Props) {
  return (
    <>
      <style>{`
        .sl-card {
          max-width: fit-content;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          box-shadow:
            inset 0 0 20px rgba(255,255,255,.10),
            inset 0 0 5px  rgba(255,255,255,.14),
            0 5px 5px rgba(0,0,0,.16);
          transition: background .5s;
        }
        .sl-card:hover { background: rgba(173,173,173,.05); }

        .sl-list {
          padding: 1rem;
          list-style: none;
          display: flex;
          gap: 1rem;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          margin: 0;
        }

        .sl-item {
          position: relative;
          cursor: pointer;
          transition: .5s;
        }

        .sl-svg {
          transition: all .3s;
          padding: 1rem;
          height: 60px;
          width: 60px;
          border-radius: 100%;
          fill: currentColor;
          display: block;
          box-shadow:
            inset 0 0 20px rgba(255,255,255,.3),
            inset 0 0 5px  rgba(255,255,255,.5),
            0 5px 5px rgba(0,0,0,.16);
        }

        .sl-label {
          opacity: 0;
          border-radius: 5px;
          padding: 5px;
          transition: all .3s;
          position: absolute;
          z-index: 9999;
          white-space: nowrap;
          font-family: Inter, system-ui, sans-serif;
          font-size: 11px;
          font-weight: 700;
          pointer-events: none;
          background: rgba(255,255,255,.3);
          box-shadow:
            -5px  0 1px rgba(153,153,153,.2),
            -10px 0 1px rgba(153,153,153,.2),
            inset 0 0 20px rgba(255,255,255,.3),
            inset 0 0 5px  rgba(255,255,255,.5),
            0 5px 5px rgba(0,0,0,.08);
        }

        /* Depth spans */
        .sl-span {
          opacity: 0;
          position: absolute;
          border-radius: 50%;
          transition: all .3s;
          height: 60px;
          width: 60px;
          top: 0; left: 0;
          box-shadow:
            inset 0 0 20px rgba(255,255,255,.3),
            inset 0 0 5px  rgba(255,255,255,.5),
            0 5px 5px rgba(0,0,0,.16);
          pointer-events: none;
        }

        /* Hover — isometric lift */
        .sl-item:hover .sl-svg      { transform: translate(5px, -5px); }
        .sl-item:hover .sl-a .sl-svg { transform: translate(15px,-15px); }
        .sl-item:hover .sl-label    { opacity: 1; transform: translate(25px,-2px) skew(-5deg); }
        .sl-item:hover .sl-span     { opacity: 1; }
        .sl-item:hover .sl-s1       { opacity: .2; }
        .sl-item:hover .sl-s2       { opacity: .4; transform: translate(5px, -5px); }
        .sl-item:hover .sl-s3       { opacity: .6; transform: translate(10px,-10px); }
      `}</style>

      <div className="sl-card" role="navigation" aria-label="Social links">
        <ul className="sl-list" style={{ flexDirection: direction }}>
          {links.map(({ label, href, color = ACCENT, icon }) => {
            const { viewBox, d } = ICONS[icon];
            const paths = Array.isArray(d) ? d : [d];
            const isExternal = href.startsWith("http");

            return (
              <li key={label} className="sl-item">
                {/* Depth shadow layers */}
                <span className="sl-span sl-s1" style={{ color }} aria-hidden="true" />
                <span className="sl-span sl-s2" style={{ color }} aria-hidden="true" />
                <span className="sl-span sl-s3" style={{ color }} aria-hidden="true" />

                <a
                  href={href}
                  className="sl-a"
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={label}
                >
                  <svg
                    className="sl-svg"
                    viewBox={viewBox}
                    style={{ color }}
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    {paths.map((p, i) => (
                      <path key={i} d={p} />
                    ))}
                  </svg>
                </a>

                <div className="sl-label" style={{ color }} aria-hidden="true">
                  {label}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
