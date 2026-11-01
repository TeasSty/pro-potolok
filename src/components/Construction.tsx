import type { CSSProperties } from 'react'
import './Construction.css'

const base = import.meta.env.BASE_URL

const CALLOUTS = [
  {
    id: 'profile',
    label: 'Профиль',
    // Anchor on aluminum channel; label sits above-right
    ax: 42,
    ay: 48,
    lx: 72,
    ly: 14,
  },
  {
    id: 'led',
    label: 'Светодиодная лента',
    ax: 50,
    ay: 40,
    lx: 78,
    ly: 34,
  },
  {
    id: 'canvas',
    label: 'Натяжное полотно',
    ax: 68,
    ay: 52,
    lx: 82,
    ly: 68,
  },
  {
    id: 'gap',
    label: 'Теневой зазор',
    ax: 34,
    ay: 52,
    lx: 8,
    ly: 78,
  },
] as const

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
    <figure className="construct__viz">
      <div className="construct__frame">
        <img
          className="construct__img"
          src={`${base}images/construct-node-3d.jpg`}
          alt="Трёхмерный разрез узла натяжного потолка: алюминиевый профиль, светодиодная лента, натяжное полотно и теневой зазор"
          width={1600}
          height={900}
          loading="lazy"
          decoding="async"
        />

        <svg
          className="construct__lines"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {CALLOUTS.map((c) => (
            <g key={c.id}>
              <line
                className="construct__line"
                x1={c.ax}
                y1={c.ay}
                x2={c.lx}
                y2={c.ly}
              />
              <circle className="construct__anchor" cx={c.ax} cy={c.ay} r="0.55" />
            </g>
          ))}
        </svg>

        <ul className="construct__callouts" aria-label="Элементы узла">
          {CALLOUTS.map((c) => (
            <li
              key={c.id}
              className={`construct__callout construct__callout--${c.id}`}
              style={
                {
                  '--lx': `${c.lx}%`,
                  '--ly': `${c.ly}%`,
                } as CSSProperties
              }
            >
              <span className="construct__label">{c.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <figcaption className="construct__note">
        Концептуальная визуализация типичного узла — не чертёж конкретной
        системы.
      </figcaption>
    </figure>
  )
}
