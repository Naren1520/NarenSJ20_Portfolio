"use client";

/**
 * FlipCard — hover/tap to reveal the combination code on the back.
 * Front: mysterious locked card.
 * Back: reveals "2 0 2 6" — the lock code.
 */

export default function FlipCard() {
  return (
    <>
      <style>{`
        .fc-root {
          width: clamp(200px, 60vw, 260px);
          height: clamp(126px, 38vw, 164px);
          perspective: 1000px;
          font-family: 'Courier New', monospace;
          cursor: pointer;
          flex-shrink: 0;
        }
        .fc-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.75s cubic-bezier(.4,0,.2,1);
        }
        .fc-root:hover .fc-inner,
        .fc-root:focus-within .fc-inner {
          transform: rotateY(180deg);
        }
        .fc-face {
          position: absolute;
          inset: 0;
          border-radius: 1.125rem;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          overflow: hidden;
          box-shadow:
            0 2px 4px rgba(0,0,0,.4),
            0 8px 20px rgba(0,0,0,.35),
            0 -1px 0 rgba(0,0,0,.2) inset;
        }

        /* ── FRONT — dark locked card ── */
        .fc-front {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          color: #fff;
        }
        .fc-front-noise {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
        }
        /* Glowing orb */
        .fc-orb {
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,102,204,0.35) 0%, transparent 70%);
          top: -20px;
          right: -20px;
          pointer-events: none;
        }

        /* ── BACK — code reveal ── */
        .fc-back {
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
          transform: rotateY(180deg);
          color: #fff;
        }
        /* Magnetic stripe */
        .fc-stripe {
          position: absolute;
          top: 2.2em;
          left: 0;
          width: 100%;
          height: 1.4em;
          background: repeating-linear-gradient(
            45deg,
            #2a2a2a, #2a2a2a 10px,
            #1a1a1a 10px, #1a1a1a 20px
          );
        }
        .fc-back-label {
          position: absolute;
          top: 5.2em;
          left: 1.2em;
          font-size: 0.32em;
          letter-spacing: 0.18em;
          font-weight: 700;
          color: rgba(255,255,255,0.3);
          text-transform: uppercase;
        }
        .fc-code-display {
          position: absolute;
          bottom: 1.6em;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 0.6em;
        }
        .fc-digit {
          width: 2.2em;
          height: 2.8em;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 0.4em;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6em;
          font-weight: 900;
          color: #96ffb3;
          text-shadow: 0 0 12px rgba(150,255,179,0.8), 0 0 24px rgba(150,255,179,0.4);
          letter-spacing: 0;
          font-family: 'Courier New', monospace;
        }
        .fc-back-hint {
          position: absolute;
          bottom: 0.6em;
          left: 0;
          right: 0;
          text-align: center;
          font-size: 0.32em;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
      `}</style>

      <div className="fc-root" role="img" aria-label="Flip card — hover to reveal the lock code" tabIndex={0}>
        <div className="fc-inner">

          {/* ── FRONT ── */}
          <div className="fc-face fc-front">
            <div className="fc-front-noise" />
            <div className="fc-orb" />

            {/* Lock icon */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -60%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span style={{
                fontSize: "0.5rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                fontFamily: "var(--font-heading)",
              }}>
                Access Restricted
              </span>
            </div>

            {/* Hover hint */}
            <p style={{
              position: "absolute",
              bottom: "1em",
              left: 0,
              right: 0,
              textAlign: "center",
              fontSize: "0.32em",
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontFamily: "var(--font-body)",
            }}>
              Hover to reveal
            </p>
          </div>

          {/* ── BACK ── */}
          <div className="fc-face fc-back">
            <div className="fc-stripe" />

            <div className="fc-back-label">Combination Code</div>

            {/* The code: 2 0 2 6 */}
            <div className="fc-code-display">
              {["2","0","2","6"].map((d, i) => (
                <div key={i} className="fc-digit">{d}</div>
              ))}
            </div>

            <p className="fc-back-hint">Enter this on the lock</p>
          </div>

        </div>
      </div>
    </>
  );
}
