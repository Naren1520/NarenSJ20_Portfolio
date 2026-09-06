"use client";

/**
 * FolderCard — interactive 3-D CSS folder that opens on click.
 * Converted from styled-components → inline <style> tag.
 * No external dependencies. Pure CSS checkbox state machine.
 *
 * Props:
 *   files  – array of { name, tag, color } to show inside (default: 5 sample files)
 *   count  – label shown in the counter badge (defaults to files.length)
 *   id     – unique id for the checkbox (important when rendering multiple cards)
 */

export interface FolderFile {
  name: string;
  tag: string;
  color: string;
  icon?: "image" | "video" | "code" | "pdf" | "slides";
}

interface FolderCardProps {
  files?: FolderFile[];
  id?: string;
}

const DEFAULT_FILES: FolderFile[] = [
  { name: "Hero_BG.png",      tag: "PNG • 4.2 MB",  color: "#a18cd1", icon: "image"  },
  { name: "Promo_Cut.mp4",    tag: "MP4 • 128 MB",  color: "#00f2fe", icon: "video"  },
  { name: "app_config.json",  tag: "JSON • 12 KB",  color: "#4facfe", icon: "code"   },
  { name: "Q3_Report.pdf",    tag: "PDF • 1.1 MB",  color: "#ffc371", icon: "pdf"    },
  { name: "Pitch_Deck.pptx",  tag: "PPTX • 8.4 MB", color: "#ff5f6d", icon: "slides" },
];

/* Icon components — tiny inline SVGs, no icon library */
function IconImage()  { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x={3} y={3} width={18} height={18} rx={2}/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>; }
function IconVideo()  { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polygon points="23 7 16 12 23 17 23 7"/><rect x={1} y={5} width={15} height={14} rx={2}/></svg>; }
function IconCode()   { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>; }
function IconPdf()    { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1={16} y1={13} x2={8} y2={13}/><line x1={16} y1={17} x2={8} y2={17}/><polyline points="10 9 9 9 8 9"/></svg>; }
function IconSlides() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x={2} y={3} width={20} height={14} rx={2}/><line x1={8} y1={21} x2={16} y2={21}/><line x1={12} y1={17} x2={12} y2={21}/></svg>; }

function FileIcon({ icon }: { icon?: FolderFile["icon"] }) {
  switch (icon) {
    case "image":  return <IconImage />;
    case "video":  return <IconVideo />;
    case "code":   return <IconCode />;
    case "pdf":    return <IconPdf />;
    case "slides": return <IconSlides />;
    default:       return <IconPdf />;
  }
}

export default function FolderCard({ files = DEFAULT_FILES, id = "folder-1" }: FolderCardProps) {
  const count = String(files.length).padStart(2, "0");
  /* Reverse so file-1 is on top visually */
  const reversed = [...files].reverse();

  return (
    <>
      <style>{`
        .fc-label-${id} {
          width: 170px;
          height: 130px;
          perspective: 1200px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          -webkit-tap-highlight-color: transparent;
        }

        .fc-toggle-${id} { display: none; }

        /* Hint */
        .fc-hint-${id} {
          position: absolute;
          top: -40px; right: -50px;
          display: flex; flex-direction: column; align-items: center; gap: 2px;
          transition: opacity .3s, transform .3s;
          pointer-events: none;
          z-index: 100;
          animation: fc-float 2.5s ease-in-out infinite;
        }
        .fc-hint-text-${id} {
          font-family: Inter, system-ui, sans-serif;
          color: #60a5fa; font-size: 10px; font-weight: 900;
          text-decoration: underline; letter-spacing: .5px; white-space: nowrap;
          position: relative; right: -25px; top: 10px;
          transform: rotate(45deg);
        }
        .fc-hint-arrow-${id} { height: 35px; width: 35px; }
        @keyframes fc-float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }
        .fc-toggle-${id}:checked ~ .fc-hint-${id} {
          opacity: 0; transform: translateY(-10px);
        }

        /* Container */
        .fc-container-${id} {
          position: relative; width: 100%; height: 100%;
          transform-style: preserve-3d;
          transition: transform .6s cubic-bezier(.23,1,.32,1);
          backface-visibility: hidden; will-change: transform;
        }
        .fc-toggle-${id}:checked ~ .fc-container-${id} {
          transform: rotateX(10deg) rotateY(-5deg);
        }

        /* Back */
        .fc-back-svg-${id} {
          position: absolute; bottom: 0; width: 100%;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,.4));
        }

        /* Front wrapper */
        .fc-front-wrap-${id} {
          position: absolute; bottom: -7px; width: 100%;
          z-index: 90; transform-origin: bottom;
          transition: transform .5s cubic-bezier(.175,.885,.32,1.275);
          border-radius: 12px;
        }
        .fc-label-${id} { }
        .fc-front-label-${id} {
          position: absolute; top: 10px; left: 10px;
          width: 30px; height: 4px;
          background: rgba(255,255,255,.5); border-radius: 10px;
        }
        .fc-toggle-${id}:checked ~ .fc-container-${id} .fc-front-wrap-${id} {
          transform: rotateX(-50deg);
        }

        /* Counter */
        .fc-counter-${id} {
          position: absolute; top: -95px; right: -75px;
          background: #a18cd1; padding: 4px 8px; border-radius: 50px;
          display: flex; align-items: center; gap: 8px;
          box-shadow: 0 10px 20px rgba(0,0,0,.3), inset 0 1px 1px rgba(255,255,255,.2);
          transform: scale(0) translateY(20px); opacity: 0;
          transition: all .5s cubic-bezier(.34,1.56,.64,1);
          z-index: 100;
        }
        .fc-toggle-${id}:checked ~ .fc-container-${id} .fc-counter-${id} {
          transform: scale(1) translateY(0); opacity: 1; transition-delay: .2s;
        }
        .fc-counter-${id}:hover {
          background: rgba(255,255,255,.2);
          transform: scale(1.1) translateY(-5px) !important;
          cursor: help;
        }
        .fc-dot-${id} {
          width: 6px; height: 6px; background: #34d399;
          border-radius: 50%; box-shadow: 0 0 10px #34d399; position: relative;
        }
        .fc-dot-${id}::after {
          content: ""; position: absolute; inset: 0;
          background: #34d399; border-radius: 50%;
          animation: fc-pulse 2s infinite;
        }
        @keyframes fc-pulse {
          0%   { transform: scale(1); opacity: 1; }
          100% { transform: scale(3); opacity: 0; }
        }
        .fc-clabel-${id} {
          font-family: Inter, sans-serif; font-size: 8px;
          font-weight: 800; color: #000; text-transform: capitalize;
        }
        .fc-cnum-${id} {
          font-family: Inter, sans-serif; font-size: 12px;
          font-weight: 900; color: #fff;
          text-shadow: 0 0 10px rgba(255,255,255,.5);
        }

        /* Files */
        .fc-file-${id} {
          position: absolute; bottom: 5px; left: 10%; width: 80%; height: 85px;
          border-radius: 6px; overflow: hidden;
          box-shadow: inset 0 1px 1px rgba(255,255,255,.3), 0 4px 12px rgba(0,0,0,.3);
          transition: all .6s cubic-bezier(.68,-.55,.265,1.55);
          z-index: 0;
        }
        .fc-f1-${id} { z-index: 25; transition-delay: .15s; }
        .fc-f2-${id} { z-index: 24; transition-delay: .10s; }
        .fc-f3-${id} { z-index: 23; transition-delay: .05s; }
        .fc-f4-${id} { z-index: 22; transition-delay: .02s; }
        .fc-f5-${id} { z-index: 21; transition-delay:   0s; }

        .fc-toggle-${id}:checked ~ .fc-container-${id} .fc-f1-${id} { transform: translateY(-70px) rotate(-10deg) translateX(-15px) translateZ(20px); }
        .fc-toggle-${id}:checked ~ .fc-container-${id} .fc-f2-${id} { transform: translateY(-55px) rotate(8deg)   translateX( 18px) translateZ(10px); }
        .fc-toggle-${id}:checked ~ .fc-container-${id} .fc-f3-${id} { transform: translateY(-40px) rotate(-15deg) translateX( -8px); }
        .fc-toggle-${id}:checked ~ .fc-container-${id} .fc-f4-${id} { transform: translateY(-25px) rotate(12deg)  translateX( 12px); }
        .fc-toggle-${id}:checked ~ .fc-container-${id} .fc-f5-${id} { transform: translateY(-10px) rotate(-5deg); }

        .fc-toggle-${id}:checked ~ .fc-container-${id} .fc-file-${id}:hover { cursor: pointer; filter: brightness(1.1); }
        .fc-toggle-${id}:checked ~ .fc-container-${id} .fc-f1-${id}:hover { transform: translateY(-80px) rotate(-10deg) translateX(-15px) translateZ(20px); }
        .fc-toggle-${id}:checked ~ .fc-container-${id} .fc-f2-${id}:hover { transform: translateY(-65px) rotate(8deg)   translateX( 18px) translateZ(10px); }
        .fc-toggle-${id}:checked ~ .fc-container-${id} .fc-f3-${id}:hover { transform: translateY(-50px) rotate(-15deg) translateX( -8px); }
        .fc-toggle-${id}:checked ~ .fc-container-${id} .fc-f4-${id}:hover { transform: translateY(-35px) rotate(12deg)  translateX( 12px); }
        .fc-toggle-${id}:checked ~ .fc-container-${id} .fc-f5-${id}:hover { transform: translateY(-20px) rotate(-5deg); }

        /* Shine */
        .fc-shine-${id} {
          position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.4), transparent);
          transform: skewX(-20deg); transition: none;
        }
        .fc-toggle-${id}:checked ~ .fc-container-${id} .fc-shine-${id} {
          left: 150%; transition: left .8s ease-in-out .3s;
        }

        /* File text */
        .fc-fname-${id} {
          font-family: Inter, system-ui, sans-serif; font-size: 9px;
          color: #fff; padding: 12px; font-weight: 800;
          text-shadow: 0 1px 3px rgba(0,0,0,.2);
          opacity: 0; transform: translateY(5px);
          transition: all .3s ease .4s;
        }
        .fc-toggle-${id}:checked ~ .fc-container-${id} .fc-fname-${id} {
          opacity: 1; transform: translateY(0);
        }

        /* File icon */
        .fc-ficon-${id} {
          position: absolute; top: 10px; right: 10px; width: 14px; height: 14px;
          color: rgba(255,255,255,.4); transition: color .3s;
        }
        .fc-toggle-${id}:checked ~ .fc-container-${id} .fc-file-${id}:hover .fc-ficon-${id} {
          color: rgba(255,255,255,.9);
        }

        /* File tag */
        .fc-ftag-${id} {
          position: absolute; bottom: 10px; right: 10px;
          background: rgba(0,0,0,.5);
          color: rgba(255,255,255,.9);
          font-family: Inter, system-ui, sans-serif; font-size: 7px; font-weight: 700;
          padding: 3px 6px; border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0,0,0,.2);
          opacity: 0; transform: translateX(10px);
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
          pointer-events: none;
        }
        .fc-toggle-${id}:checked ~ .fc-container-${id} .fc-ftag-${id} { opacity: 1; }

        /* Search */
        .fc-search-${id} {
          position: absolute; top: -40px; left: 10%;
          width: 30px; height: 25px;
          background: #60a5fa;
          border-radius: 20px; display: flex; align-items: center; padding: 0 8px;
          transition: all .5s cubic-bezier(.68,-.55,.265,1.55);
          opacity: 0; z-index: 100;
          border: 1px solid rgba(255,255,255,.2);
        }
        .fc-sicon-${id} { width: 12px; height: 12px; flex-shrink: 0; }
        .fc-sinput-${id} {
          background: transparent; border: none; color: #fff;
          font-family: Inter, sans-serif; font-size: 9px;
          margin-left: 8px; outline: none; transition: width .4s;
        }
        .fc-sinput-${id}::placeholder { color: #fff; }
        .fc-toggle-${id}:checked ~ .fc-container-${id} .fc-search-${id} {
          opacity: 1; top: -80px; width: 80%;
        }
        .fc-toggle-${id}:checked ~ .fc-container-${id} .fc-search-${id}:focus-within {
          width: 90%; background: #ff3b30;
        }
      `}</style>

      <label className={`fc-label-${id}`} aria-label="Folder — click to open">
        <input type="checkbox" className={`fc-toggle-${id}`} />

        {/* Hint arrow */}
        <div className={`fc-hint-${id}`} aria-hidden="true">
          <span className={`fc-hint-text-${id}`}>Click to open</span>
          <svg className={`fc-hint-arrow-${id}`} viewBox="0 0 40 40" fill="none">
            <path d="M 35 5 C 35 5, 15 5, 10 25 M 10 25 L 3 18 M 10 25 L 18 22"
              stroke="#60a5fa" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className={`fc-container-${id}`}>
          {/* Back of folder */}
          <svg className={`fc-back-svg-${id}`} viewBox="0 0 50 40" fill="none">
            <path d="M0 4C0 1.79086 1.79086 0 4 0H16.524C17.721 0 18.8415.54051 19.574 1.4673L22.426 5.0654C23.1585 5.99219 24.279 6.5327 25.476 6.5327H46C48.2091 6.5327 50 8.32356 50 10.5327V36C50 38.2091 48.2091 40 46 40H4C1.79086 40 0 38.2091 0 36V4Z" fill="#0056b3" />
          </svg>

          {/* Search bar */}
          <div className={`fc-search-${id}`}>
            <svg className={`fc-sicon-${id}`} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3}>
              <circle cx={11} cy={11} r={8} />
              <line x1={21} y1={21} x2="16.65" y2="16.65" />
            </svg>
            <input type="text" placeholder="Search files…" className={`fc-sinput-${id}`} />
          </div>

          {/* Files — reversed so first item renders on top */}
          {reversed.map((file, idx) => {
            const slot = reversed.length - idx; // 5 → 1 bottom to top
            return (
              <div
                key={file.name}
                className={`fc-file-${id} fc-f${slot}-${id}`}
                style={{ background: file.color }}
              >
                <div className={`fc-shine-${id}`} />
                <div className={`fc-ficon-${id}`}>
                  <FileIcon icon={file.icon} />
                </div>
                <div className={`fc-fname-${id}`}>{file.name}</div>
                <div className={`fc-ftag-${id}`}>{file.tag}</div>
              </div>
            );
          })}

          {/* Front of folder */}
          <div className={`fc-front-wrap-${id}`}>
            <svg className="w-full" viewBox="0 0 50 34" fill="none">
              <path d="M0 4C0 1.79086 1.79086 0 4 0H46C48.2091 0 50 1.79086 50 4V30C50 32.2091 48.2091 34 46 34H4C1.79086 34 0 32.2091 0 30V4Z" fill="rgba(0,123,255,.65)" />
            </svg>
            <div className={`fc-front-label-${id}`} />
            <div className={`fc-counter-${id}`}>
              <div className={`fc-dot-${id}`} />
              <span className={`fc-clabel-${id}`}>FILES</span>
              <span className={`fc-cnum-${id}`}>{count}</span>
            </div>
          </div>
        </div>
      </label>
    </>
  );
}
