import { IconArrowCircle } from './IconArrow'
import './Hero.css'

const STATS = [
  'С 2009 года\nна рынке',
  'Более 3000\nреализованных объектов',
  '5,0 в 2ГИС\nболее 300 отзывов',
  'Световые линии\nи теневые системы',
]

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        <img src="./images/hero-bg.jpg" alt="" />
        <div className="hero__scrim" />
      </div>

      <div className="container hero__layout">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-line" aria-hidden="true" />
            Натяжные потолки в Вологде
          </p>

          <h1 className="hero__title">
            Потолок —
            <br />
            <span className="hero__title-line">часть архитектуры</span>
            <br />
            интерьера
          </h1>

          <p className="hero__lead">
            Создаём современные потолочные решения, в которых свет, геометрия
            и детали становятся единым пространством.
          </p>

          <div className="hero__cta">
            <a className="btn btn--pill btn--light btn--hero" href="#request">
              <span>Рассчитать стоимость</span>
              <IconArrowCircle />
            </a>
            <a className="hero__link" href="#projects">
              Посмотреть проекты
            </a>
          </div>
        </div>

        <ol className="hero__slides" aria-label="Слайды">
          <li className="is-active">01.</li>
          <li>02.</li>
          <li>03.</li>
        </ol>
      </div>

      <div className="hero__stats">
        <div className="container hero__stats-row">
          {STATS.map((item) => (
            <p key={item} className="hero__stat">
              {item.split('\n').map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
