"use client";

/**
 * PrinterCard — animated 3-D CSS printer that feeds, prints, and ejects paper.
 * Converted from styled-components → inline <style> tag.
 * No external dependencies, no icon libraries.
 *
 * Usage:
 *   import PrinterCard from "@/components/ui/PrinterCard"
 *   <PrinterCard />
 */

export default function PrinterCard() {
  return (
    <>
      <style>{`
        /* ── Card shell ──────────────────────────────────────────── */
        .pc-card {
          width: 190px;
          height: 254px;
          background: linear-gradient(145deg, #1a1a1a, #222222);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          box-shadow:
            0 8px 32px rgba(0,0,0,.45),
            inset 0 1px 0 rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
        }
        /* dot-grid texture */
        .pc-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,.04) 1px, transparent 1px);
          background-size: 14px 14px;
          pointer-events: none;
        }

        /* ── Scene ───────────────────────────────────────────────── */
        .pc-scene {
          position: relative;
          width: 190px;
          height: 175px;
          margin-top: 18px;
        }

        /* ── Paper group ─────────────────────────────────────────── */
        .pc-paper-group {
          position: absolute;
          left: 50%;
          top: 22px;
          transform: translateX(-50%);
          z-index: 1;
          animation: pc-paperMove 6.4s cubic-bezier(.4,0,.2,1) infinite;
        }
        .pc-paper {
          width: 54px;
          height: 68px;
          background: #ffffff;
          border: 1px solid #d0d0d0;
          border-radius: 3px;
          padding: 7px 8px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          position: relative;
          z-index: 2;
        }
        .pc-paper-shadow {
          position: absolute;
          top: 2px; left: 1px;
          width: 56px; height: 70px;
          background: rgba(0,0,0,.22);
          border-radius: 3px;
          filter: blur(2px);
          z-index: 1;
          animation: pc-shadowOpacity 6.4s ease-in-out infinite;
        }

        /* ── Ink lines ───────────────────────────────────────────── */
        .pc-ink {
          height: 2.5px;
          background: #2a2a2a;
          border-radius: 1.5px;
          opacity: 0;
        }
        .pc-ink-1 { width: 40px; animation: pc-ink1 6.4s ease-out infinite; }
        .pc-ink-2 { width: 28px; animation: pc-ink2 6.4s ease-out infinite; }
        .pc-ink-3 { width: 19px; animation: pc-ink3 6.4s ease-out infinite; }
        .pc-ink-4 { width: 40px; animation: pc-ink4 6.4s ease-out infinite; }
        .pc-ink-5 { width: 28px; animation: pc-ink5 6.4s ease-out infinite; }
        .pc-ink-6 { width: 19px; animation: pc-ink6 6.4s ease-out infinite; }
        .pc-ink-7 { width: 40px; animation: pc-ink7 6.4s ease-out infinite; }
        .pc-ink-8 { width: 28px; animation: pc-ink8 6.4s ease-out infinite; }

        /* ── Printer body ────────────────────────────────────────── */
        .pc-printer {
          position: absolute;
          left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          width: 132px; height: 96px;
          z-index: 3;
        }
        .pc-ambient-shadow {
          position: absolute;
          left: 3px; top: 10px;
          width: 126px; height: 70px;
          background: rgba(0,0,0,.06);
          border-radius: 12px;
          z-index: 0;
        }
        .pc-top {
          position: absolute;
          left: 26px; top: 0;
          width: 80px; height: 17px;
          background: #f0f0f0;
          border: 1px solid #c8c8c8;
          border-radius: 4px;
          z-index: 2;
        }
        .pc-top-inner {
          position: absolute;
          left: 50%; top: 50%;
          transform: translate(-50%,-50%);
          width: 72px; height: 11px;
          background: #f8f8f8;
          border: .5px solid #d8d8d8;
          border-radius: 2px;
        }
        .pc-body {
          position: absolute;
          left: 0; top: 14px;
          width: 132px; height: 58px;
          background: #ffffff;
          border: 1.5px solid #d5d5d5;
          border-radius: 10px;
          z-index: 2;
          box-shadow: 0 5px 0 rgba(0,0,0,.03);
        }
        .pc-slot {
          position: absolute;
          left: 50%; top: 5px;
          transform: translateX(-50%);
          width: 70px; height: 4px;
          background: #2a2a2a;
          border-radius: 2px;
          z-index: 3;
        }
        .pc-panel {
          position: absolute;
          left: 9px; top: 16px;
          width: 42px; height: 16px;
          background: #f8f8f8;
          border: 1px solid #e0e0e0;
          border-radius: 3px;
          z-index: 3;
        }
        .pc-panel-lg {
          position: absolute;
          left: 4px; top: 4px;
          width: 16px; height: 2.5px;
          background: #a0a0a0;
          border-radius: 1.5px;
        }
        .pc-panel-sm {
          position: absolute;
          left: 4px; top: 9px;
          width: 26px; height: 2px;
          background: #c8c8c8;
          border-radius: 1px;
        }
        .pc-buttons {
          position: absolute;
          left: 58px; top: 18px;
          display: flex; gap: 3px;
          z-index: 3;
        }
        .pc-btn {
          width: 6px; height: 6px;
          background: #e0e0e0;
          border: .5px solid #c8c8c8;
          border-radius: 50%;
        }
        .pc-led-wrap {
          position: absolute;
          right: 10px; top: 16px;
          width: 7px; height: 7px;
          z-index: 3;
        }
        .pc-led {
          width: 7px; height: 7px;
          border-radius: 50%;
          position: relative; z-index: 2;
          animation: pc-ledColor 6.4s ease-in-out infinite;
        }
        .pc-led-glow-wrap {
          position: absolute;
          top: 50%; left: 50%;
          width: 12px; height: 12px;
          transform: translate(-50%,-50%);
          z-index: 1;
          animation: pc-ledGlowPhase 6.4s ease-in-out infinite;
        }
        .pc-led-glow {
          width: 12px; height: 12px;
          border-radius: 50%;
          animation:
            pc-ledPulse 0.6s ease-in-out infinite alternate,
            pc-ledGlowColor 6.4s ease-in-out infinite;
        }
        .pc-vents {
          position: absolute;
          right: 9px; top: 30px;
          display: flex; flex-direction: column; gap: 2.5px;
          z-index: 3;
        }
        .pc-vent {
          width: 15px; height: 2px;
          background: #e0e0e0; border-radius: 1px;
        }
        .pc-tray {
          position: absolute;
          bottom: -3px; left: 50%;
          transform: translateX(-50%);
          width: 108px; height: 5px;
          background: #e8e8e8;
          border: .5px solid #c8c8c8;
          border-radius: 3px;
          z-index: 3;
        }
        .pc-tray-inner {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          width: 96px; height: 2.5px;
          background: #d0d0d0; border-radius: 1px;
        }
        .pc-brand {
          position: absolute;
          left: 9px; top: 46px;
          width: 28px; height: 4px;
          background: #e8e8e8;
          border-radius: 1px; z-index: 3;
        }

        /* ── Status text ─────────────────────────────────────────── */
        .pc-status {
          position: relative;
          margin-top: 6px;
          width: 100%; height: 18px;
          z-index: 4;
        }
        .pc-st {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 600;
          color: rgba(255,255,255,.55);
          letter-spacing: .3px;
          opacity: 0;
          animation-duration: 6.4s;
          animation-timing-function: step-end;
          animation-iteration-count: infinite;
        }
        .pc-ready    { animation-name: pc-stReady;    }
        .pc-feeding  { animation-name: pc-stFeeding;  }
        .pc-printing { animation-name: pc-stPrinting; }
        .pc-ejecting { animation-name: pc-stEjecting; }
        .pc-done     { animation-name: pc-stDone;     }

        /* ── Keyframes ───────────────────────────────────────────── */
        @keyframes pc-paperMove {
          0%,3%          { transform: translateX(-50%) translateY(-75px); opacity: 0; }
          18.75%         { transform: translateX(-50%) translateY(-6px);  opacity: 1; }
          43.75%         { transform: translateX(-50%) translateY(14px);  opacity: 1; }
          78%            { transform: translateX(-50%) translateY(72px);  opacity: 1; }
          81.25%         { transform: translateX(-50%) translateY(72px);  opacity: 0; }
          81.3%,100%     { transform: translateX(-50%) translateY(-75px); opacity: 0; }
        }
        @keyframes pc-shadowOpacity {
          0%,18.75%  { opacity: 0;    }
          43.75%     { opacity: 0;    }
          78%        { opacity: .22;  }
          81.25%,100%{ opacity: 0;    }
        }
        @keyframes pc-ink1 { 0%,43.75%{opacity:0}  48.75%,78%{opacity:1} 81.25%,100%{opacity:0} }
        @keyframes pc-ink2 { 0%,46.25%{opacity:0}  51.25%,78%{opacity:1} 81.25%,100%{opacity:0} }
        @keyframes pc-ink3 { 0%,48.75%{opacity:0}  53.75%,78%{opacity:1} 81.25%,100%{opacity:0} }
        @keyframes pc-ink4 { 0%,51.25%{opacity:0}  56.25%,78%{opacity:1} 81.25%,100%{opacity:0} }
        @keyframes pc-ink5 { 0%,53.75%{opacity:0}  58.75%,78%{opacity:1} 81.25%,100%{opacity:0} }
        @keyframes pc-ink6 { 0%,56.25%{opacity:0}  61.25%,78%{opacity:1} 81.25%,100%{opacity:0} }
        @keyframes pc-ink7 { 0%,58.75%{opacity:0}  63.75%,78%{opacity:1} 81.25%,100%{opacity:0} }
        @keyframes pc-ink8 { 0%,61.25%{opacity:0}  66.25%,78%{opacity:1} 81.25%,100%{opacity:0} }

        @keyframes pc-ledColor {
          0%,18.75%  { background:#ffa500; box-shadow:0 0 4px #ffa500; }
          18.75%,43.75% { background:#1e90ff; box-shadow:0 0 4px #1e90ff; }
          43.75%,100%   { background:#32cd32; box-shadow:0 0 4px #32cd32; }
        }
        @keyframes pc-ledGlowColor {
          0%,18.75%     { background:#ffa500; }
          18.75%,43.75% { background:#1e90ff; }
          43.75%,100%   { background:#32cd32; }
        }
        @keyframes pc-ledPulse {
          from { transform:scale(1);   opacity:.7;  }
          to   { transform:scale(1.5); opacity:.15; }
        }
        @keyframes pc-ledGlowPhase {
          0%,43.75%      { opacity:1; }
          43.75%,81.25%  { opacity:0; }
          81.25%,100%    { opacity:1; }
        }
        @keyframes pc-stReady    { 0%,2.9%{opacity:1}  3%,89.9%{opacity:0}  90%,100%{opacity:1} }
        @keyframes pc-stFeeding  { 0%,2.9%{opacity:0}  3%,18.6%{opacity:1}  18.7%,100%{opacity:0} }
        @keyframes pc-stPrinting { 0%,18.6%{opacity:0} 18.7%,43.6%{opacity:1} 43.7%,100%{opacity:0} }
        @keyframes pc-stEjecting { 0%,43.6%{opacity:0} 43.7%,77.9%{opacity:1} 78%,100%{opacity:0} }
        @keyframes pc-stDone     { 0%,77.9%{opacity:0} 78%,89.9%{opacity:1}   90%,100%{opacity:0} }
      `}</style>

      <div className="pc-card" role="img" aria-label="Animated printer card">
        <div className="pc-scene">

          {/* Paper (behind printer) */}
          <div className="pc-paper-group">
            <div className="pc-paper-shadow" />
            <div className="pc-paper">
              <div className="pc-ink pc-ink-1" />
              <div className="pc-ink pc-ink-2" />
              <div className="pc-ink pc-ink-3" />
              <div className="pc-ink pc-ink-4" />
              <div className="pc-ink pc-ink-5" />
              <div className="pc-ink pc-ink-6" />
              <div className="pc-ink pc-ink-7" />
              <div className="pc-ink pc-ink-8" />
            </div>
          </div>

          {/* Printer body (in front) */}
          <div className="pc-printer">
            <div className="pc-ambient-shadow" />

            <div className="pc-top">
              <div className="pc-top-inner" />
            </div>

            <div className="pc-body">
              <div className="pc-slot" />

              <div className="pc-panel">
                <div className="pc-panel-lg" />
                <div className="pc-panel-sm" />
              </div>

              <div className="pc-buttons">
                <div className="pc-btn" />
                <div className="pc-btn" />
                <div className="pc-btn" />
              </div>

              <div className="pc-led-wrap">
                <div className="pc-led" />
                <div className="pc-led-glow-wrap">
                  <div className="pc-led-glow" />
                </div>
              </div>

              <div className="pc-vents">
                <div className="pc-vent" />
                <div className="pc-vent" />
                <div className="pc-vent" />
              </div>

              <div className="pc-tray">
                <div className="pc-tray-inner" />
              </div>

              <div className="pc-brand" />
            </div>
          </div>

        </div>

        {/* Status label */}
        <div className="pc-status" aria-live="polite">
          <span className="pc-st pc-ready">Ready</span>
          <span className="pc-st pc-feeding">Feeding paper...</span>
          <span className="pc-st pc-printing">Printing...</span>
          <span className="pc-st pc-ejecting">Ejecting...</span>
          <span className="pc-st pc-done">Done</span>
        </div>
      </div>
    </>
  );
}
