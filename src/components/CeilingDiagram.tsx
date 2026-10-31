import './CeilingDiagram.css'

export function CeilingDiagram() {
  return (
    <div
      className="ceiling-diagram"
      role="img"
      aria-label="Схема узла натяжного потолка: профиль, светодиодная лента, натяжное полотно, теневой зазор"
    >
      <svg
        className="ceiling-diagram__art"
        viewBox="0 0 640 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8e4da" />
            <stop offset="100%" stopColor="#d5d0c4" />
          </linearGradient>
          <linearGradient id="metalGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c8c8c8" />
            <stop offset="45%" stopColor="#8f8f8f" />
            <stop offset="100%" stopColor="#6d6d6d" />
          </linearGradient>
          <linearGradient id="ledGlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fff6d8" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#ffe9a8" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#fff6d8" stopOpacity="0.15" />
          </linearGradient>
          <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect x="120" y="48" width="400" height="300" fill="url(#wallGrad)" rx="2" />
        <path d="M120 48h400v78H120z" fill="#f7f5ef" />
        <path d="M120 126h400" stroke="#cfc9bb" strokeWidth="1" />

        <path
          d="M168 148h304v8.5H168z"
          fill="#fbfaf7"
          stroke="#d8d3c8"
          strokeWidth="1"
        />
        <path d="M168 156.5h248" stroke="#ece8df" strokeWidth="1" />

        <g transform="translate(168 118)">
          <path
            d="M0 30h54v-8h12v-14h18v22h-8v18H0V30z"
            fill="url(#metalGrad)"
            stroke="#5a5a5a"
            strokeWidth="1.2"
          />
          <path d="M10 30h28v10H10z" fill="#4a4a4a" />
          <path d="M14 22h20v6H14z" fill="#3a3a3a" />
          <path d="M58 22h14v10H58z" fill="#2f2f2f" />
          <path d="M60 24h10v2H60z" fill="#111" />
        </g>

        <g filter="url(#softGlow)">
          <rect x="182" y="132" width="36" height="5" rx="1" fill="#2a2a2a" />
          <rect x="184" y="133" width="32" height="3" rx="0.8" fill="#ffd978" />
          <ellipse cx="200" cy="148" rx="34" ry="10" fill="url(#ledGlow)" />
        </g>

        <path
          d="M236 148c8-1 14-8 18-18"
          stroke="#fbfaf7"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M250 128c2-1 4 0 5 2l-3 8-8-2 6-8z"
          fill="#e8e4da"
          stroke="#bdb7aa"
          strokeWidth="1"
        />

        <path d="M168 156.5h18v22H168z" fill="#1a1a1a" />
        <path d="M168 156.5h18" stroke="#0d0d0d" strokeWidth="1" />
        <path
          d="M186 156.5v22"
          stroke="#3a3a3a"
          strokeWidth="1"
          strokeDasharray="2 3"
        />

        <path d="M120 178h66v170H120z" fill="#d9d3c6" />
        <path d="M186 178v170" stroke="#c2bbae" strokeWidth="1" />
        <path
          d="M254 148h214v8.5H254z"
          fill="#fbfaf7"
          stroke="#d8d3c8"
          strokeWidth="1"
        />

        <circle cx="210" cy="130" r="4" fill="#161616" />
        <circle cx="210" cy="130" r="7" stroke="#161616" strokeOpacity="0.25" />
        <circle cx="200" cy="134.5" r="4" fill="#161616" />
        <circle cx="200" cy="134.5" r="7" stroke="#161616" strokeOpacity="0.25" />
        <circle cx="380" cy="152" r="4" fill="#161616" />
        <circle cx="380" cy="152" r="7" stroke="#161616" strokeOpacity="0.25" />
        <circle cx="177" cy="168" r="4" fill="#161616" />
        <circle cx="177" cy="168" r="7" stroke="#161616" strokeOpacity="0.25" />

        <path
          d="M210 130L120 98"
          stroke="#7a756c"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <circle cx="120" cy="98" r="2.5" fill="#7a756c" />
        <path
          d="M200 134.5L110 170"
          stroke="#7a756c"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <circle cx="110" cy="170" r="2.5" fill="#7a756c" />
        <path
          d="M380 152L530 168"
          stroke="#7a756c"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <circle cx="530" cy="168" r="2.5" fill="#7a756c" />
        <path
          d="M177 168L520 250"
          stroke="#7a756c"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <circle cx="520" cy="250" r="2.5" fill="#7a756c" />
      </svg>

      <ul className="ceiling-diagram__labels">
        <li className="is-profile">Профиль</li>
        <li className="is-led">Светодиодная лента</li>
        <li className="is-fabric">Натяжное полотно</li>
        <li className="is-gap">Теневой зазор</li>
      </ul>
    </div>
  )
}
