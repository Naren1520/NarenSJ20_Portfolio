"use client";

/**
 * GlitchTV — CRT TV with static noise, scanlines, RGB glitch, and error text.
 *
 * Props:
 *   message   – text shown on screen   (default "ERROR")
 *   width     – screen width  px       (default 340)
 *   height    – screen height px       (default 220)
 *   textColor – glitch text colour     (default "#ff3b30")
 */

interface GlitchTVProps {
  message?:   string;
  width?:     number;
  height?:    number;
  textColor?: string;
}

export default function GlitchTV({
  message   = "ERROR",
  width     = 340,
  height    = 220,
  textColor = "#ff3b30",
}: GlitchTVProps) {
  const standW = Math.round(width * 0.45);

  return (
    <>
      <style>{`
        .gtv-wrap {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          user-select: none;
        }

        /* ── Outer TV shell ── */
        .gtv-shell {
          background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
          border-radius: 18px;
          padding: 14px 14px 10px;
          box-shadow:
            0 12px 40px rgba(0,0,0,.7),
            inset 0 1px 0 rgba(255,255,255,.06),
            inset 0 -1px 0 rgba(0,0,0,.4);
          border: 1px solid #3a3a3a;
        }

        /* ── Screen bezel ── */
        .gtv-bezel {
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          background: #000;
          box-shadow:
            inset 0 0 30px rgba(0,0,0,.9),
            inset 0 0 6px rgba(255,255,255,.04);
        }

        /* ── Static noise layer ── */
        .gtv-noise {
          position: absolute;
          inset: 0;
          z-index: 1;
          background-image:
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.18'/%3E%3C/svg%3E");
          animation: gtv-noise-shift 0.08s steps(3) infinite;
          mix-blend-mode: screen;
          pointer-events: none;
        }

        /* ── Scanlines ── */
        .gtv-scanlines {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 2px,
            rgba(0,0,0,0.18) 2px,
            rgba(0,0,0,0.18) 4px
          );
          pointer-events: none;
        }

        /* ── Glitch horizontal bars ── */
        .gtv-glitch-bar {
          position: absolute;
          left: 0; right: 0;
          height: 3px;
          z-index: 3;
          background: rgba(255,50,50,0.35);
          animation: gtv-bar-move 2.4s linear infinite;
          pointer-events: none;
        }
        .gtv-glitch-bar:nth-child(2) {
          height: 1px;
          background: rgba(0,200,255,0.3);
          animation: gtv-bar-move 1.7s linear infinite reverse;
          animation-delay: -0.8s;
        }

        /* ── RGB split ghost ── */
        .gtv-rgb-r, .gtv-rgb-g, .gtv-rgb-b {
          position: absolute;
          top: 50%; left: 50%;
          font-family: "Courier New", Courier, monospace;
          font-size: clamp(13px, 2vw, 18px);
          font-weight: 900;
          letter-spacing: 3px;
          white-space: nowrap;
          z-index: 4;
          pointer-events: none;
          opacity: 0.35;
        }
        .gtv-rgb-r { color: red;   transform: translate(calc(-50% + 3px), -50%); animation: gtv-glitch-r 0.4s steps(2) infinite; }
        .gtv-rgb-g { color: lime;  transform: translate(calc(-50% - 3px), -50%); animation: gtv-glitch-g 0.4s steps(2) infinite; }
        .gtv-rgb-b { color: cyan;  transform: translate(-50%, calc(-50% + 2px)); animation: gtv-glitch-b 0.4s steps(2) infinite; }

        /* ── Main error text ── */
        .gtv-msg {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          font-family: "Courier New", Courier, monospace;
          font-size: clamp(13px, 2vw, 18px);
          font-weight: 900;
          letter-spacing: 3px;
          text-shadow:
            0 0 8px currentColor,
            0 0 20px currentColor,
            2px 0 0 rgba(255,0,0,0.6),
            -2px 0 0 rgba(0,200,255,0.6);
          z-index: 5;
          white-space: nowrap;
          animation: gtv-msg-glitch 3s steps(1) infinite;
        }

        /* ── Blinking cursor ── */
        .gtv-cursor {
          display: inline-block;
          width: 0.6em;
          height: 1em;
          background: currentColor;
          vertical-align: text-bottom;
          margin-left: 4px;
          animation: gtv-blink 1s step-end infinite;
        }

        /* ── Screen glow (CRT phosphor) ── */
        .gtv-glow {
          position: absolute;
          inset: 0;
          z-index: 6;
          background: radial-gradient(ellipse at 50% 50%, rgba(255,50,50,0.06) 0%, transparent 70%);
          pointer-events: none;
          animation: gtv-glow-pulse 2s ease-in-out infinite alternate;
        }

        /* ── Vignette ── */
        .gtv-vignette {
          position: absolute;
          inset: 0;
          z-index: 7;
          background: radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 100%);
          pointer-events: none;
        }

        /* ── TV buttons row ── */
        .gtv-controls {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 6px;
          padding: 8px 4px 2px;
        }
        .gtv-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #444;
          border: 1px solid #555;
          box-shadow: inset 0 1px 0 rgba(255,255,255,.1);
        }
        .gtv-dot.power {
          background: #ff3b30;
          box-shadow: 0 0 4px #ff3b30, inset 0 1px 0 rgba(255,255,255,.2);
          animation: gtv-led-pulse 1.5s ease-in-out infinite alternate;
        }

        /* ── Stand ── */
        .gtv-stand-neck {
          width: 28px;
          height: 12px;
          background: linear-gradient(to bottom, #2a2a2a, #1e1e1e);
          margin: 0 auto;
          border-radius: 0 0 4px 4px;
        }
        .gtv-stand-base {
          height: 8px;
          background: linear-gradient(to bottom, #2e2e2e, #1a1a1a);
          border-radius: 4px;
          box-shadow: 0 4px 12px rgba(0,0,0,.6);
        }

        /* ── Keyframes ── */
        @keyframes gtv-noise-shift {
          0%   { background-position: 0 0; }
          33%  { background-position: 40px -20px; }
          66%  { background-position: -30px 15px; }
          100% { background-position: 10px -10px; }
        }
        @keyframes gtv-bar-move {
          0%   { top: -4px; }
          100% { top: 100%; }
        }
        @keyframes gtv-glitch-r {
          0%,100% { transform: translate(calc(-50% + 3px), -50%); opacity: 0.3; }
          50%     { transform: translate(calc(-50% + 6px), -50%); opacity: 0.5; }
        }
        @keyframes gtv-glitch-g {
          0%,100% { transform: translate(calc(-50% - 3px), -50%); opacity: 0.3; }
          50%     { transform: translate(calc(-50% - 1px), -50%); opacity: 0.1; }
        }
        @keyframes gtv-glitch-b {
          0%,100% { transform: translate(-50%, calc(-50% + 2px)); opacity: 0.3; }
          50%     { transform: translate(-50%, calc(-50% - 2px)); opacity: 0.5; }
        }
        @keyframes gtv-msg-glitch {
          0%,94%   { transform: translate(-50%,-50%) skewX(0deg);    opacity: 1;   }
          95%      { transform: translate(calc(-50% + 4px),-50%) skewX(-8deg); opacity: 0.7; }
          96%      { transform: translate(calc(-50% - 4px),-50%) skewX( 8deg); opacity: 0.9; }
          97%,100% { transform: translate(-50%,-50%) skewX(0deg);    opacity: 1;   }
        }
        @keyframes gtv-blink {
          0%,100% { opacity: 1; }
          50%     { opacity: 0; }
        }
        @keyframes gtv-glow-pulse {
          from { opacity: 0.6; }
          to   { opacity: 1;   }
        }
        @keyframes gtv-led-pulse {
          from { box-shadow: 0 0 3px #ff3b30; }
          to   { box-shadow: 0 0 8px #ff3b30, 0 0 14px #ff3b30; }
        }
      `}</style>

      <div className="gtv-wrap" role="img" aria-label={`Retro TV showing: ${message}`}>
        <div className="gtv-shell">
          {/* Screen */}
          <div className="gtv-bezel" style={{ width: `${width}px`, height: `${height}px` }}>
            <div className="gtv-noise"    aria-hidden="true" />
            <div className="gtv-scanlines" aria-hidden="true" />
            <div className="gtv-glitch-bar" aria-hidden="true" />
            <div className="gtv-glitch-bar" aria-hidden="true" />

            {/* RGB ghost copies */}
            <span className="gtv-rgb-r" aria-hidden="true">{message}</span>
            <span className="gtv-rgb-g" aria-hidden="true">{message}</span>
            <span className="gtv-rgb-b" aria-hidden="true">{message}</span>

            {/* Main text */}
            <p className="gtv-msg" style={{ color: textColor }} aria-live="polite">
              {message}
              <span className="gtv-cursor" style={{ color: textColor }} aria-hidden="true" />
            </p>

            <div className="gtv-glow"    aria-hidden="true" />
            <div className="gtv-vignette" aria-hidden="true" />
          </div>

          {/* Control row */}
          <div className="gtv-controls" aria-hidden="true">
            <div className="gtv-dot" />
            <div className="gtv-dot" />
            <div className="gtv-dot power" />
          </div>
        </div>

        {/* Stand */}
        <div aria-hidden="true">
          <div className="gtv-stand-neck" />
          <div className="gtv-stand-base" style={{ width: `${standW}px` }} />
        </div>
      </div>
    </>
  );
}
