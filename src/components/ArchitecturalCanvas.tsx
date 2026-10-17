interface ArchitecturalCanvasProps {
  type: "hero-light" | "bailey-space" | "material-detail" | "silence-light" | "urban-flanerie";
  className?: string;
  caption?: string;
}

export function ArchitecturalCanvas({ type, className = "", caption }: ArchitecturalCanvasProps) {
  return (
    <div className={`relative overflow-hidden bg-[#ECE8E1] border border-stone-300/60 ${className}`}>
      {type === "hero-light" && (
        <svg
          viewBox="0 0 1200 675"
          className="w-full h-full object-cover select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wallGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EFECE6" />
              <stop offset="50%" stopColor="#E6E1D7" />
              <stop offset="100%" stopColor="#D9D2C5" />
            </linearGradient>
            <linearGradient id="sunbeam" x1="0%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#FFFDF9" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#FFF6E5" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ECE4D4" stopOpacity="0" />
            </linearGradient>
            <filter id="grain">
              <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" result="noise" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.1   0 0 0 0 0.1   0 0 0 0 0.1  0 0 0 0.05 0" />
              <feBlend mode="multiply" in="SourceGraphic" in2="noise" />
            </filter>
          </defs>

          {/* Base Wall Surface */}
          <rect width="1200" height="675" fill="url(#wallGradient)" />

          {/* Architectural Axis & Golden Ratio Hairlines */}
          <line x1="160" y1="0" x2="160" y2="675" stroke="#B8B0A2" strokeWidth="0.75" strokeDasharray="3 3" />
          <line x1="741" y1="0" x2="741" y2="675" stroke="#B8B0A2" strokeWidth="0.75" />
          <line x1="0" y1="417" x2="1200" y2="417" stroke="#C5BEB0" strokeWidth="0.75" />

          {/* Recessed Architectural Niche */}
          <polygon points="741,60 1080,120 1080,590 741,675" fill="#C9C2B4" opacity="0.45" />

          {/* Deep Architectural Shadow */}
          <polygon points="280,0 620,0 860,675 420,675" fill="#2A2622" opacity="0.32" />
          <polygon points="420,0 520,0 720,675 600,675" fill="#1C1A17" opacity="0.22" />

          {/* Pure Morning Light Shaft */}
          <polygon points="160,0 360,0 680,675 420,675" fill="url(#sunbeam)" />

          {/* Floor Plinth Shadow Line */}
          <rect x="0" y="580" width="1200" height="95" fill="#BCB4A4" opacity="0.35" />
          <line x1="0" y1="580" x2="1200" y2="580" stroke="#7C7365" strokeWidth="1" />

          {/* Architectural Plate Annotation */}
          <text x="36" y="635" fill="#6A6255" fontSize="11" fontFamily="'Plus Jakarta Sans', monospace" letterSpacing="0.18em">
            FIG. 01 — STUDY OF NATURAL LIGHT DRIFT & SHADOW GAP (7.2M AXIS)
          </text>
        </svg>
      )}

      {type === "bailey-space" && (
        <svg
          viewBox="0 0 800 600"
          className="w-full h-full object-cover select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="loungeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#DFD9CE" />
              <stop offset="100%" stopColor="#CBC4B7" />
            </linearGradient>
            <linearGradient id="softSkylight" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFC" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#ECE6DA" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#D7D0C2" stopOpacity="0" />
            </linearGradient>
          </defs>

          <rect width="800" height="600" fill="url(#loungeGrad)" />

          {/* Acoustic Timber Slats Pattern */}
          <g opacity="0.55" stroke="#766C5C" strokeWidth="1.2">
            {Array.from({ length: 28 }).map((_, i) => (
              <line key={i} x1={70 + i * 14} y1="80" x2={70 + i * 14} y2="460" />
            ))}
          </g>

          {/* Central Skylight Well */}
          <polygon points="260,0 540,0 580,220 220,220" fill="url(#softSkylight)" />
          <rect x="240" y="30" width="320" height="8" fill="#5E5546" opacity="0.8" />

          {/* Low Monolithic Stone Table / Seating Plinth */}
          <rect x="210" y="440" width="380" height="42" fill="#585145" />
          <rect x="200" y="432" width="400" height="8" fill="#998F7E" />
          <rect x="230" y="482" width="340" height="8" fill="#1C1A17" opacity="0.3" />

          {/* Recessed Quiet Reading Alcove */}
          <rect x="520" y="140" width="220" height="320" fill="#B3ABA0" opacity="0.4" />
          <line x1="520" y1="140" x2="520" y2="460" stroke="#4F473B" strokeWidth="1.5" />

          {/* Ambient Lighting Cone */}
          <polygon points="630,140 540,460 720,460" fill="#FFF9ED" opacity="0.18" />

          {/* Architectural Drawing Dimension Lines */}
          <line x1="70" y1="520" x2="450" y2="520" stroke="#8E8576" strokeWidth="0.8" />
          <line x1="70" y1="514" x2="70" y2="526" stroke="#8E8576" strokeWidth="0.8" />
          <line x1="450" y1="514" x2="450" y2="526" stroke="#8E8576" strokeWidth="0.8" />
          <text x="210" y="538" fill="#6A6255" fontSize="10" fontFamily="'Plus Jakarta Sans', monospace">
            ACOUSTIC WOOD BAFFLE ZONE — 3,800 MM
          </text>
        </svg>
      )}

      {type === "material-detail" && (
        <svg
          viewBox="0 0 600 800"
          className="w-full h-full object-cover select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bronzeEdge" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#785B3A" />
              <stop offset="40%" stopColor="#A8875B" />
              <stop offset="70%" stopColor="#674D2E" />
              <stop offset="100%" stopColor="#43321B" />
            </linearGradient>
            <linearGradient id="stoneSurface" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E4DDD2" />
              <stop offset="100%" stopColor="#CCC4B6" />
            </linearGradient>
            <linearGradient id="smokedOak" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3E342B" />
              <stop offset="100%" stopColor="#221C16" />
            </linearGradient>
          </defs>

          {/* Left: Textured Warm Limestone */}
          <rect x="0" y="0" width="310" height="800" fill="url(#stoneSurface)" />
          {/* Subtle porous limestone texture lines */}
          <g stroke="#9F9585" strokeWidth="0.5" opacity="0.35">
            <line x1="40" y1="120" x2="260" y2="124" />
            <line x1="80" y1="280" x2="240" y2="282" />
            <line x1="30" y1="440" x2="280" y2="442" />
            <line x1="70" y1="620" x2="220" y2="623" />
          </g>

          {/* Right: Smoked Oak Wall Panel */}
          <rect x="330" y="0" width="270" height="800" fill="url(#smokedOak)" />
          {/* Fine wood grain lines */}
          <g stroke="#53473B" strokeWidth="0.75" opacity="0.4">
            <line x1="360" y1="0" x2="360" y2="800" />
            <line x1="420" y1="0" x2="420" y2="800" />
            <line x1="480" y1="0" x2="480" y2="800" />
            <line x1="540" y1="0" x2="540" y2="800" />
          </g>

          {/* Hairline 8mm Shadow Gap with Bronze Insert */}
          <rect x="310" y="0" width="20" height="800" fill="#15120E" />
          <rect x="315" y="0" width="10" height="800" fill="url(#bronzeEdge)" />

          {/* Raking Light Angle */}
          <polygon points="0,0 200,0 310,480 0,600" fill="#FFFDF8" opacity="0.25" />

          {/* Technical Notation */}
          <line x1="310" y1="400" x2="240" y2="350" stroke="#332D25" strokeWidth="0.8" />
          <text x="50" y="345" fill="#2E2820" fontSize="11" fontFamily="'Plus Jakarta Sans', monospace">
            8MM BRONZE SHADOW GAP
          </text>
        </svg>
      )}

      {type === "silence-light" && (
        <svg
          viewBox="0 0 1000 600"
          className="w-full h-full object-cover select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mistBg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EBE7DF" />
              <stop offset="100%" stopColor="#D4CDC0" />
            </linearGradient>
            <linearGradient id="apertureLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#E8DFD0" stopOpacity="0" />
            </linearGradient>
          </defs>

          <rect width="1000" height="600" fill="url(#mistBg)" />

          {/* 3 Tall Vertical Light Apertures */}
          <rect x="180" y="60" width="60" height="420" fill="url(#apertureLight)" />
          <rect x="320" y="60" width="60" height="420" fill="url(#apertureLight)" />
          <rect x="460" y="60" width="60" height="420" fill="url(#apertureLight)" />

          {/* Shadow Cast Columns */}
          <rect x="100" y="0" width="80" height="600" fill="#2E2A24" opacity="0.4" />
          <rect x="240" y="0" width="80" height="600" fill="#28241F" opacity="0.45" />
          <rect x="380" y="0" width="80" height="600" fill="#231F1B" opacity="0.5" />
          <rect x="520" y="0" width="480" height="600" fill="#1C1815" opacity="0.55" />

          {/* Floor Reflection and Perspective Axis */}
          <polygon points="0,480 1000,480 1000,600 0,600" fill="#BBB3A4" opacity="0.4" />
          <line x1="0" y1="480" x2="1000" y2="480" stroke="#8C8373" strokeWidth="0.8" />

          <text x="40" y="550" fill="#5C5446" fontSize="11" fontFamily="'Plus Jakarta Sans', monospace" letterSpacing="0.15em">
            STUDY ON SLIT APERTURES & SPATIAL QUIETUDE
          </text>
        </svg>
      )}

      {type === "urban-flanerie" && (
        <svg
          viewBox="0 0 800 600"
          className="w-full h-full object-cover select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="duskSky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#DFD8CC" />
              <stop offset="100%" stopColor="#C4BDB1" />
            </linearGradient>
          </defs>

          <rect width="800" height="600" fill="url(#duskSky)" />

          {/* Colonnade Perspective */}
          <g fill="#433B32" opacity="0.85">
            <polygon points="80,100 130,130 130,520 80,560" />
            <polygon points="200,160 240,180 240,490 200,515" />
            <polygon points="300,200 330,215 330,470 300,485" />
            <polygon points="380,230 400,240 400,450 380,460" />
          </g>

          {/* Granite Paver Grid Lines */}
          <g stroke="#7F7668" strokeWidth="0.75" opacity="0.4">
            <line x1="0" y1="560" x2="800" y2="440" />
            <line x1="0" y1="510" x2="800" y2="420" />
            <line x1="80" y1="560" x2="480" y2="360" />
            <line x1="220" y1="580" x2="520" y2="380" />
          </g>

          {/* Evening Lamp Ambient Glow */}
          <circle cx="580" cy="240" r="90" fill="#FFECC2" opacity="0.35" />
          <circle cx="580" cy="240" r="4" fill="#FFE199" />
          <line x1="580" y1="240" x2="580" y2="420" stroke="#3A332B" strokeWidth="1.5" />

          <text x="40" y="550" fill="#5F574A" fontSize="10" fontFamily="'Plus Jakarta Sans', monospace" letterSpacing="0.15em">
            THE FLÂNEUR'S THRESHOLD — PEDESTRIAN COLONNADE
          </text>
        </svg>
      )}

      {caption && (
        <div className="absolute bottom-2.5 right-3 text-[11px] font-mono tracking-wider text-stone-600 bg-stone-100/90 px-2 py-0.5 backdrop-blur-xs">
          {caption}
        </div>
      )}
    </div>
  );
}
