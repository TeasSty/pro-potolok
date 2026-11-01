import './Hero.css'

const HERO = `${import.meta.env.BASE_URL}images/hero-interior.jpg`

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="PRO Потолок">
      <div className="hero__media" aria-hidden="true">
        <img
          className="fade-frame"
          src={HERO}
          alt=""
          width={2400}
          height={1600}
          fetchPriority="high"
        />
        <div className="hero__scrim" />
      </div>

      <div className="shell hero__content">
        <p className="hero__eyebrow rise">Натяжные потолки · Вологда</p>
        <h1 className="hero__title rise rise-d1">
          Потолок — это больше, чем{' '}
          <span className="hero__accent">поверхность.</span>
        </h1>
        <p className="hero__lead rise rise-d2">
          Проектируем свет и геометрию потолка так, чтобы пространство
          читалось цельно — от теневого примыкания до световых линий.
        </p>
        <div className="hero__cta rise rise-d3">
          <a className="btn btn--solid" href="tel:+79115011202">
            Обсудить проект
          </a>
          <a className="btn btn--ghost" href="#works">
            <span className="btn__icon" aria-hidden="true">
              <svg viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="7.2" stroke="currentColor" strokeWidth="1.4" />
                <path d="M7.6 6.4v5.2L12.2 9 7.6 6.4Z" fill="currentColor" />
              </svg>
            </span>
            Смотреть интерьеры
          </a>
        </div>
      </div>
    </section>
  )
}
