"use client";

/**
 * MacKeyboard — interactive CSS Mac keyboard replica.
 * Converted from styled-components → inline <style> tag.
 * No external dependencies.
 *
 * Props:
 *   onKeyPress – optional callback fired with the key label when clicked
 *   scale      – CSS scale transform (default "1")
 *
 * Usage:
 *   import MacKeyboard from "@/components/ui/MacKeyboard"
 *   <MacKeyboard onKeyPress={(k) => console.log(k)} />
 */

interface MacKeyboardProps {
  onKeyPress?: (key: string) => void;
  scale?: string;
}

/* ── Layout data ─────────────────────────────────────────────── */
type KeyDef = { label: string; cls?: string };

const ROW1: KeyDef[] = [
  { label: "esc",  cls: "mk-fn" },
  { label: "F1",  cls: "mk-fn" }, { label: "F2",  cls: "mk-fn" },
  { label: "F3",  cls: "mk-fn" }, { label: "F4",  cls: "mk-fn" },
  { label: "F5",  cls: "mk-fn" }, { label: "F6",  cls: "mk-fn" },
  { label: "F7",  cls: "mk-fn" }, { label: "F8",  cls: "mk-fn" },
  { label: "F9",  cls: "mk-fn" }, { label: "F10", cls: "mk-fn" },
  { label: "F11", cls: "mk-fn" }, { label: "F12", cls: "mk-fn" },
  { label: "⏏",  cls: "mk-eject" },
];
const ROW2: KeyDef[] = [
  { label: "`" }, { label: "1" }, { label: "2" }, { label: "3" },
  { label: "4" }, { label: "5" }, { label: "6" }, { label: "7" },
  { label: "8" }, { label: "9" }, { label: "0" }, { label: "-" },
  { label: "=" }, { label: "delete", cls: "mk-delete" },
];
const ROW3: KeyDef[] = [
  { label: "tab", cls: "mk-wide" },
  { label: "Q" }, { label: "W" }, { label: "E" }, { label: "R" },
  { label: "T" }, { label: "Y" }, { label: "U" }, { label: "I" },
  { label: "O" }, { label: "P" }, { label: "[" }, { label: "]" },
  { label: "\\", cls: "mk-wide" },
];
const ROW4: KeyDef[] = [
  { label: "caps lock", cls: "mk-wide" },
  { label: "A" }, { label: "S" }, { label: "D" }, { label: "F" },
  { label: "G" }, { label: "H" }, { label: "J" }, { label: "K" },
  { label: "L" }, { label: ";" }, { label: "'" },
  { label: "return", cls: "mk-wide" },
];
const ROW5: KeyDef[] = [
  { label: "shift", cls: "mk-shift" },
  { label: "Z" }, { label: "X" }, { label: "C" }, { label: "V" },
  { label: "B" }, { label: "N" }, { label: "M" }, { label: "," },
  { label: "." }, { label: "/" },
  { label: "shift", cls: "mk-shift" },
];
const ROW6: KeyDef[] = [
  { label: "fn" }, { label: "ctrl", cls: "mk-ctrl" },
  { label: "⌥", cls: "mk-alt" }, { label: "⌘", cls: "mk-cmd" },
  { label: "", cls: "mk-space" },
  { label: "⌘", cls: "mk-cmd" }, { label: "⌥", cls: "mk-alt" },
  { label: "◀", cls: "mk-arrow" }, { label: "▼", cls: "mk-arrow" },
  { label: "▲", cls: "mk-arrow" }, { label: "▶", cls: "mk-arrow" },
];

const ROWS = [ROW1, ROW2, ROW3, ROW4, ROW5, ROW6];

export default function MacKeyboard({ onKeyPress, scale = "1" }: MacKeyboardProps) {
  return (
    <>
      <style>{`
        .mk-board {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 16px;
          padding-bottom: 19px;
          border-radius: 16px;
          background-color: #d3d3d3;
          background-image: linear-gradient(to bottom, #d3d3d3, #c5c5c5);
          box-shadow:
            rgba(0,0,0,.4)  0px 2px 4px,
            rgba(0,0,0,.3)  0px 7px 13px -3px,
            rgba(0,0,0,.2)  0px -3px 0px inset;
          width: 600px;
          user-select: none;
          transform-origin: top left;
        }

        .mk-row {
          display: flex;
          gap: 3px;
        }

        .mk-key {
          background-color: #f0f0f0;
          border: 1px solid rgba(0,0,0,.2);
          border-radius: 6px;
          box-shadow:
            rgba(0,0,0,.4) 0px 2px 4px,
            rgba(0,0,0,.3) 0px 7px 13px -3px,
            rgba(0,0,0,.2) 0px -1px 0px inset;
          min-width: 35px;
          text-align: center;
          padding: 8px 5px;
          font-size: 10px;
          color: #333;
          cursor: pointer;
          transition: box-shadow .2s, background-color .2s, transform .1s;
          line-height: 1.2;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mk-key:hover {
          background-color: #e0e0e0;
          transform: translateY(-2px);
          box-shadow:
            rgba(0,0,0,.4) 0px 2px 5px,
            rgba(0,0,0,.3) 0px 7px 16px -3px,
            rgba(0,0,0,.2) 0px -1px 0px inset;
        }
        .mk-key:active {
          transform: translateY(1px);
          box-shadow:
            rgba(0,0,0,.4) 0px 2px 3px,
            rgba(0,0,0,.3) 0px 5px 10px -3px,
            rgba(0,0,0,.2) 0px -1px 0px inset;
        }

        /* Variant sizes */
        .mk-fn      { max-height: 25px; padding: 4px; }
        .mk-eject   { margin-left: 16px; padding: 4px 24px; }
        .mk-delete  { padding: 8px 24px; }
        .mk-wide    { flex: 2; }
        .mk-shift   { flex: 3; }
        .mk-space   { flex: 5; padding: 8px; min-width: 175px; }
        .mk-cmd,
        .mk-alt     { min-width: 35px; padding: 2px; font-size: 16px; }
        .mk-ctrl    { min-width: 35px; }
        .mk-arrow   { min-width: 30px; }
      `}</style>

      <div
        className="mk-board"
        style={{ transform: `scale(${scale})` }}
        role="group"
        aria-label="Mac keyboard"
      >
        {ROWS.map((row, ri) => (
          <div key={ri} className="mk-row">
            {row.map(({ label, cls }, ki) => (
              <div
                key={ki}
                className={`mk-key${cls ? ` ${cls}` : ""}`}
                role="button"
                tabIndex={0}
                aria-label={label || "space"}
                onClick={() => onKeyPress?.(label)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") onKeyPress?.(label);
                }}
              >
                {label}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
