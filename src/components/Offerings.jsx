import { useEffect, useRef, useState } from 'react'

/* ---------- helpers ---------- */

const STOPS = [
  [61, 206, 57],
  [9, 161, 115],
  [5, 135, 202],
]

const mix = (t) => {
  const p = Math.max(0, Math.min(1, t)) * 2
  const i = Math.min(1, Math.floor(p))
  const f = p - i
  const a = STOPS[i]
  const b = STOPS[i + 1]
  const c = (k) => Math.round(a[k] + (b[k] - a[k]) * f)
  return `rgb(${c(0)}, ${c(1)}, ${c(2)})`
}

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  )
  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = () => setMatches(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [query])
  return matches
}

/* ---------- 1. Agentic AI: a living constellation with an orbiting agent ---------- */

function AgentVisual({ animate, accent }) {
  const nodes = [
    { x: 70, y: 45, label: 'Data', r: 0.8 },
    { x: 410, y: 45, label: 'Tickets', r: 1.2 },
    { x: 70, y: 145, label: 'Reports', r: 0.6 },
    { x: 410, y: 145, label: 'Alerts', r: 1.0 },
  ]
  const dur = '4s'

  return (
    <svg
      viewBox="0 0 480 190"
      className="h-auto w-full"
      role="img"
      aria-label="An AI agent orchestrating a constellation of systems"
    >
      <defs>
        <radialGradient id="agent-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent || '#3DCE39'} stopOpacity="0.6" />
          <stop offset="100%" stopColor={accent || '#3DCE39'} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Constellation lines — curved instead of straight */}
      {nodes.map((n) => {
        const midX = (240 + n.x) / 2
        const midY = (95 + n.y) / 2 + (n.y < 95 ? -14 : 14)
        return (
          <path
            key={`line-${n.label}`}
            d={`M240 95 Q${midX} ${midY} ${n.x} ${n.y}`}
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1"
            strokeDasharray="2 6"
            fill="none"
          />
        )
      })}

      {/* Node halos */}
      {nodes.map((n) => (
        <circle
          key={`halo-${n.label}`}
          cx={n.x}
          cy={n.y}
          r="26"
          fill={accent || '#3DCE39'}
          opacity="0.06"
        >
          {animate && (
            <animate
              attributeName="opacity"
              values="0.04;0.12;0.04"
              dur="3s"
              begin={`${n.r * 1.5}s`}
              repeatCount="indefinite"
            />
          )}
        </circle>
      ))}

      {nodes.map((n, i) => (
        <g key={n.label}>
          <rect
            x={n.x - 40}
            y={n.y - 15}
            width="80"
            height="30"
            rx="10"
            fill="rgba(255,255,255,0.06)"
            stroke="rgba(255,255,255,0.22)"
          >
            {animate && (
              <animate
                attributeName="fill-opacity"
                values="0.06;0.06;0.28;0.06"
                keyTimes="0;0.6;0.68;1"
                dur={dur}
                begin={`${i * 0.6}s`}
                repeatCount="indefinite"
              />
            )}
          </rect>
          <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)">
            {n.label}
          </text>
        </g>
      ))}

      {/* Travelling pulses */}
      {animate &&
        nodes.map((n, i) => (
          <circle key={`dot-${n.label}`} r="3.5" fill={accent || '#3DCE39'} opacity="0">
            <animateMotion
              dur={dur}
              begin={`${i * 0.6}s`}
              repeatCount="indefinite"
              path={`M240 95 Q${(240 + n.x) / 2} ${(95 + n.y) / 2 + (n.y < 95 ? -14 : 14)} ${n.x} ${n.y}`}
              keyPoints="0;1;1"
              keyTimes="0;0.55;1"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0;0"
              keyTimes="0;0.05;0.5;0.55;1"
              dur={dur}
              begin={`${i * 0.6}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

      {/* Orbiting agent — the signature innovation */}
      {animate && (
        <g>
          <circle cx="240" cy="95" r="42" fill="none" stroke={accent || '#3DCE39'} strokeWidth="0.8" opacity="0.25">
            <animate attributeName="opacity" values="0.15;0.35;0.15" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="240" cy="95" r="42" fill="none" stroke={accent || '#3DCE39'} strokeWidth="0.8" strokeDasharray="2 8" opacity="0.4">
            <animateTransform attributeName="transform" type="rotate" from="0 240 95" to="360 240 95" dur="12s" repeatCount="indefinite" />
          </circle>
          <circle r="5" fill={accent || '#3DCE39'}>
            <animateMotion dur="6s" repeatCount="indefinite" path="M240 53 A42 42 0 1 1 239.9 53" />
          </circle>
          <circle r="3" fill="#ffffff" opacity="0.8">
            <animateMotion dur="6s" repeatCount="indefinite" path="M240 53 A42 42 0 1 1 239.9 53" />
          </circle>
        </g>
      )}

      {/* Pulsing core */}
      <circle cx="240" cy="95" r="30" fill="url(#agent-glow)">
        {animate && (
          <animate attributeName="r" values="26;32;26" dur="3s" repeatCount="indefinite" />
        )}
      </circle>
      <circle cx="240" cy="95" r="22" fill="#0587CA" />
      <circle cx="240" cy="95" r="22" fill="none" stroke="rgba(255,255,255,0.2)" />

      {/* Inner morphing glyph instead of static square */}
      <g transform="translate(240 95)">
        {animate ? (
          <g>
            <rect x="-6" y="-6" width="12" height="12" rx="3" fill="#ffffff">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0;90;180;270;360"
                dur="8s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="-3" y="-3" width="6" height="6" rx="1.5" fill="#0587CA">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0;-90;-180;-270;-360"
                dur="8s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
        ) : (
          <rect x="-6" y="-6" width="12" height="12" rx="3" fill="#ffffff" />
        )}
      </g>
    </svg>
  )
}

/* ---------- 2. Data: a flowing pixel stream that ripples ---------- */

const HEIGHTS = [2, 3, 3, 4, 3, 5, 4, 5, 6, 5, 6, 5, 7, 6]

function DataVisual({ animate, accent }) {
  const size = 20
  const pitch = 26
  const cols = HEIGHTS.length
  const rows = 7
  const x0 = (480 - (cols * pitch - 6)) / 2
  const cells = []

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      const filled = r < HEIGHTS[c]
      const x = x0 + c * pitch
      const y = 7 + (rows - 1 - r) * pitch

      if (!filled) {
        cells.push(
          <rect key={`${c}-${r}`} x={x} y={y} width={size} height={size} rx="4" fill="#ffffff" opacity="0.04" />
        )
        continue
      }

      // Ripple: delay grows with distance from column center
      const waveDelay = Math.abs(c - cols / 2) * 0.08 + r * 0.03
      cells.push(
        <rect
          key={`${c}-${r}`}
          x={x}
          y={y}
          width={size}
          height={size}
          rx="4"
          fill={mix(c / (cols - 1))}
          opacity="0.85"
        >
          {animate && (
            <>
              <animate
                attributeName="opacity"
                values="0.25;1;0.25"
                dur="3s"
                begin={`${waveDelay.toFixed(2)}s`}
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0;0 -2;0 0"
                dur="3s"
                begin={`${waveDelay.toFixed(2)}s`}
                repeatCount="indefinite"
              />
            </>
          )}
        </rect>
      )
    }
  }

  // A travelling "scan" line across the chart
  return (
    <svg
      viewBox="0 0 480 190"
      className="h-auto w-full"
      role="img"
      aria-label="A bar chart made of pixels with a wave of light rippling across it"
    >
      {cells}
      {animate && (
        <rect x="0" y="0" width="30" height="190" fill={accent || '#09A173'} opacity="0">
          <animate attributeName="x" values="-30;480" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.15;0" dur="4s" repeatCount="indefinite" />
        </rect>
      )}
    </svg>
  )
}

/* ---------- 3. ServiceNow: a conveyor belt of tickets with depth ---------- */

const LANES = ['Open', 'In progress', 'Resolved']
const TICKET_ROWS = [40, 88, 136]

function WorkflowVisual({ animate, accent }) {
  const dur = '7s'
  const keyTimes = '0;0.15;0.35;0.55;0.75;1'
  const colors = ['#0587CA', '#09A173', '#3DCE39']

  return (
    <svg
      viewBox="0 0 480 190"
      className="h-auto w-full"
      role="img"
      aria-label="Requests moving automatically along a conveyor from open to resolved"
    >
      <defs>
        <linearGradient id="track" x1="0" x2="1">
          <stop offset="0%" stopColor={accent || '#0587CA'} stopOpacity="0.5" />
          <stop offset="50%" stopColor="#09A173" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3DCE39" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Rails instead of plain dividers */}
      <line x1="20" y1="170" x2="460" y2="170" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      {[160, 320].map((x) => (
        <line key={x} x1={x} y1="170" x2={x} y2="178" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      ))}

      {/* Lane labels as tabs */}
      {LANES.map((lane, i) => (
        <g key={lane}>
          <rect x={28 + i * 160} y="8" width="104" height="18" rx="4" fill="rgba(255,255,255,0.04)" />
          <text x={80 + i * 160} y="20" textAnchor="middle" fontSize="9" letterSpacing="1.4" fill="rgba(255,255,255,0.6)">
            {lane.toUpperCase()}
          </text>
        </g>
      ))}

      {/* The belt itself */}
      <line x1="20" y1="100" x2="460" y2="100" stroke="url(#track)" strokeWidth="2" strokeDasharray="4 8" opacity="0.35">
        {animate && (
          <animate attributeName="stroke-dashoffset" values="0;-24" dur="1.2s" repeatCount="indefinite" />
        )}
      </line>

      {TICKET_ROWS.map((y, i) => {
        const begin = `${i * 1.4}s`
        return (
          <g
            key={y}
            opacity={animate ? '0' : '1'}
            transform={animate ? undefined : `translate(${i * 160} 0)`}
          >
            {/* Ticket shadow for depth */}
            {animate && (
              <rect x="30" y={y + 4} width="112" height="34" rx="8" fill="#000" opacity="0.15" />
            )}
            <rect x="24" y={y} width="112" height="34" rx="8" fill={animate ? colors[0] : colors[i]}>
              {animate && (
                <animate
                  attributeName="fill"
                  values={`${colors[0]};${colors[0]};${colors[1]};${colors[1]};${colors[2]};${colors[2]}`}
                  keyTimes={keyTimes}
                  dur={dur}
                  begin={begin}
                  repeatCount="indefinite"
                />
              )}
            </rect>
            <rect x="36" y={y + 10} width="54" height="4" rx="2" fill="#ffffff" opacity="0.85" />
            <rect x="36" y={y + 19} width="36" height="4" rx="2" fill="#ffffff" opacity="0.45" />

            {/* Perforation dots for ticket feel */}
            <circle cx="112" cy={y + 12} r="1.5" fill="#ffffff" opacity="0.5" />
            <circle cx="112" cy={y + 22} r="1.5" fill="#ffffff" opacity="0.5" />

            {animate && (
              <>
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0;0 0;160 0;160 0;320 0;320 0"
                  keyTimes={keyTimes}
                  dur={dur}
                  begin={begin}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;1;1;0"
                  keyTimes="0;0.08;0.15;0.75;0.92;1"
                  dur={dur}
                  begin={begin}
                  repeatCount="indefinite"
                />
              </>
            )}
          </g>
        )
      })}
    </svg>
  )
}

/* ---------- 4. Architecture: a lattice growing from the center ---------- */

const ROWS = [5, 4, 3, 2]
const ROW_COLORS = ['#0587CA', '#09A173', '#3DCE39', '#ffffff']
const PEOPLE = [
  { y: 70, color: '#3DCE39' },
  { y: 110, color: '#09A173' },
  { y: 150, color: '#0587CA' },
]

function ArchitectureVisual({ animate, accent }) {
  const bw = 56
  const bh = 26
  const gap = 6
  const cx = 190
  const dur = '7s'
  const blocks = []

  ROWS.forEach((n, r) => {
    const width = n * bw + (n - 1) * gap
    const x0 = cx - width / 2
    const y = 158 - r * 32
    for (let c = 0; c < n; c++) {
      const begin = `${(r * 0.4 + c * 0.08).toFixed(2)}s`
      blocks.push(
        <rect
          key={`${r}-${c}`}
          x={x0 + c * (bw + gap)}
          y={y}
          width={bw}
          height={bh}
          rx="6"
          fill={ROW_COLORS[r]}
          opacity={animate ? '0' : r === 3 ? '0.85' : '1'}
        >
          {animate && (
            <>
              {/* Grow from center scale + rise */}
              <animateTransform
                attributeName="transform"
                type="scale"
                values="0.3 0.3;1 1;1 1;0.3 0.3"
                keyTimes="0;0.12;0.85;1"
                dur={dur}
                begin={begin}
                repeatCount="indefinite"
                additive="sum"
              />
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 -20;0 0;0 0;0 -20"
                keyTimes="0;0.12;0.85;1"
                dur={dur}
                begin={begin}
                repeatCount="indefinite"
                additive="sum"
              />
              <animate
                attributeName="opacity"
                values={`0;${r === 3 ? 0.85 : 1};${r === 3 ? 0.85 : 1};0`}
                keyTimes="0;0.12;0.85;1"
                dur={dur}
                begin={begin}
                repeatCount="indefinite"
              />
            </>
          )}
        </rect>
      )
    }
  })

  // Connection lines between rows (lattice feel)
  return (
    <svg
      viewBox="0 0 480 190"
      className="h-auto w-full"
      role="img"
      aria-label="Blocks growing into a structure while team members join alongside it"
    >
      {/* Ground with reflection glow */}
      <line x1="40" y1="187" x2="340" y2="187" stroke="rgba(255,255,255,0.25)" />
      <line x1="60" y1="189" x2="320" y2="189" stroke={accent || '#3DCE39'} strokeOpacity="0.15" strokeWidth="2" />

      {blocks}

      {/* Talent column with a connecting spine */}
      <line x1="392" y1="30" x2="392" y2="160" stroke="rgba(255,255,255,0.1)" strokeDasharray="2 4" />
      <text x="392" y="22" textAnchor="middle" fontSize="10" letterSpacing="1.4" fill="rgba(255,255,255,0.55)">
        TALENT
      </text>
      {PEOPLE.map((p, i) => (
        <g key={p.y}>
          {/* Expanding ring on join */}
          {animate && (
            <circle cx="392" cy={p.y} r="0" fill="none" stroke={p.color} strokeWidth="1.5" opacity="0">
              <animate
                attributeName="r"
                values="0;18;0"
                dur={dur}
                begin={`${2.4 + i * 0.3}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.6;0;0"
                dur={dur}
                begin={`${2.4 + i * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
          )}
          <circle cx="392" cy={p.y} r={animate ? '0' : '10'} fill={p.color}>
            {animate && (
              <animate
                attributeName="r"
                values="0;13;10;10;0"
                keyTimes="0;0.1;0.14;0.85;1"
                dur={dur}
                begin={`${2.4 + i * 0.3}s`}
                repeatCount="indefinite"
              />
            )}
          </circle>
          {/* Inner highlight */}
          <circle cx="388" cy={p.y - 3} r="3" fill="#ffffff" opacity={animate ? '0' : '0.3'} />
        </g>
      ))}
    </svg>
  )
}

/* ---------- 5. IT Recruitment & Staffing: candidates matching to roles ---------- */

const CANDIDATES = [
  { x: 70, y: 55, color: '#0587CA' },
  { x: 70, y: 100, color: '#09A173' },
  { x: 70, y: 145, color: '#3DCE39' },
]

const ROLES = [
  { x: 410, y: 55, color: '#3DCE39', label: 'Dev' },
  { x: 410, y: 100, color: '#09A173', label: 'Data' },
  { x: 410, y: 145, color: '#0587CA', label: 'Cloud' },
]

function TalentVisual({ animate, accent }) {
  const dur = '5s'

  return (
    <svg
      viewBox="0 0 480 190"
      className="h-auto w-full"
      role="img"
      aria-label="Candidates being matched to open roles through an automated staffing pipeline"
    >
      <defs>
        <linearGradient id="talent-track" x1="0" x2="1">
          <stop offset="0%" stopColor="#0587CA" stopOpacity="0.4" />
          <stop offset="50%" stopColor={accent || '#09A173'} stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3DCE39" stopOpacity="0.4" />
        </linearGradient>
        <radialGradient id="match-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent || '#3DCE39'} stopOpacity="0.5" />
          <stop offset="100%" stopColor={accent || '#3DCE39'} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Column labels */}
      <text x="70" y="22" textAnchor="middle" fontSize="9" letterSpacing="1.4" fill="rgba(255,255,255,0.5)">
        CANDIDATES
      </text>
      <text x="410" y="22" textAnchor="middle" fontSize="9" letterSpacing="1.4" fill="rgba(255,255,255,0.5)">
        OPEN ROLES
      </text>

      {/* Connecting pipeline tracks */}
      {CANDIDATES.map((c, i) => {
        const r = ROLES[i]
        const midX = (c.x + r.x) / 2
        const midY = (c.y + r.y) / 2 + (i % 2 === 0 ? -10 : 10)
        return (
          <path
            key={`track-${i}`}
            d={`M${c.x + 14} ${c.y} Q${midX} ${midY} ${r.x - 30} ${r.y}`}
            stroke="url(#talent-track)"
            strokeWidth="1.5"
            strokeDasharray="3 6"
            fill="none"
            opacity="0.5"
          >
            {animate && (
              <animate
                attributeName="stroke-dashoffset"
                values="0;-18"
                dur="1.5s"
                repeatCount="indefinite"
              />
            )}
          </path>
        )
      })}

      {/* Central matching hub */}
      <circle cx="240" cy="100" r="34" fill="url(#match-glow)">
        {animate && (
          <animate attributeName="r" values="30;38;30" dur="3s" repeatCount="indefinite" />
        )}
      </circle>
      <circle cx="240" cy="100" r="22" fill="#0B1F33" stroke={accent || '#3DCE39'} strokeWidth="1.5" strokeOpacity="0.6">
        {animate && (
          <animate
            attributeName="stroke-opacity"
            values="0.3;0.8;0.3"
            dur="2s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      {/* Hub icon: a person + checkmark */}
      <g transform="translate(240 100)">
        <circle cx="-3" cy="-5" r="4" fill={accent || '#3DCE39'} opacity="0.9" />
        <path d="M-10 6 Q-10 0 -3 0 Q4 0 4 6" fill={accent || '#3DCE39'} opacity="0.9" />
        <path
          d="M6 -6 L9 -3 L14 -9"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity={animate ? '0' : '1'}
        >
          {animate && (
            <animate
              attributeName="opacity"
              values="0;0;1;1;0"
              keyTimes="0;0.4;0.5;0.85;1"
              dur={dur}
              repeatCount="indefinite"
            />
          )}
        </path>
      </g>

      {/* Candidate cards (left) */}
      {CANDIDATES.map((c, i) => (
        <g key={`cand-${i}`}>
          <rect
            x={c.x - 20}
            y={c.y - 16}
            width="40"
            height="32"
            rx="8"
            fill="rgba(255,255,255,0.06)"
            stroke={c.color}
            strokeOpacity="0.5"
          >
            {animate && (
              <animate
                attributeName="stroke-opacity"
                values="0.3;0.9;0.3"
                dur={dur}
                begin={`${i * 0.5}s`}
                repeatCount="indefinite"
              />
            )}
          </rect>
          {/* Mini person glyph */}
          <circle cx={c.x} cy={c.y - 4} r="4" fill={c.color} opacity="0.85" />
          <path d={`M${c.x - 7} ${c.y + 8} Q${c.x - 7} ${c.y + 2} ${c.x} ${c.y + 2} Q${c.x + 7} ${c.y + 2} ${c.x + 7} ${c.y + 8}`} fill={c.color} opacity="0.6" />
        </g>
      ))}

      {/* Role slots (right) — empty until filled */}
      {ROLES.map((r, i) => (
        <g key={`role-${i}`}>
          <rect
            x={r.x - 30}
            y={r.y - 16}
            width="60"
            height="32"
            rx="8"
            fill="rgba(255,255,255,0.04)"
            stroke="rgba(255,255,255,0.2)"
            strokeDasharray="3 3"
          />
          <text
            x={r.x}
            y={r.y + 4}
            textAnchor="middle"
            fontSize="9"
            fill="rgba(255,255,255,0.55)"
          >
            {r.label}
          </text>
          {/* Filled indicator pulse on match */}
          {animate && (
            <rect
              x={r.x - 30}
              y={r.y - 16}
              width="60"
              height="32"
              rx="8"
              fill={r.color}
              opacity="0"
            >
              <animate
                attributeName="opacity"
                values="0;0;0.85;0.85;0"
                keyTimes="0;0.45;0.5;0.75;0.85"
                dur={dur}
                begin={`${i * 0.5}s`}
                repeatCount="indefinite"
              />
            </rect>
          )}
          {animate && (
            <circle cx={r.x} cy={r.y} r="0" fill="none" stroke={r.color} strokeWidth="2" opacity="0">
              <animate
                attributeName="r"
                values="0;0;0;24;0"
                keyTimes="0;0.45;0.5;0.65;0.85"
                dur={dur}
                begin={`${i * 0.5}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;0;0.8;0;0"
                keyTimes="0;0.45;0.5;0.65;0.85"
                dur={dur}
                begin={`${i * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>
          )}
        </g>
      ))}

      {/* Travelling candidate tokens — the "match" pulses */}
      {animate &&
        CANDIDATES.map((c, i) => {
          const r = ROLES[i]
          const midX = (c.x + r.x) / 2
          const midY = (c.y + r.y) / 2 + (i % 2 === 0 ? -10 : 10)
          return (
            <circle key={`token-${i}`} r="5" fill={c.color} opacity="0">
              <animateMotion
                dur={dur}
                begin={`${i * 0.5}s`}
                repeatCount="indefinite"
                path={`M${c.x + 14} ${c.y} Q${midX} ${midY} ${r.x - 30} ${r.y}`}
                keyPoints="0;1;1"
                keyTimes="0;0.45;1"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;1;0;0"
                keyTimes="0;0.05;0.4;0.5;0.55;1"
                dur={dur}
                begin={`${i * 0.5}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values="3;5;5;3;3"
                keyTimes="0;0.1;0.4;0.5;1"
                dur={dur}
                begin={`${i * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>
          )
        })}

      {/* Footer baseline + subtle tick marks */}
      <line x1="20" y1="178" x2="460" y2="178" stroke="rgba(255,255,255,0.12)" />
      {[80, 160, 240, 320, 400].map((x) => (
        <line key={x} x1={x} y1="178" x2={x} y2="183" stroke="rgba(255,255,255,0.2)" />
      ))}
    </svg>
  )
}

/* ---------- content ---------- */

const offerings = [
  {
    title: 'Agentic AI',
    text: 'Intelligent agents and automation built into the workflows your teams already use.',
    accent: '#3DCE39',
    Visual: AgentVisual,
  },
  {
    title: 'Data and analytics',
    text: 'Modern data platforms, reporting and machine learning that turn data into decisions.',
    accent: '#09A173',
    Visual: DataVisual,
  },
  {
    title: 'ServiceNow',
    text: 'Development, configuration and workflow automation for IT and business processes.',
    accent: '#0587CA',
    Visual: WorkflowVisual,
  },
  {
    title: 'Solution Architecture & Design',
    text: 'Secure, scalable solution design, plus the technology talent to build it.',
    accent: '#3DCE39',
    Visual: ArchitectureVisual,
  },
  {
    title: 'IT Staffing & Recruitment',
    text: 'Connecting businesses with skilled technology professionals through flexible staffing and talent solutions.',
    accent: '#0587CA',
    Visual: TalentVisual,
  },
]

/* ---------- component ---------- */

export default function Offerings() {
  const [active, setActive] = useState(0)
  const [inView, setInView] = useState(false)
  const listRef = useRef(null)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  useEffect(() => {
    const el = listRef.current
    if (!el) return
    if (reduceMotion || !('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [reduceMotion])

  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="offerings-title">
      <div className="container-x">
        <div className="mb-10 flex flex-col gap-3 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <h2
            id="offerings-title"
            className="max-w-md text-4xl font-bold tracking-[-0.02em] sm:text-5xl"
          >
            What we serve
          </h2>
         
        </div>

        <ul ref={listRef} className="flex list-none flex-col gap-4 lg:h-[480px] lg:flex-row lg:gap-3">
          {offerings.map((item, i) => {
            const isActive = active === i
            const animate = !reduceMotion && inView && (!isDesktop || isActive)
            const Visual = item.Visual

            return (
              <li
                key={item.title}
                onMouseEnter={() => setActive(i)}
                className={`min-w-0 lg:transition-[flex-grow] lg:duration-700 lg:ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isActive ? 'lg:flex-[3.4]' : 'lg:flex-1'
                }`}
              >
                <article
                  style={{ transitionDelay: `${i * 100}ms` }}
                  className={`relative h-full overflow-hidden rounded-2xl bg-navy shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] transition duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
                    inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  {/* Morphing accent blob behind content for depth */}
                  <span
                    aria-hidden="true"
                    style={{
                      background: `radial-gradient(circle at 30% 20%, ${item.accent}22, transparent 60%)`,
                    }}
                    className={`absolute inset-0 z-0 transition-opacity duration-700 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  {/* Accent bar */}
                  <span
                    aria-hidden="true"
                    style={{ background: item.accent }}
                    className={`absolute left-0 top-0 z-[1] h-[3px] w-full origin-left transition-transform duration-700 ${
                      isActive ? 'scale-x-100' : 'lg:scale-x-0'
                    }`}
                  />

                  {/* Desktop only: tile click / keyboard target */}
                  <button
                    type="button"
                    aria-pressed={isActive}
                    aria-label={`Show ${item.title}`}
                    onClick={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="absolute inset-0 z-10 hidden cursor-pointer lg:block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-white"
                  />

                  {/* Collapsed look with scanning line */}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 hidden transition-opacity duration-300 lg:block ${
                      isActive ? 'opacity-0' : 'opacity-100 delay-300'
                    }`}
                  >
                    {/* Scanning line on hover */}
                    <span
                      aria-hidden="true"
                      style={{ background: item.accent }}
                      className="absolute left-0 top-0 h-full w-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <span
                      style={{ background: item.accent }}
                      className="absolute left-1/2 top-8 h-3 w-3 -translate-x-1/2 transition-transform duration-500"
                    />
                    <span className="absolute bottom-8 left-1/2 -translate-x-1/2 rotate-180 whitespace-nowrap font-display text-lg font-semibold text-white/80 [writing-mode:vertical-rl]">
                      {item.title}
                    </span>
                  </div>

                  {/* Open look */}
                  <div
                    className={`relative flex flex-col p-6 transition-opacity duration-500 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[460px] lg:p-9 xl:w-[560px] ${
                      isActive ? 'lg:opacity-100 lg:delay-300' : 'lg:pointer-events-none lg:opacity-0'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        style={{ background: item.accent }}
                        className="h-3 w-3 shrink-0 transition-transform duration-500 group-hover:rotate-45"
                      />
                      <h3 className="font-display text-2xl font-semibold text-white">{item.title}</h3>
                    </div>

                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70 sm:text-base">
                      {item.text}
                    </p>

                    <div className="mt-6 lg:mt-auto">
                      <Visual animate={animate} accent={item.accent} />
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}