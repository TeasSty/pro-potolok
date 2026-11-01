import './Stage.css'

const HERO = `${import.meta.env.BASE_URL}images/sol-shadow.jpg`

export function Stage() {
  return (
    <section className="stage" id="top" aria-label="PRO Потолок">
      <div className="stage__media" aria-hidden="true">
        <img
          className="reveal"
          src={HERO}
          alt=""
          width={720}
          height={1280}
          fetchPriority="high"
        />
        <div className="stage__scrim" />
      </div>

      <div className="shell stage__rail">
        <div className="stage__copy">
          <p className="stage__brand rise">
            PRO<span>потолок</span>
          </p>
          <h1 className="stage__title rise rise-d1">Свет собирает пространство</h1>
          <p className="stage__lead rise rise-d2">
            Натяжные потолки и профильные системы · Вологда · с&nbsp;2009
          </p>
          <div className="stage__cta rise rise-d3">
            <a className="cta cta--line" href="tel:+79115011202">
              +7 (911) 501-12-02
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
