import './Construction.css'

export function Construction() {
  return (
    <section className="construct" id="construct" aria-labelledby="construct-title">
      <div className="shell construct__intro">
        <h2 className="construct__title" id="construct-title">
          Продуманная система
        </h2>
        <p className="construct__lead">
          Профиль, свет и полотно работают как один узел: точное примыкание,
          контролируемый зазор и чистая линия света без лишнего декора.
        </p>
      </div>

      <div className="shell construct__stage">
        <CeilingDiagram />
      </div>

      <ul className="shell construct__legend">
        <li>Профиль задаёт геометрию</li>
        <li>Лента формирует линию света</li>
        <li>Полотно держит плоскость</li>
        <li>Теневой зазор — аккуратное примыкание</li>
      </ul>
    </section>
  )
}

function CeilingDiagram() {
  return (
    <svg
      className="construct__svg"
      viewBox="0 0 960 420"
      role="img"
      aria-labelledby="diagram-title diagram-desc"
    >
      <title id="diagram-title">Схема узла натяжного потолка</title>
      <desc id="diagram-desc">
        Изометрический разрез: профиль, светодиодная лента, натяжное полотно и
        теневой зазор.
      </desc>

      <defs>
        <linearGradient id="alum" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9aa3a0" />
          <stop offset="45%" stopColor="#c5ccc8" />
          <stop offset="100%" stopColor="#7f8884" />
        </linearGradient>
        <linearGradient id="alumSide" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6d7672" />
          <stop offset="100%" stopColor="#4a5250" />
        </linearGradient>
        <linearGradient id="canvas" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7f6f2" />
          <stop offset="100%" stopColor="#ddd9d0" />
        </linearGradient>
        <linearGradient id="ledGlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fff8e8" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#ffe9b0" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#fff8e8" stopOpacity="0.15" />
        </linearGradient>
        <filter id="soft" x="-20%" y="-40%" width="140%" height="180%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* Floor / wall context */}
      <path d="M70 330 L430 250 L890 330 L530 410 Z" fill="#d8d6cf" />
      <path d="M70 330 L70 360 L530 440 L530 410 Z" fill="#c4c2ba" />
      <path d="M530 410 L530 440 L890 360 L890 330 Z" fill="#b8b6ae" />

      {/* Wall up */}
      <path d="M70 120 L70 330 L430 250 L430 40 Z" fill="#e3e1da" />
      <path d="M430 40 L430 250 L890 330 L890 120 Z" fill="#eceae3" />

      {/* Ceiling plane */}
      <path d="M120 95 L430 40 L820 115 L510 170 Z" fill="#f2f0ea" />

      {/* Profile body — isometric extrusion */}
      <g>
        {/* Shadow under profile */}
        <path
          d="M250 195 L470 155 L560 175 L340 215 Z"
          fill="rgba(23,26,25,0.12)"
        />

        {/* Main aluminum channel */}
        <path
          d="M260 165 L480 125 L520 145 L300 185 Z"
          fill="url(#alum)"
        />
        <path
          d="M260 165 L300 185 L300 210 L260 190 Z"
          fill="url(#alumSide)"
        />
        <path
          d="M300 185 L520 145 L520 170 L300 210 Z"
          fill="#8e9793"
        />

        {/* Inner ledge */}
        <path
          d="M285 172 L475 138 L490 148 L300 182 Z"
          fill="#dfe4e1"
        />

        {/* Harpoon / canvas lock pocket */}
        <path
          d="M295 188 L405 168 L415 178 L305 198 Z"
          fill="#5f6865"
        />
        <path
          d="M305 198 L415 178 L415 188 L305 208 Z"
          fill="#3f4745"
        />
      </g>

      {/* LED strip */}
      <g>
        <rect
          x="318"
          y="158"
          width="150"
          height="8"
          rx="2"
          transform="skewX(-28) translate(72 -48)"
          fill="#1a1d1c"
        />
        <path
          d="M330 155 L470 130 L475 136 L335 161 Z"
          fill="#f4d27a"
        />
        <ellipse
          cx="400"
          cy="175"
          rx="95"
          ry="28"
          fill="url(#ledGlow)"
          filter="url(#soft)"
          opacity="0.85"
        />
      </g>

      {/* Stretch canvas */}
      <path
        d="M305 205 L520 165 L780 210 L560 255 Z"
        fill="url(#canvas)"
        opacity="0.95"
      />
      <path
        d="M305 205 L305 218 L560 268 L560 255 Z"
        fill="#c9c5bc"
      />

      {/* Shadow gap at wall */}
      <path
        d="M248 178 L268 172 L272 188 L250 195 Z"
        fill="#171a19"
      />
      <path
        d="M250 195 L272 188 L300 210 L280 218 Z"
        fill="#0e1010"
        opacity="0.85"
      />

      {/* Callout lines + labels (right) */}
      <g className="construct__callouts" fill="#171a19" stroke="#171a19">
        {/* Profile */}
        <path d="M500 135 L640 78" fill="none" strokeWidth="1" />
        <circle cx="500" cy="135" r="2.5" />
        <text x="652" y="74" fontSize="14" fontFamily="Manrope, sans-serif" fontWeight="600">
          Профиль
        </text>

        {/* LED */}
        <path d="M420 148 L640 148" fill="none" strokeWidth="1" />
        <circle cx="420" cy="148" r="2.5" />
        <text x="652" y="152" fontSize="14" fontFamily="Manrope, sans-serif" fontWeight="600">
          Светодиодная лента
        </text>

        {/* Canvas */}
        <path d="M560 210 L640 230" fill="none" strokeWidth="1" />
        <circle cx="560" cy="210" r="2.5" />
        <text x="652" y="234" fontSize="14" fontFamily="Manrope, sans-serif" fontWeight="600">
          Натяжное полотно
        </text>

        {/* Shadow gap */}
        <path d="M262 190 L180 250 L640 290" fill="none" strokeWidth="1" />
        <circle cx="262" cy="190" r="2.5" />
        <text x="652" y="294" fontSize="14" fontFamily="Manrope, sans-serif" fontWeight="600">
          Теневой зазор
        </text>
      </g>
    </svg>
  )
}
