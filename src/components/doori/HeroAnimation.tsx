/* Full-screen code-based animation — no images required.
   Replace src="/images/hero-3d.svg" in Hero.tsx with this component
   to restore the animated background.                                */

export default function HeroAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        viewBox="0 0 1200 675"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* ── Gradients ── */}
          <radialGradient id="ha-bg" cx="75%" cy="50%" r="55%">
            <stop offset="0%"   stopColor="#1e3a8a" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#040c1e" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ha-bg2" cx="15%" cy="65%" r="35%">
            <stop offset="0%"   stopColor="#0369a1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#040c1e" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ha-orb" cx="50%" cy="40%" r="60%">
            <stop offset="0%"   stopColor="#7dd3fc" stopOpacity="1" />
            <stop offset="55%"  stopColor="#1d4ed8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.15" />
          </radialGradient>
          <linearGradient id="ha-l1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="40%"  stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ha-l2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#60a5fa" stopOpacity="0" />
            <stop offset="50%"  stopColor="#7dd3fc" stopOpacity="1" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ha-l3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#a5b4fc" stopOpacity="0" />
            <stop offset="45%"  stopColor="#93c5fd" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ha-l4" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%"   stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="50%"  stopColor="#7dd3fc" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ha-l5" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%"   stopColor="#60a5fa" stopOpacity="0" />
            <stop offset="50%"  stopColor="#38bdf8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
          {/* ── Filters ── */}
          <filter id="ha-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="ha-soft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="ha-bloom" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="18" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* ── Base ── */}
        <rect width="1200" height="675" fill="#040c1e" />
        <rect width="1200" height="675" fill="url(#ha-bg)" />
        <rect width="1200" height="675" fill="url(#ha-bg2)" />

        {/* ── Grid ── */}
        <g stroke="#38bdf8" strokeWidth="0.35" opacity="0.06">
          {[60,120,180,240,300,360,420,480,540,600,660,720,780,840,900,960,1020,1080,1140].map(x => (
            <line key={`v${x}`} x1={x} y1="0" x2={x} y2="675" />
          ))}
          {[60,120,180,240,300,360,420,480,540,600].map(y => (
            <line key={`h${y}`} x1="0" y1={y} x2="1200" y2={y} />
          ))}
        </g>

        {/* ── Flow lines ── */}
        {/* Bottom-left → top-right */}
        <path d="M 0 600 C 200 450, 400 300, 600 260 C 780 225, 1000 270, 1200 180"
          stroke="url(#ha-l1)" strokeWidth="1.8" strokeDasharray="1200" strokeDashoffset="1200"
          className="flow-line-1" filter="url(#ha-glow)" />
        <path d="M 0 640 C 220 490, 440 340, 640 300 C 820 265, 1040 295, 1200 220"
          stroke="#38bdf8" strokeWidth="0.9" strokeOpacity="0.35" strokeDasharray="1200" strokeDashoffset="1200"
          className="flow-line-1" />

        {/* Top-right → bottom-left */}
        <path d="M 1200 80 C 980 180, 780 240, 600 275 C 400 315, 200 280, 0 390"
          stroke="url(#ha-l2)" strokeWidth="1.8" strokeDasharray="1000" strokeDashoffset="1000"
          className="flow-line-2" filter="url(#ha-glow)" />

        {/* Diagonal sweep */}
        <path d="M 0 80 C 220 170, 440 260, 600 337 C 780 425, 980 490, 1200 590"
          stroke="url(#ha-l3)" strokeWidth="1.4" strokeDasharray="1400" strokeDashoffset="1400"
          className="flow-line-3" filter="url(#ha-soft)" />

        {/* Horizontal wave */}
        <path d="M 0 310 C 180 270, 360 400, 600 337 C 840 275, 1020 405, 1200 360"
          stroke="#7dd3fc" strokeWidth="1.4" strokeOpacity="0.6" strokeDasharray="1200" strokeDashoffset="1200"
          className="flow-line-4" filter="url(#ha-soft)" />

        {/* Vertical-ish wave */}
        <path d="M 360 0 C 420 150, 300 280, 360 337 C 420 395, 560 450, 520 675"
          stroke="#a5b4fc" strokeWidth="1.1" strokeOpacity="0.45" strokeDasharray="900" strokeDashoffset="900"
          className="flow-line-5" />

        {/* Extra long sweep across full width */}
        <path d="M 0 200 C 300 150, 600 300, 900 280 C 1050 270, 1150 210, 1200 190"
          stroke="url(#ha-l4)" strokeWidth="1.2" strokeDasharray="1400" strokeDashoffset="1400"
          className="flow-line-2" filter="url(#ha-soft)" style={{ animationDelay: "0.5s" }} />

        {/* ── Orbital rings around main orb (900, 337) ── */}
        <circle cx="900" cy="337" r="220" stroke="#1d4ed8" strokeWidth="0.6" strokeOpacity="0.25" strokeDasharray="8 14" />
        <circle cx="900" cy="337" r="160" stroke="#2563eb" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="5 10" />
        <circle cx="900" cy="337" r="100" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.18" strokeDasharray="4 8" />

        {/* ── Expanding rings ── */}
        <circle className="ring-lg-1" cx="900" cy="337" r="140" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.5" />
        <circle className="ring-lg-2" cx="900" cy="337" r="140" stroke="#60a5fa" strokeWidth="0.9" strokeOpacity="0.35" />
        <circle className="ring-lg-3" cx="900" cy="337" r="140" stroke="#7dd3fc" strokeWidth="0.7" strokeOpacity="0.25" />

        {/* ── Secondary accent nodes ── */}
        {[
          [270, 160], [180, 420], [480, 120], [480, 540],
          [700, 180], [700, 520], [1080, 160], [1080, 540],
          [360, 337], [600, 200], [600, 480],
        ].map(([cx, cy], i) => (
          <g key={i} filter="url(#ha-glow)">
            <circle cx={cx} cy={cy} r="3" fill="#38bdf8" fillOpacity="0.5" />
            <circle cx={cx} cy={cy} r="1.2" fill="#ffffff" fillOpacity="0.85" />
          </g>
        ))}

        {/* Node connections */}
        <g stroke="#38bdf8" strokeWidth="0.4" strokeOpacity="0.12">
          <line x1="270" y1="160" x2="480" y2="120" />
          <line x1="480" y1="120" x2="700" y2="180" />
          <line x1="700" y1="180" x2="900" y2="337" />
          <line x1="180" y1="420" x2="360" y2="337" />
          <line x1="360" y1="337" x2="600" y2="480" />
          <line x1="600" y1="480" x2="700" y2="520" />
          <line x1="700" y1="520" x2="900" y2="337" />
          <line x1="1080" y1="160" x2="900" y2="337" />
          <line x1="1080" y1="540" x2="900" y2="337" />
        </g>

        {/* ── Main orb (900, 337) with bloom ── */}
        <circle cx="900" cy="337" r="90" fill="#1d4ed8" fillOpacity="0.08" filter="url(#ha-bloom)" />
        <g className="orb-main">
          <circle cx="900" cy="337" r="52" fill="url(#ha-orb)" filter="url(#ha-glow)" />
          <circle cx="900" cy="337" r="52" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.8" />
          <circle cx="900" cy="337" r="38" stroke="#7dd3fc" strokeWidth="0.8" strokeOpacity="0.5" />
          <line x1="900" y1="298" x2="900" y2="376" stroke="#bfdbfe" strokeWidth="0.8" strokeOpacity="0.55" />
          <line x1="862" y1="337" x2="938" y2="337" stroke="#bfdbfe" strokeWidth="0.8" strokeOpacity="0.55" />
          <circle cx="900" cy="337" r="6" fill="#e0f2fe" fillOpacity="0.95" />
        </g>

        {/* Label */}
        <text x="900" y="415" textAnchor="middle" fontSize="8"
          fill="#7dd3fc" fillOpacity="0.5"
          fontFamily="'Barlow Condensed', sans-serif" fontWeight="600" letterSpacing="3">
          AIRFLOW CONTROL SYSTEM
        </text>

        {/* ── Right-side vertical accent ── */}
        <line x1="1180" y1="40"  x2="1180" y2="635" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.1" />
        <line x1="1160" y1="200" x2="1180" y2="200" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="1160" y1="337" x2="1180" y2="337" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="1160" y1="475" x2="1180" y2="475" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.2" />

        {/* ── Left-side detail ── */}
        <rect x="20" y="200" width="60" height="1" fill="#38bdf8" fillOpacity="0.15" />
        <rect x="20" y="337" width="60" height="1" fill="#38bdf8" fillOpacity="0.15" />
        <rect x="20" y="475" width="60" height="1" fill="#38bdf8" fillOpacity="0.15" />
      </svg>
    </div>
  );
}
