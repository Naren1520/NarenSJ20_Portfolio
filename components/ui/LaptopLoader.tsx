"use client";

/**
 * LaptopLoader — animated 3-D CSS laptop with live chat UI.
 * Converted from styled-components → inline <style> tag.
 * No external dependencies.
 *
 * Usage:
 *   import LaptopLoader from "@/components/ui/LaptopLoader"
 *   <LaptopLoader />
 */

export default function LaptopLoader() {
  return (
    <>
      <style>{`
        /* ── Root ────────────────────────────────────────────────── */
        .ll-wrap {
          position: relative;
          width: 26em;
          height: 24em;
          font-size: 10px;
        }

        /* ── Aura glow ───────────────────────────────────────────── */
        .ll-aura {
          position: absolute;
          top: 4%; left: 50%;
          width: 27em; height: 18em;
          transform: translateX(-50%);
          background: radial-gradient(ellipse,
            rgba(110,231,183,.3) 0%,
            rgba(110,231,183,.1) 42%,
            transparent 72%);
          filter: blur(.5em);
          animation: ll-aura 6s ease-in-out infinite;
        }
        @keyframes ll-aura {
          0%,100% { opacity:.5; transform:translateX(-50%) scale(1); }
          50%      { opacity:.9; transform:translateX(-50%) scale(1.08); }
        }

        /* ── Particles ───────────────────────────────────────────── */
        .ll-particles { position:absolute; inset:0; pointer-events:none; }
        .ll-particle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, #6ee7b7 0%, rgba(110,231,183,0) 70%);
          opacity: 0;
          animation: ll-drift ease-in-out infinite;
        }
        .ll-p1 { width:.22em; height:.22em; top:20%; left:8%;  animation-duration:5.2s; }
        .ll-p2 { width:.32em; height:.32em; top:58%; left:88%; animation-duration:6.4s; animation-delay:1.1s; }
        .ll-p3 { width:.18em; height:.18em; top:8%;  left:82%; animation-duration:4.6s; animation-delay:2.3s; }
        .ll-p4 { width:.26em; height:.26em; top:74%; left:14%; animation-duration:5.8s; animation-delay:3.2s; }
        .ll-p5 { width:.2em;  height:.2em;  top:38%; left:50%; animation-duration:5s;   animation-delay:4.4s; }
        .ll-p6 { width:.15em; height:.15em; top:30%; left:28%; animation-duration:6.8s; animation-delay:.7s; }
        @keyframes ll-drift {
          0%   { opacity:0; transform:translateY(.6em) scale(.6); }
          20%  { opacity:.9; }
          80%  { opacity:.5; }
          100% { opacity:0; transform:translateY(-2.6em) scale(1.15); }
        }

        /* ── Scene / laptop ──────────────────────────────────────── */
        .ll-scene {
          position: absolute;
          top: 1.6em; left: 50%;
          width: 22em;
          transform: translateX(-50%);
          perspective: 55em;
        }
        .ll-laptop {
          position: relative;
          transform: rotateX(4deg);
          transform-style: preserve-3d;
        }

        /* ── Screen ──────────────────────────────────────────────── */
        .ll-screen {
          position: relative;
          width: 19.5em;
          margin: 0 auto;
        }
        .ll-bezel {
          position: relative;
          height: 13.3em;
          background: linear-gradient(180deg, #2b303b 0%, #1a1e27 100%);
          border-radius: .9em .9em .25em .25em;
          box-shadow:
            inset 0 .1em 0 rgba(255,255,255,.12),
            inset .1em 0 0 rgba(255,255,255,.05),
            inset -.1em 0 0 rgba(255,255,255,.05),
            inset 0 -.15em .3em rgba(0,0,0,.5),
            0 0 0 .1em #3a4150,
            0 0 0 .22em rgba(148,163,184,.18),
            0 1.2em 3em rgba(8,12,20,.55),
            0 0 3.6em rgba(110,231,183,.2);
          animation: ll-bezelglow 6s ease-in-out infinite;
        }
        @keyframes ll-bezelglow {
          0%,100% {
            box-shadow:
              inset 0 .1em 0 rgba(255,255,255,.12),
              inset .1em 0 0 rgba(255,255,255,.05),
              inset -.1em 0 0 rgba(255,255,255,.05),
              inset 0 -.15em .3em rgba(0,0,0,.5),
              0 0 0 .1em #3a4150,
              0 0 0 .22em rgba(148,163,184,.18),
              0 1.2em 3em rgba(8,12,20,.55),
              0 0 3.6em rgba(110,231,183,.2);
          }
          50% {
            box-shadow:
              inset 0 .1em 0 rgba(255,255,255,.12),
              inset .1em 0 0 rgba(255,255,255,.05),
              inset -.1em 0 0 rgba(255,255,255,.05),
              inset 0 -.15em .3em rgba(0,0,0,.5),
              0 0 0 .1em #3a4150,
              0 0 0 .22em rgba(148,163,184,.22),
              0 1.2em 3em rgba(8,12,20,.55),
              0 0 4.6em rgba(110,231,183,.38);
          }
        }
        .ll-display {
          position: absolute;
          top:.6em; left:.55em; right:.55em; bottom:.55em;
          border-radius: .35em;
          overflow: hidden;
          background: linear-gradient(150deg,#eef2ef 0%,#e6ece7 45%,#dfe7e0 100%);
          background-size: 220% 220%;
          box-shadow:
            inset 0 0 0 .08em rgba(20,30,28,.35),
            inset 0 .35em 1.4em rgba(30,45,42,.2);
          animation: ll-bgshift 9s ease-in-out infinite;
        }
        @keyframes ll-bgshift {
          0%,100% { background-position:0% 0%; }
          50%      { background-position:60% 40%; }
        }
        .ll-cam {
          position: absolute;
          top:.22em; left:50%;
          width:.22em; height:.22em;
          transform: translateX(-50%);
          background: #3a4049;
          border-radius: 50%;
          box-shadow: inset 0 0 0 .05em #22262d, 0 0 .25em rgba(110,231,183,.4);
        }

        /* ── App UI ──────────────────────────────────────────────── */
        .ll-app {
          position: absolute; inset:0;
          display: flex; flex-direction: column;
        }
        .ll-bar {
          display: flex; align-items: center; gap:.42em;
          padding:.45em .55em;
          background: rgba(255,255,255,.72);
          border-bottom:.06em solid rgba(70,90,85,.12);
          box-shadow: 0 .15em .5em rgba(60,80,75,.08);
        }
        .ll-avatar {
          position: relative;
          width:.9em; height:.9em;
          border-radius: 50%;
          background: linear-gradient(135deg,#fbbf24 0%,#f97316 100%);
          box-shadow: 0 .1em .3em rgba(249,115,22,.35);
          flex: none;
        }
        .ll-avatar::after {
          content:"";
          position: absolute; top:-.05em; right:-.05em;
          width:.3em; height:.3em;
          border-radius:50%;
          background:#22c55e;
          border:.06em solid #fff;
          animation: ll-ping 2.2s ease-out infinite;
        }
        @keyframes ll-ping {
          0%       { box-shadow:0 0 0 0 rgba(34,197,94,.55); }
          70%,100% { box-shadow:0 0 0 .55em rgba(34,197,94,0); }
        }
        .ll-barlines { display:flex; flex-direction:column; gap:.15em; flex:1; }
        .ll-barlines i { display:block; height:.17em; border-radius:.1em; background:#8d97a5; }
        .ll-barlines i:first-child { width:52%; }
        .ll-barlines i:last-child  { width:30%; background:#b6bfc9; }
        .ll-menudots { display:flex; gap:.13em; flex:none; }
        .ll-menudots i { width:.15em; height:.15em; border-radius:50%; background:#9aa3af; }

        /* ── Chat ────────────────────────────────────────────────── */
        .ll-chat {
          flex:1; display:flex; flex-direction:column;
          justify-content:flex-end; gap:.4em;
          padding:.5em .6em .35em;
        }
        .ll-msg {
          max-width:74%; padding:.32em .5em;
          border-radius:.6em; opacity:0;
          will-change:transform,opacity;
        }
        .ll-msgtext {
          font-family: ui-rounded,"SF Pro Rounded","Segoe UI",system-ui,sans-serif;
          font-size:.62em; font-weight:600;
          line-height:1.25; letter-spacing:.01em;
        }
        .ll-msg-in {
          align-self:flex-start;
          background:#ffffff;
          border-bottom-left-radius:.14em;
          box-shadow:0 .16em .4em rgba(60,85,80,.18);
          transform-origin:bottom left;
        }
        .ll-msg-in .ll-msgtext { color:#586270; }
        .ll-msg-out {
          align-self:flex-end;
          background:linear-gradient(135deg,#4ade80 0%,#22c55e 100%);
          border-bottom-right-radius:.14em;
          box-shadow:0 .16em .4em rgba(34,197,94,.35);
          transform-origin:bottom right;
        }
        .ll-msg-out .ll-msgtext { color:#fff; }
        .ll-msg1 { animation:ll-msgA 7s cubic-bezier(.22,1.6,.36,1) infinite; }
        .ll-msg2 { animation:ll-msgB 7s cubic-bezier(.22,1.6,.36,1) infinite; }
        .ll-msg3 { animation:ll-msgC 7s cubic-bezier(.22,1.6,.36,1) infinite; }
        @keyframes ll-msgA {
          0%,2%     { opacity:0; transform:translateY(.7em) scale(.8); }
          7%,86%    { opacity:1; transform:translateY(0) scale(1); }
          92%,100%  { opacity:0; transform:translateY(-.4em) scale(.95); }
        }
        @keyframes ll-msgB {
          0%,46%    { opacity:0; transform:translateY(.7em) scale(.8); }
          51%,86%   { opacity:1; transform:translateY(0) scale(1); }
          92%,100%  { opacity:0; transform:translateY(-.4em) scale(.95); }
        }
        @keyframes ll-msgC {
          0%,56%    { opacity:0; transform:translateY(.7em) scale(.8); }
          61%,86%   { opacity:1; transform:translateY(0) scale(1); }
          92%,100%  { opacity:0; transform:translateY(-.4em) scale(.95); }
        }
        /* typing dots */
        .ll-typing { display:flex; align-items:center; gap:.24em; padding:.42em .58em; }
        .ll-typing i {
          width:.3em; height:.3em; border-radius:50%;
          background:#98a8a2;
          animation:ll-dot 1.05s ease-in-out infinite;
        }
        .ll-typing i:nth-child(2) { animation-delay:.15s; }
        .ll-typing i:nth-child(3) { animation-delay:.3s; }
        @keyframes ll-dot {
          0%,60%,100% { transform:translateY(0); opacity:.45; }
          30%          { transform:translateY(-.32em); opacity:1; }
        }

        /* ── Progress bar ────────────────────────────────────────── */
        .ll-progress {
          height:.16em; margin:0 .6em .4em;
          background:rgba(120,130,130,.18);
          border-radius:.1em; overflow:hidden;
        }
        .ll-progress i {
          display:block; height:100%; width:30%;
          background:linear-gradient(90deg,#4ade80 0%,#22c55e 100%);
          border-radius:.1em;
          animation:ll-prog 7s cubic-bezier(.45,0,.2,1) infinite;
        }
        @keyframes ll-prog {
          0%  { width:4%;   opacity:1; }
          40% { width:45%;  }
          70% { width:78%;  }
          92% { width:100%; opacity:1; }
          96%,100% { width:100%; opacity:0; }
        }

        /* ── Input bar ───────────────────────────────────────────── */
        .ll-input {
          display:flex; align-items:center; gap:.6em;
          margin:0 .9em 1.5em;
          padding:.45em .7em .45em .95em;
          font-size:.7em;
          background:rgba(255,255,255,.92);
          border-radius:.9em;
          box-shadow:
            0 .12em .35em rgba(60,85,80,.16),
            inset 0 0 0 .08em rgba(60,85,80,.05);
        }
        .ll-field { display:flex; align-items:center; flex:1; min-width:0; }
        .ll-typed {
          font-family:ui-monospace,"Cascadia Code","SF Mono",Menlo,Consolas,monospace;
          font-size:1.1em; font-weight:700; color:#46525e;
          white-space:nowrap; overflow:hidden; line-height:1.2; padding:.45em 0;
          width:0;
          animation:ll-type 7s linear infinite;
        }
        @keyframes ll-type {
          0%   { width:0; }
          8%   { width:0; animation-timing-function:steps(5,jump-start); }
          40%  { width:5ch; animation-timing-function:linear; }
          44%  { width:5ch; animation-timing-function:steps(1,jump-end); }
          45%  { width:0; }
          100% { width:0; }
        }
        .ll-caret {
          width:.12em; height:1.1em; margin-left:.12em;
          background:#46525e; border-radius:.06em;
          flex:none; align-self:center;
          animation:ll-caret 1s steps(1) infinite;
        }
        @keyframes ll-caret { 0%,49%{opacity:1} 50%,100%{opacity:0} }
        .ll-send {
          width:1.7em; height:1.7em; border-radius:50%;
          background:linear-gradient(135deg,#4ade80 0%,#22c55e 100%);
          box-shadow:0 .1em .26em rgba(34,197,94,.45);
          flex:none; position:relative;
          animation:ll-sendfire 7s ease-out infinite;
        }
        .ll-send::after {
          content:""; position:absolute; top:50%; left:54%;
          transform:translate(-50%,-50%);
          border-top:.3em solid transparent;
          border-bottom:.3em solid transparent;
          border-left:.5em solid #fff;
        }
        @keyframes ll-sendfire {
          0%,42%    { transform:scale(1);    box-shadow:0 .1em .26em rgba(34,197,94,.45); }
          44%       { transform:scale(1.18); box-shadow:0 0 1.1em rgba(74,222,128,1); }
          46%,100%  { transform:scale(1);    box-shadow:0 .1em .26em rgba(34,197,94,.45); }
        }

        /* ── Hinge ───────────────────────────────────────────────── */
        .ll-hinge {
          width:19.5em; height:.45em; margin:0 auto;
          background:linear-gradient(180deg,#4a515e 0%,#22262d 60%,#161a20 100%);
          border-radius:0 0 .22em .22em;
          box-shadow:inset 0 .06em 0 rgba(255,255,255,.18);
        }

        /* ── Deck / keyboard ─────────────────────────────────────── */
        .ll-deck { position:relative; width:22em; }
        .ll-base {
          position:relative; width:22em; height:5.8em;
          background:linear-gradient(180deg,#e8ecf1 0%,#c9cfd9 55%,#b2b9c4 100%);
          clip-path:polygon(5% 0,95% 0,100% 100%,0 100%);
          box-shadow:
            inset 0 .14em 0 rgba(255,255,255,.7),
            inset 0 -.2em .4em rgba(80,90,105,.25);
        }
        .ll-base::before {
          content:""; position:absolute; top:0; left:8%; right:8%; height:45%;
          background:linear-gradient(180deg,rgba(110,231,183,.2) 0%,rgba(110,231,183,0) 100%);
          pointer-events:none;
        }
        .ll-keys {
          position:absolute; top:.5em; left:50%; width:84%;
          transform:translateX(-50%);
          display:flex; flex-direction:column; gap:.32em;
        }
        .ll-row { display:flex; gap:.28em; margin:0 auto; }
        .ll-row:nth-child(1) { width:80%; }
        .ll-row:nth-child(2) { width:87%; }
        .ll-row:nth-child(3) { width:94%; }
        .ll-row:nth-child(4) { width:100%; }
        .ll-key {
          flex:1; height:.72em; border-radius:.14em;
          background:linear-gradient(180deg,#333842 0%,#272b34 100%);
          box-shadow:
            0 .16em 0 #161920,
            0 .24em .4em rgba(0,0,0,.45),
            inset 0 .07em 0 rgba(255,255,255,.08);
        }
        .ll-key-space { flex:4.2; }
        .ll-key-enter { flex:1.9; }
        .ll-key-shift { flex:2.6; }

        /* animated key hits */
        .ll-hit { animation:ll-keypress 7s ease-out infinite; }
        .ll-shift-key { animation:ll-shiftpress 7s ease-out infinite; }
        .ll-k1 { animation-delay:0s; }
        .ll-k2 { animation-delay:-6.552s; }
        .ll-k3 { animation-delay:-5.656s; }
        .ll-k4 { animation-delay:-5.208s; }
        .ll-k5 { animation-delay:-6.104s; }
        .ll-k6 { animation-delay:-4.48s; }
        @keyframes ll-keypress {
          0%,6.8%,9.5%,100% {
            transform:translateY(0);
            background:linear-gradient(180deg,#333842 0%,#272b34 100%);
            box-shadow:0 .16em 0 #161920,0 .24em .4em rgba(0,0,0,.45),inset 0 .07em 0 rgba(255,255,255,.08);
          }
          8% {
            transform:translateY(.12em);
            background:linear-gradient(180deg,#4ade80 0%,#22c55e 100%);
            box-shadow:0 .03em 0 #166534,0 0 1em rgba(74,222,128,.7),inset 0 .05em 0 rgba(255,255,255,.3);
          }
        }
        @keyframes ll-shiftpress {
          0%,26.4%,28.6%,32.8%,35%,100% {
            transform:translateY(0);
            background:linear-gradient(180deg,#333842 0%,#272b34 100%);
            box-shadow:0 .16em 0 #161920,0 .24em .4em rgba(0,0,0,.45),inset 0 .07em 0 rgba(255,255,255,.08);
          }
          27.2%,33.6% {
            transform:translateY(.12em);
            background:linear-gradient(180deg,#4ade80 0%,#22c55e 100%);
            box-shadow:0 .03em 0 #166534,0 0 1em rgba(74,222,128,.7),inset 0 .05em 0 rgba(255,255,255,.3);
          }
        }

        .ll-pad {
          position:absolute; bottom:.42em; left:50%;
          width:4.6em; height:1.1em;
          transform:translateX(-50%);
          background:rgba(60,70,85,.14);
          border-radius:.3em;
          box-shadow:
            inset 0 .07em .12em rgba(40,50,65,.2),
            inset 0 -.05em 0 rgba(255,255,255,.5);
        }
        .ll-front {
          position:relative; width:22em; height:.55em;
          margin-top:-.02em;
          background:linear-gradient(180deg,#aeb5c0 0%,#848b97 100%);
          border-radius:0 0 .5em .5em;
          box-shadow:
            inset 0 .06em 0 rgba(255,255,255,.55),
            inset 0 -.1em .14em rgba(40,48,60,.3),
            0 0 0 .06em rgba(148,163,184,.12);
        }
        .ll-front::after {
          content:""; position:absolute; top:50%; right:1.2em;
          width:.24em; height:.24em;
          transform:translateY(-50%);
          border-radius:50%; background:#4ade80;
          animation:ll-led 2.4s ease-in-out infinite;
        }
        @keyframes ll-led {
          0%,100% { opacity:1; box-shadow:0 0 .45em rgba(74,222,128,.95); }
          50%      { opacity:.35; box-shadow:0 0 .12em rgba(74,222,128,.3); }
        }

        /* ── Floor shadow ────────────────────────────────────────── */
        .ll-shadow {
          position:absolute; bottom:.35em; left:50%;
          width:21em; height:1.7em;
          transform:translateX(-50%);
          background:
            radial-gradient(ellipse at 50% 40%,rgba(15,22,30,.4) 0%,transparent 62%),
            radial-gradient(ellipse,rgba(15,22,30,.22) 0%,transparent 75%);
          border-radius:50%;
          animation:ll-shadow 6s ease-in-out infinite;
        }
        @keyframes ll-shadow {
          0%,100% { transform:translateX(-50%) scaleX(1);   opacity:.95; }
          50%      { transform:translateX(-50%) scaleX(1.05); opacity:.75; }
        }
      `}</style>

      <div className="ll-wrap" role="img" aria-label="Animated laptop with chat interface">
        {/* Aura */}
        <div className="ll-aura" aria-hidden="true" />

        {/* Particles */}
        <div className="ll-particles" aria-hidden="true">
          <span className="ll-particle ll-p1" />
          <span className="ll-particle ll-p2" />
          <span className="ll-particle ll-p3" />
          <span className="ll-particle ll-p4" />
          <span className="ll-particle ll-p5" />
          <span className="ll-particle ll-p6" />
        </div>

        <div className="ll-scene">
          <div className="ll-laptop">

            {/* ── Screen ──────────────────────────────────── */}
            <div className="ll-screen">
              <div className="ll-bezel">
                <div className="ll-display">
                  <div className="ll-app">

                    {/* Title bar */}
                    <div className="ll-bar">
                      <span className="ll-avatar" />
                      <span className="ll-barlines">
                        <i /><i />
                      </span>
                      <span className="ll-menudots">
                        <i /><i /><i />
                      </span>
                    </div>

                    {/* Chat messages */}
                    <div className="ll-chat">
                      <div className="ll-msg ll-msg-in ll-msg1">
                        <span className="ll-msgtext">hey!</span>
                      </div>
                      <div className="ll-msg ll-msg-out ll-msg2">
                        <span className="ll-msgtext">hi :)</span>
                      </div>
                      <div className="ll-msg ll-msg-in ll-msg3 ll-typing">
                        <i /><i /><i />
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="ll-progress"><i /></div>

                    {/* Input */}
                    <div className="ll-input">
                      <span className="ll-field">
                        <span className="ll-typed">hi :)</span>
                        <i className="ll-caret" />
                      </span>
                      <i className="ll-send" />
                    </div>

                  </div>
                </div>
              </div>
              <div className="ll-cam" />
            </div>

            {/* ── Hinge ───────────────────────────────────── */}
            <div className="ll-hinge" />

            {/* ── Keyboard deck ───────────────────────────── */}
            <div className="ll-deck">
              <div className="ll-base">
                <div className="ll-keys">
                  <div className="ll-row">
                    <i className="ll-key" /><i className="ll-key" /><i className="ll-key" />
                    <i className="ll-key" /><i className="ll-key" /><i className="ll-key" />
                    <i className="ll-key" /><i className="ll-key ll-hit ll-k4" />
                  </div>
                  <div className="ll-row">
                    <i className="ll-key" /><i className="ll-key" /><i className="ll-key" />
                    <i className="ll-key ll-hit ll-k1" /><i className="ll-key" />
                    <i className="ll-key ll-hit ll-k2" /><i className="ll-key" />
                  </div>
                  <div className="ll-row">
                    <i className="ll-key ll-key-shift ll-shift-key" />
                    <i className="ll-key" /><i className="ll-key" />
                    <i className="ll-key ll-hit ll-k3" /><i className="ll-key" />
                    <i className="ll-key ll-key-enter ll-hit ll-k6" />
                  </div>
                  <div className="ll-row">
                    <i className="ll-key" /><i className="ll-key" />
                    <i className="ll-key ll-key-space ll-hit ll-k5" />
                    <i className="ll-key" /><i className="ll-key" />
                  </div>
                </div>
                <div className="ll-pad" />
              </div>
              <div className="ll-front" />
            </div>

          </div>
        </div>

        {/* Floor shadow */}
        <div className="ll-shadow" aria-hidden="true" />
      </div>
    </>
  );
}
