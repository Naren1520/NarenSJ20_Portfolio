"use client";

/**
 * ProfileCard — dark hover-expand profile card.
 * Converted from styled-components → inline <style> tag.
 * No external dependencies, no images required.
 *
 * Usage:
 *   <ProfileCard />                              // Naren's defaults
 *   <ProfileCard
 *     name="Naren S J"
 *     role="AI Engineer"
 *     level="Expert"
 *     initial="N"
 *     statusText="Available for work"
 *     about="Building intelligent systems, full-stack software and engineering experiences."
 *     bottomText="Currently Building Something Powerful"
 *     hireCta="＋ Hire Me"
 *     contactCta="📞 Contact"
 *     onHire={() => {}}
 *     onContact={() => {}}
 *   />
 */

interface ProfileCardProps {
  name?: string;
  role?: string;
  level?: string;
  initial?: string;
  statusText?: string;
  about?: string;
  bottomText?: string;
  hireCta?: string;
  contactCta?: string;
  onHire?: () => void;
  onContact?: () => void;
}

export default function ProfileCard({
  name        = "Naren S J",
  role        = "AI Engineer",
  level       = "Expert",
  initial     = "N",
  statusText  = "Available for work",
  about       = "Building intelligent systems, full-stack software and engineering experiences at scale.",
  bottomText  = "Currently Building Something Powerful",
  hireCta     = "＋ Hire Me",
  contactCta  = "📞 Contact",
  onHire,
  onContact,
}: ProfileCardProps) {
  return (
    <>
      <style>{`
        .pc2-card {
          width: 290px;
          height: auto;
          border-radius: 26px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif;
        }

        /* ── Top ──────────────────────────────────────────────────── */
        .pc2-top {
          position: relative;
          padding: 20px;
          background:
            radial-gradient(140% 120% at 0% 0%, rgba(255,255,255,.14), transparent 45%),
            linear-gradient(180deg, #141414, #050505);
        }

        /* Glass hover shimmer */
        .pc2-glass {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            140px 120px at 30% 0%,
            rgba(255,255,255,.22),
            rgba(255,255,255,.08) 40%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity .25s ease;
          pointer-events: none;
        }
        .pc2-card:hover .pc2-glass { opacity: 1; }

        .pc2-top > *:not(.pc2-glass) { position: relative; z-index: 2; }

        /* ── Meta ─────────────────────────────────────────────────── */
        .pc2-meta {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: rgba(255,255,255,.55);
          margin-bottom: 14px;
        }

        /* ── User row ─────────────────────────────────────────────── */
        .pc2-user {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
          align-items: center;
        }
        .pc2-avatar {
          width: 40px; height: 40px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #444, #111);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .pc2-initial {
          color: #fff;
          font-weight: 600;
          font-size: 16px;
        }
        .pc2-name {
          color: #fff;
          font-weight: 600;
          font-size: 15px;
          margin-bottom: 3px;
        }
        .pc2-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: rgba(255,255,255,.7);
        }
        .pc2-dot {
          width: 6px; height: 6px;
          background: #6aff6a;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* ── Buttons ──────────────────────────────────────────────── */
        .pc2-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .pc2-btn {
          height: 38px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          background:
            linear-gradient(
              180deg,
              rgba(255,255,255,.14),
              rgba(255,255,255,.06)
            );
          box-shadow: inset 0 1px 0 rgba(255,255,255,.18);
          transition: opacity .2s, transform .15s;
          width: 100%;
        }
        .pc2-btn:hover { opacity: .85; transform: translateY(-1px); }
        .pc2-btn:active { transform: translateY(0); }
        .pc2-btn-secondary { opacity: .9; }

        /* ── Expand area ──────────────────────────────────────────── */
        .pc2-expand {
          flex: 1;
          background: #0c0c0c;
          overflow: hidden;
          max-height: 0;
          transition: max-height .45s cubic-bezier(.2,.8,.2,1);
        }
        .pc2-card:hover .pc2-expand { max-height: 140px; }

        .pc2-section {
          padding: 14px 20px;
          border-top: 1px solid rgba(255,255,255,.06);
        }
        .pc2-section-title {
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 4px;
        }
        .pc2-section-text {
          font-size: 12px;
          color: rgba(255,255,255,.75);
          line-height: 1.5;
        }

        /* ── Bottom bar ───────────────────────────────────────────── */
        .pc2-bottom {
          background: linear-gradient(180deg, #b8ff5a, #7de63b);
          padding: 12px;
          text-align: center;
          font-weight: 700;
          font-size: 13px;
          color: #0b0b0b;
          box-shadow:
            0 12px 30px rgba(120,255,80,.35),
            inset 0 1px 0 rgba(255,255,255,.25);
        }
      `}</style>

      <div className="pc2-card">

        {/* Top section */}
        <div className="pc2-top">
          <div className="pc2-glass" aria-hidden="true" />

          {/* Role + level */}
          <div className="pc2-meta">
            <span>{role}</span>
            <span>{level}</span>
          </div>

          {/* Avatar + name */}
          <div className="pc2-user">
            <div className="pc2-avatar" aria-hidden="true">
              <span className="pc2-initial">{initial}</span>
            </div>
            <div>
              <div className="pc2-name">{name}</div>
              <div className="pc2-status">
                <span className="pc2-dot" aria-hidden="true" />
                {statusText}
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="pc2-actions">
            <button
              className="pc2-btn"
              onClick={onHire}
              aria-label={hireCta}
            >
              {hireCta}
            </button>
            <button
              className="pc2-btn pc2-btn-secondary"
              onClick={onContact}
              aria-label={contactCta}
            >
              {contactCta}
            </button>
          </div>
        </div>

        {/* Expand on hover */}
        <div className="pc2-expand">
          <div className="pc2-section">
            <div className="pc2-section-title">About</div>
            <div className="pc2-section-text">{about}</div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pc2-bottom">{bottomText}</div>
      </div>
    </>
  );
}
