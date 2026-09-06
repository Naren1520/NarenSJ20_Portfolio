"use client";

/**
 * CombinationLock — 4-dial 3-D CSS combination lock.
 * Secret code: 2-0-2-6
 * onUnlock fires when all four dials match the code.
 */

const CSS = `
.combination-lock {
  position: relative;
  display: flex;
  gap: clamp(0.6rem, 2vw, 1.2rem);
  user-select: none;
}

.dial {
  width: clamp(38px, 10vw, 52px);
  height: clamp(110px, 28vw, 148px);
  overflow: hidden;
  perspective: 600px;
  border-radius: 12px / 300px;
  outline: solid 3px #000;
  outline-offset: 1px;
  filter:
    drop-shadow(4px 0 0px #0006)
    drop-shadow(8px -1px 1px #0003)
    drop-shadow(8px 10px 1px #0003)
    drop-shadow(12px 16px 30px rgba(177,175,174,.1))
    drop-shadow(-12px -16px 36px rgba(255,255,255,.1))
    contrast(1.5) sepia(0.2);
  box-shadow:
    -2px -3px 0 4px #1115,
    0 -3px 0 2px #fff,
    0  2px 0 3px #eee,
    0  4px 0 4px #0009;
}

.dial::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 50% 50%, #000 40%, 40.5%, #fff0),
    linear-gradient(to bottom, #fff, 50%, #111);
  background-position: 0 20px, 0 0;
  background-repeat: no-repeat;
  mix-blend-mode: soft-light;
  pointer-events: none;
}

.nonagon {
  width: 100%;
  height: 100%;
  position: relative;
  top: 44px;
  transform-style: preserve-3d;
  transform-origin: 0 29px;
  transform: rotateX(0deg);
  transition: transform 320ms cubic-bezier(.4,0,.2,1);
}

.face {
  position: absolute;
  display: grid;
  place-items: center;
  width: 52px;
  height: 58px;
  background-color: #c4c2bd;
  box-shadow:
    0 -3px 1px 2px #000a,
    0  0px 1px 3px #fffa;
  font-family: "Lucida Console", Courier, monospace;
  font-size: 2em;
  font-weight: bold;
  text-shadow:
     1px  1px 0.5px #fff,
    -1px -1px 0.5px #ccc,
    -0.5px -0.5px 0.5px #0005;
  color: rgba(65,58,36,.9);
}

.face::before, .face::after {
  content: "";
  position: absolute;
  height: 100%;
  width: 5px;
  border: 0.5px solid #0005;
}
.face::before { left: 0;  background-color: #fff; }
.face::after  { right: 0; background-color: #0004; }

.face span  { position: absolute; pointer-events: none; }

.face .radio {
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
  appearance: none;
  opacity: 0;
  z-index: 1;
}

/* Rotation states */
.nonagon:has(.radio-0:checked) { transform: rotateX(0deg); }
.nonagon:has(.radio-1:checked) { transform: rotateX(36deg); }
.nonagon:has(.radio-2:checked) { transform: rotateX(72deg); }
.nonagon:has(.radio-3:checked) { transform: rotateX(108deg); }
.nonagon:has(.radio-4:checked) { transform: rotateX(144deg); }
.nonagon:has(.radio-5:checked) { transform: rotateX(180deg); }
.nonagon:has(.radio-6:checked) { transform: rotateX(216deg); }
.nonagon:has(.radio-7:checked) { transform: rotateX(252deg); }
.nonagon:has(.radio-8:checked) { transform: rotateX(288deg); }
.nonagon:has(.radio-9:checked) { transform: rotateX(324deg); }

/* Face positions */
.face-0 { transform: rotateX(0deg)    translateZ(87px); }
.face-1 { transform: rotateX(-36deg)  translateZ(87px); }
.face-2 { transform: rotateX(-72deg)  translateZ(87px); }
.face-3 { transform: rotateX(-108deg) translateZ(87px); }
.face-4 { transform: rotateX(-144deg) translateZ(87px); }
.face-5 { transform: rotateX(-180deg) translateZ(87px); }
.face-6 { transform: rotateX(-216deg) translateZ(87px); }
.face-7 { transform: rotateX(-252deg) translateZ(87px); }
.face-8 { transform: rotateX(-288deg) translateZ(87px); }
.face-9 { transform: rotateX(-324deg) translateZ(87px); }

/* Side arrows */
.cl-arrow {
  position: absolute;
  width: 0; height: 0;
  filter: drop-shadow(0 0 4px #0009);
  top: calc(50% - 14px);
  z-index: -1;
}
.cl-arrow.left {
  border-top: 13px solid transparent;
  border-bottom: 13px solid transparent;
  border-left: 13px solid rgba(255,91,72,.55);
  left: -30px;
}
.cl-arrow.right {
  border-top: 13px solid transparent;
  border-bottom: 13px solid transparent;
  border-right: 13px solid rgba(255,91,72,.55);
  right: -30px;
}
`;

import { useEffect, useRef } from "react";

const DIGITS = [0,1,2,3,4,5,6,7,8,9] as const;
const CODE   = [2, 0, 2, 6] as const; // secret: 2026

interface WheelProps {
  wheelId: number;
  defaultDigit: number;
  onChange: (wheel: number, digit: number) => void;
}

function Wheel({ wheelId, defaultDigit, onChange }: WheelProps) {
  const name = `wheel-${wheelId}`;
  return (
    <div className="dial">
      <div className="nonagon">
        {DIGITS.map((d) => (
          <div key={d} className={`face face-${d}`}>
            <input
              type="radio"
              name={name}
              className={`radio radio-${d}`}
              defaultChecked={d === defaultDigit}
              onChange={() => onChange(wheelId, d)}
              aria-label={`Wheel ${wheelId + 1}: digit ${d}`}
            />
            <span aria-hidden="true">{d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface CombinationLockProps {
  onUnlock: () => void;
}

export default function CombinationLock({ onUnlock }: CombinationLockProps) {
  const values = useRef<number[]>([0, 0, 0, 0]); // all start at 0, user must dial to 2026

  const handleChange = (wheel: number, digit: number) => {
    values.current[wheel] = digit;
    const unlocked = values.current.every((v, i) => v === CODE[i]);
    if (unlocked) {
      // small delay so user sees all dials settle
      setTimeout(onUnlock, 400);
    }
  };

  return (
    <>
      <style>{CSS}</style>
      <div
        className="combination-lock"
        role="group"
        aria-label="Combination lock — enter 2026 to unlock"
      >
        {[0, 0, 0, 0].map((def, i) => (
          <Wheel
            key={i}
            wheelId={i}
            defaultDigit={def}
            onChange={handleChange}
          />
        ))}
        <div className="cl-arrow left"  aria-hidden="true" />
        <div className="cl-arrow right" aria-hidden="true" />
      </div>
    </>
  );
}
