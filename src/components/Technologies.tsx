import { CeilingDiagram } from './CeilingDiagram'
import { IconArrowCircle } from './IconArrow'
import './Technologies.css'

const FEATURES = [
  {
    title: 'Точные примыкания и аккуратные углы',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="7.25" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.2" />
        <path
          d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Совместимые световые решения',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M9.5 14.5c0 1.2.7 2.2 1.7 2.7V19a.8.8 0 0 0 .8.8h.0a.8.8 0 0 0 .8-.8v-1.8c1-.5 1.7-1.5 1.7-2.7V10a3.5 3.5 0 1 0-7 0v4.5Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path d="M10 21h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Работа с дизайн-проектами',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 5.5h12v13H6z" stroke="currentColor" strokeWidth="1.2" />
        <path
          d="M9 9h6M9 12.5h6M9 16h4"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Технические консультации для архитекторов и дизайнеров',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7.5 16.5 12 5.5l4.5 11"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9.2 13.5h5.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="12" cy="19" r="1.1" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
]

export function Technologies() {
  return (
    <section className="tech" id="about">
      <div className="container tech__grid">
        <div className="tech__copy">
          <p className="section-label section-label--dark">Технологии</p>
          <h2>
            Профессиональный
            <br />
            подход к деталям
          </h2>
          <p className="tech__lead">
            Работаем с проверенными профильными системами и световыми решениями.
            Собираем узлы так, чтобы потолок выглядел цельно и служил долго.
          </p>
          <a className="text-link text-link--dark" href="#solutions">
            <span>Подробнее о системах</span>
            <IconArrowCircle />
          </a>
        </div>

        <div className="tech__diagram">
          <CeilingDiagram />
        </div>

        <ul className="tech__features">
          {FEATURES.map((item) => (
            <li key={item.title}>
              <span className="tech__icon">{item.icon}</span>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
