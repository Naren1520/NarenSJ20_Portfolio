"use client";

/**
 * Phone3D — interactive 3-D CSS smartphone.
 * Hover to flip upright; shows a full Android-style home screen.
 * Converted from styled-components → inline <style> tag.
 * No external dependencies.
 *
 * Usage:
 *   import Phone3D from "@/components/ui/Phone3D"
 *   <Phone3D />
 */

export default function Phone3D() {
  return (
    <>
      <style>{`
        .ph-card {
          perspective: 1000px;
          transform-style: preserve-3d;
          position: relative;
          display: inline-block;
        }

        /* ── Phone shell ─────────────────────────────────────────── */
        .ph-phone {
          position: relative;
          perspective: 1000px;
          width: 150px;
          height: 254px;
          transform-style: preserve-3d;
          transform: rotateX(80deg) rotateY(0deg) rotateZ(30deg);
          transition: transform 1s;
        }
        .ph-phone:hover {
          transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1.5);
        }

        /* ── All faces ───────────────────────────────────────────── */
        .ph-face {
          position: absolute;
          border-radius: 10px;
          width: 100%;
          height: 100%;
          background-color: rgb(24,23,24);
          top: 50%; left: 50%;
        }
        .ph-front {
          transform: translate(-50%,-50%) translateZ(5px);
          background:
            radial-gradient(circle,rgb(170,162,162),rgb(44,8,102) 30%,rgba(26,78,189,.226) 0%),
            radial-gradient(circle at 40px 40px,rgb(233,228,228),rgb(41,35,49) 30%,rgba(88,84,84,0) 0%),
            radial-gradient(circle at 600px 200px,rgb(233,228,228),rgb(27,26,26) 10%,rgba(88,84,84,0) 0%),
            radial-gradient(circle at 800px 100px,rgb(233,228,228),#333 10%,rgba(88,84,84,0) 0%),
            radial-gradient(circle at 700px 500px,rgb(233,228,228),#333 2%,rgba(88,84,84,.123) 0%),
            radial-gradient(circle at 200px 400px,rgb(233,228,228),#333 1%,rgba(88,84,84,0) 0%),
            radial-gradient(circle at 300px 700px,rgb(233,228,228),#333 15%,rgba(88,84,84,0) 0%),
            radial-gradient(circle at 650px 400px,rgb(233,228,228),#333 10%,rgba(88,84,84,0) 0%),
            radial-gradient(circle at 600px 600px,rgb(233,228,228),#333 1%,rgba(88,84,84,.959) 0%);
          padding: 0.5rem;
          text-align: center;
          border: solid 5px #000;
          border-radius: 10px;
          border-top: 15px solid;
          border-bottom: 15px solid;
        }
        .ph-back  { transform: translate(-50%,-50%) rotateY(180deg) translateZ(5px); }
        .ph-left  { height:254px; width:10px; transform:translate(-50%,-50%) rotateY(-90deg) translateZ(75px); }
        .ph-right { height:254px; width:10px; transform:translate(-50%,-50%) rotateY(90deg) translateZ(75px); }
        .ph-top   { width:150px; height:10px; transform:translate(-50%,-50%) rotateX(90deg) translateZ(127px); }
        .ph-bot   { width:150px; height:10px; transform:translate(-50%,-50%) rotateX(-90deg) translateZ(127px); }

        /* ── Status bar ──────────────────────────────────────────── */
        .ph-head {
          font-size: 6px;
          position: absolute;
          width: 100%; left: 0; top: 0;
          height: 10px;
          display: flex; justify-content: space-between;
        }
        .ph-hl { color:#fff; margin:0 2px; }
        .ph-hr span { display:inline-block; width:10px; height:10px; margin:0 1px; }
        .ph-icon { width:100%; height:100%; }

        /* ── Search bar ──────────────────────────────────────────── */
        .ph-search {
          position: relative;
          margin-top: .2rem; margin-bottom: 1rem;
        }
        .ph-glogo {
          position:absolute; width:10px; left:5px; top:50%;
          transform:translateY(-50%);
        }
        .ph-sinput {
          width:100%; border-radius:20px;
          padding:.3rem; padding-left:1rem;
          font-size:9px; height:1.5rem;
          border:none; outline:none;
        }

        /* ── Date ────────────────────────────────────────────────── */
        .ph-date { color:#fff; margin-bottom:1rem; text-align:left; }
        .ph-date * { display:inline-block; }
        .ph-hour { font-size:large; }
        .ph-period, .ph-day { font-size:9px; line-height:10px; }

        /* ── App grid ────────────────────────────────────────────── */
        .ph-home {
          display:grid; grid-template-columns:repeat(5,1fr);
          gap:10px; grid-template-rows:repeat(2,1fr);
        }
        .ph-home2 { grid-template-rows:repeat(1,1fr) !important; margin-bottom:.5rem; }
        .ph-app {
          display:inline-block; width:15px; height:15px;
          background:#fff; border-radius:30%;
          text-align:center; position:relative;
        }
        .ph-applogo {
          width:70%; height:70%;
          position:absolute; top:50%; left:50%;
          transform:translate(-50%,-50%);
        }
        .ph-full { background:transparent !important; }
        .ph-full .ph-applogo { width:100% !important; height:100% !important; }
        .ph-menu-bg { background:transparent !important; }
        .ph-phone-bg { background:#33ff77 !important; }

        /* ── Bullet dots ─────────────────────────────────────────── */
        .ph-bullet {
          display:inline-block; width:30%; height:0;
          border-bottom:5px dotted rgba(255,255,255,.65);
        }

        /* ── Navigation bar ──────────────────────────────────────── */
        .ph-nav { display:flex; justify-content:space-around; }
        .ph-btn { display:inline-block; width:10px; height:10px; }
        .ph-btn-home { border-radius:50%; border:1px solid #fff; }
        .ph-btn-back { border-radius:35%; border:1px solid #fff; border-left:1px solid transparent; }
        .ph-btn-task { border-radius:35%; border:1px solid #fff; }

        /* ── Front camera ────────────────────────────────────────── */
        .ph-cam {
          width:10px; height:10px;
          background:rgb(26,25,25); border-radius:50%;
          position:absolute; top:-11px; left:50%;
          transform:translateX(-50%);
        }
        .ph-cam::after {
          content:""; position:absolute; border-radius:50%;
          display:inline-block; top:50%; left:50%; width:50%; height:50%;
          transform:translate(-50%,-50%);
          background:radial-gradient(circle at 6px 2px,rgba(255,255,255,.73),#000);
        }
        .ph-cam::before {
          content:""; position:absolute; border-radius:50%;
          display:inline-block; top:50%; left:50%; width:25%; height:25%;
          z-index:2; transform:translate(-50%,-50%);
          background:#212121;
        }

        /* ── Bottom elements ─────────────────────────────────────── */
        .ph-elems {
          display:flex; justify-content:space-around;
          align-items:center; width:100%; height:100%;
        }
        .ph-hp { display:inline-block; width:8px; height:8px; border-radius:50%; background:#333; }
        .ph-mic { display:inline-block; width:3px; height:3px; border-radius:50%; background:#333; }
        .ph-chg {
          display:inline-block; width:20px; height:6px;
          border-radius:3px 3px 10px 10px; background:#333; position:relative;
        }
        .ph-chg::before {
          content:""; display:inline-block; width:10px; height:2px;
          position:absolute; border-radius:3px 3px 10px 10px;
          top:50%; left:50%; transform:translate(-50%,-50%);
          background:rgb(26,25,25);
        }
        .ph-spk { display:inline-block; width:30px; height:0; border-top:#333 dotted 5px; }
      `}</style>

      <div className="ph-card">
        <div className="ph-phone">

          {/* ── Front face ────────────────────────────────────────── */}
          <div className="ph-face ph-front">

            {/* Status bar */}
            <div className="ph-head">
              <div className="ph-hl">moov</div>
              <div className="ph-hr">
                {/* Wi-Fi */}
                <span>
                  <svg className="ph-icon" viewBox="0 0 365.892 365.892" fill="#fff" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle r="41.494" cy="286.681" cx="182.945"/>
                    <path d="M182.946,176.029c-35.658,0-69.337,17.345-90.09,46.398c-5.921,8.288-4.001,19.806,4.286,25.726c3.249,2.321,6.994,3.438,10.704,3.438c5.754,0,11.423-2.686,15.021-7.724c13.846-19.383,36.305-30.954,60.078-30.954c23.775,0,46.233,11.571,60.077,30.953c5.919,8.286,17.437,10.209,25.726,4.288c8.288-5.92,10.208-17.438,4.288-25.726C252.285,193.373,218.606,176.029,182.946,176.029z"/>
                    <path d="M182.946,106.873c-50.938,0-99.694,21.749-133.77,59.67c-6.807,7.576-6.185,19.236,1.392,26.044c3.523,3.166,7.929,4.725,12.32,4.725c5.051-0.001,10.082-2.063,13.723-6.116c27.091-30.148,65.849-47.439,106.336-47.439s79.246,17.291,106.338,47.438c6.808,7.576,18.468,8.198,26.043,1.391c7.576-6.808,8.198-18.468,1.391-26.043C282.641,128.621,233.883,106.873,182.946,106.873z"/>
                    <path d="M360.611,112.293c-47.209-48.092-110.305-74.577-177.665-74.577c-67.357,0-130.453,26.485-177.664,74.579c-7.135,7.269-7.027,18.944,0.241,26.079c3.59,3.524,8.255,5.282,12.918,5.281c4.776,0,9.551-1.845,13.161-5.522c40.22-40.971,93.968-63.534,151.344-63.534c57.379,0,111.127,22.563,151.343,63.532c7.136,7.269,18.812,7.376,26.08,0.242C367.637,131.238,367.745,119.562,360.611,112.293z"/>
                  </svg>
                </span>
                {/* Signal */}
                <span>
                  <svg className="ph-icon" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="m13 1c-0.555 0-1 .445-1 1v12c0 .555.445 1 1 1h1c.555 0 1-.445 1-1v-12c0-.555-.445-1-1-1zm-4 3c-.555 0-1 .445-1 1v9c0 .555.445 1 1 1h1c.555 0 1-.445 1-1v-9c0-.555-.445-1-1-1zm-4 3c-.555 0-1 .445-1 1v6c0 .555.445 1 1 1h1c.555 0 1-.445 1-1v-6c0-.555-.445-1-1-1zm-4 3c-.555 0-1 .445-1 1v3c0 .555.445 1 1 1h1c.555 0 1-.445 1-1v-3c0-.555-.445-1-1-1z"/>
                  </svg>
                </span>
                {/* Battery */}
                <span>
                  <svg className="ph-icon" viewBox="1 10 20 5" fill="#fff" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path fillOpacity="0.3" d="M20,10V8.33A1.34,1.34,0,0,0,18.67,7H8V17H18.67A1.34,1.34,0,0,0,20,15.67V14h2V10Z"/>
                    <path d="M3.33,17H8V7H3.34A1.34,1.34,0,0,0,2,8.33v7.33A1.34,1.34,0,0,0,3.33,17Z"/>
                  </svg>
                </span>
              </div>
            </div>

            {/* Search */}
            <div className="ph-search">
              <svg width="10" viewBox="0 0 24 24" height="10" className="ph-glogo" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <input placeholder="Search..." type="search" className="ph-sinput" aria-label="Search" />
            </div>

            {/* Date */}
            <div className="ph-date">
              <span className="ph-hour">10:50</span>
              <span className="ph-period">PM</span>
              <br />
              <span className="ph-day">Sat, 04 Nov</span>
            </div>

            {/* App grid row 1 */}
            <div className="ph-home">
              {/* Play Store */}
              <span className="ph-app ph-full">
                <svg className="ph-applogo" viewBox="0 0 28.99 31.99" xmlns="http://www.w3.org/2000/svg" aria-label="Play Store">
                  <path style={{fill:"#ea4335"}} d="M13.54 15.28.12 29.34a3.66 3.66 0 0 0 5.33 2.16l15.1-8.6Z"/>
                  <path style={{fill:"#fbbc04"}} d="m27.11 12.89-6.53-3.74-7.35 6.45 7.38 7.28 6.48-3.7a3.54 3.54 0 0 0 1.5-4.79 3.62 3.62 0 0 0-1.5-1.5z"/>
                  <path style={{fill:"#4285f4"}} d="M.12 2.66a3.57 3.57 0 0 0-.12.92v24.84a3.57 3.57 0 0 0 .12.92L14 15.64Z"/>
                  <path style={{fill:"#34a853"}} d="m13.64 16 6.94-6.85L5.5.51A3.73 3.73 0 0 0 3.63 0 3.64 3.64 0 0 0 .12 2.65Z"/>
                </svg>
              </span>
              {/* Gmail */}
              <span className="ph-app ph-full">
                <svg className="ph-applogo" viewBox="52 42 88 66" xmlns="http://www.w3.org/2000/svg" aria-label="Gmail">
                  <path d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" fill="#4285f4"/>
                  <path d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" fill="#34a853"/>
                  <path d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" fill="#fbbc04"/>
                  <path d="M72 74V48l24 18 24-18v26L96 92" fill="#ea4335"/>
                  <path d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" fill="#c5221f"/>
                </svg>
              </span>
              {/* WhatsApp */}
              <span className="ph-app ph-full">
                <svg className="ph-applogo" clipRule="evenodd" fillRule="evenodd" viewBox="0 0 13100.88 13100.9" xmlns="http://www.w3.org/2000/svg" aria-label="WhatsApp">
                  <linearGradient id="wag" gradientUnits="userSpaceOnUse" x1="6550.42" x2="6550.42" y1="-12.51" y2="13100.61">
                    <stop offset="0" stopColor="#61fd7d"/><stop offset="1" stopColor="#2bb826"/>
                  </linearGradient>
                  <path d="M13099.83 9776.31c0 71.72-2.2 227.29-6.5 347.45-10.55 294.01-33.85 673.42-69.1 846.29-52.97 259.78-132.95 504.98-237.21 709.07-123.36 241.43-280.72 457.68-467.71 644.33-186.58 186.27-402.63 343.01-643.7 465.88-205.15 104.54-451.88 184.56-713.14 237.31-171.15 34.56-547.71 57.41-839.85 67.8-120.29 4.3-275.88 6.46-347.34 6.46l-6450.71-1.04c-71.74 0-227.28-2.2-347.44-6.51-294.03-10.54-673.42-33.85-846.3-69.08-259.78-52.99-505-132.95-709.08-237.21-241.43-123.38-457.68-280.74-644.32-467.73-186.27-186.58-343.01-402.62-465.87-643.68-104.57-205.17-184.59-451.9-237.33-713.15-34.54-171.15-57.4-547.7-67.8-839.86C2.16 10002.37 0 9846.78 0 9775.33l1.02-6450.74c0-71.73 2.2-227.28 6.5-347.45 10.56-294.02 33.85-673.42 69.09-846.29 52.98-259.78 132.94-504.99 237.22-709.08 123.36-241.43 280.73-457.68 467.71-644.33 186.58-186.26 402.63-343.01 643.69-465.88C1630.4 207.01 1877.14 127 2138.4 74.25c171.13-34.56 547.7-57.42 839.85-67.8C3098.53 2.16 3254.14 0 3325.57 0L9776.3 1.04c71.74 0 227.28 2.19 347.44 6.49 294.03 10.56 673.41 33.85 846.31 69.1 259.76 52.97 504.98 132.94 709.07 237.21 241.42 123.36 457.67 280.73 644.31 467.72 186.26 186.57 343.01 402.61 465.87 643.69 104.57 205.17 184.59 451.89 237.33 713.15 34.54 171.14 57.39 547.7 67.8 839.86 4.29 120.28 6.45 275.88 6.45 347.34z" fill="url(#wag)"/>
                  <g fill="#fff">
                    <path d="M10021.26 3099.41C9134.31 2211.72 7954.77 1722.6 6698.04 1722.1c-2589.39 0-4696.83 2106.65-4697.87 4696.06-.34 827.71 215.98 1635.68 627.09 2347.84l-666.48 2433.65 2490.4-653.05c686.18 374.12 1458.72 571.3 2244.99 571.63h1.94c2589.13 0 4696.77-2106.91 4697.82-4696.34.49-1254.86-487.7-2434.81-1374.67-3322.5v.01zM6698.1 10325.07h-1.6c-700.65-.27-1387.85-188.44-1987.37-544.09l-142.59-84.59-1477.84 387.55 394.46-1440.42-92.86-147.69c-390.86-621.48-597.3-1339.82-596.99-2077.36.85-2152.2 1752.49-3903.19 3906.3-3903.19 1042.91.4 2023.3 406.97 2760.52 1144.78 737.22 737.8 1142.98 1718.54 1142.59 2761.54-.84 2152.38-1752.47 3903.47-3904.62 3903.47z"/>
                    <path d="M5122.98 8693.01c33.06 19.95 100.98 19.93 256.76 19.79 661.06-.58 1232.08-2.61 1638.23-2.61 1895.48 0 1845.67-1995.45 959.41-2244.41 129.8-229.98 721.23-661.97 355.45-1554.91-361.71-882.96-1917.18-682.59-2981.02-682.07-393.63.05-334.77 290.91-332.75 743.14 3.23 716.29.58 2655.15.1 3493.29-.1 169.9 51.17 196.01 103.82 227.78zm820.15-731.27c178.98 0 601.15 0 963.01-.57 409.8-.64 774.72-192.32 765.6-600.28-6.7-384.3-262.37-510.42-617.22-545.63-338 3.24-724.6 3.24-1111.4 3.24v1143.24zm0-1915.05c712.98-9.77 988.03 28.74 1377.3-68.76 267.46-151.82 384.31-714.9 1.5-906.15-265.94-132.87-1051.82-87.41-1378.8-73.79V6046.7z"/>
                  </g>
                </svg>
              </span>
              {/* Facebook */}
              <span className="ph-app ph-full">
                <svg className="ph-applogo" viewBox="126.445 2.281 589 589" xmlns="http://www.w3.org/2000/svg" aria-label="Facebook">
                  <circle r="294.5" fill="#3c5a9a" cy="296.781" cx="420.945"/>
                  <path fill="#fff" d="m516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357h-44.788v71.271h46.174v205.177h84.847v-206.531h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0v-70.403z"/>
                </svg>
              </span>
              {/* Empty slots */}
              <span className="ph-app"/>
              <span className="ph-app"/><span className="ph-app"/>
              <span className="ph-app"/><span className="ph-app"/>
              <span className="ph-app"/>
            </div>

            {/* Dot indicator */}
            <div className="ph-bullet"/>

            {/* Dock row */}
            <div className="ph-home ph-home2">
              <span className="ph-app"/>
              {/* Phone */}
              <span className="ph-app ph-phone-bg">
                <svg className="ph-applogo" viewBox="0 0 122.88 122.27" xmlns="http://www.w3.org/2000/svg" fill="#fff" aria-label="Phone">
                  <path d="M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2c0.95,0.07,1.8,0.62,2.25,1.44l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25z"/>
                </svg>
              </span>
              {/* Menu */}
              <span className="ph-app ph-menu-bg">
                <svg className="ph-applogo" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" aria-label="Menu">
                  <g fill="#fff">
                    <path d="M10,39.5V69h29.5H69V39.5V10H39.5H10V39.5z"/><path d="M98.5,39.5V69H128h29.5V39.5V10H128H98.5V39.5z"/>
                    <path d="M187,39.5V69h29.5H246V39.5V10h-29.5H187V39.5z"/><path d="M10,128v29.5h29.5H69V128V98.5H39.5H10V128z"/>
                    <path d="M98.5,128v29.5H128h29.5V128V98.5H128H98.5V128z"/><path d="M187,128v29.5h29.5H246V128V98.5h-29.5H187V128z"/>
                    <path d="M10,216.5V246h29.5H69v-29.5V187H39.5H10V216.5z"/><path d="M98.5,216.5V246H128h29.5v-29.5V187H128H98.5V216.5z"/>
                    <path d="M187,216.5V246h29.5H246v-29.5V187h-29.5H187V216.5z"/>
                  </g>
                </svg>
              </span>
              {/* Messages */}
              <span className="ph-app">
                <svg className="ph-applogo" viewBox="0 0 120.46 122.88" fill="blue" xmlns="http://www.w3.org/2000/svg" aria-label="Messages">
                  <path d="M17.2,0h62.29c4.73,0,9.03,1.93,12.15,5.05c3.12,3.12,5.05,7.42,5.05,12.15v38.35c0,4.73-1.93,9.03-5.05,12.15c-3.12,3.12-7.42,5.05-12.15,5.05H46.92L20.81,95.2c-1.21,1.04-3.04,0.9-4.08-0.32c-0.51-0.6-0.74-1.34-0.69-2.07l1.39-20.07H17.2c-4.73,0-9.03-1.93-12.15-5.05C1.93,64.58,0,60.28,0,55.55V17.2c0-4.73,1.93-9.03,5.05-12.15C8.16,1.93,12.46,0,17.2,0z"/>
                </svg>
              </span>
              <span className="ph-app"/>
            </div>

            {/* Navigation */}
            <div className="ph-nav">
              <span className="ph-btn ph-btn-task"/>
              <span className="ph-btn ph-btn-home"/>
              <span className="ph-btn ph-btn-back"/>
            </div>

            {/* Camera notch */}
            <div className="ph-cam" aria-hidden="true"/>
          </div>

          {/* ── Other faces ───────────────────────────────────────── */}
          <div className="ph-face ph-back">back</div>
          <div className="ph-face ph-top"/>
          <div className="ph-face ph-bot">
            <div className="ph-elems">
              <span className="ph-hp"/>
              <span className="ph-mic"/>
              <span className="ph-chg"/>
              <span className="ph-spk"/>
            </div>
          </div>
          <div className="ph-face ph-left"/>
          <div className="ph-face ph-right"/>

        </div>
      </div>
    </>
  );
}
