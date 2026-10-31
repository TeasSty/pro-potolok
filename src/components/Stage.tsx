import { IconArrow } from './IconArrow'
import './Stage.css'

const HERO = `${import.meta.env.BASE_URL}images/vk/vk_08.jpg`

export function Stage() {
  return (
    <section className="stage" id="top" aria-label="PRO Потолок">
      <div className="stage__media" aria-hidden="true">
        <img
          src={HERO}
          alt=""
          width={1920}
          height={2560}
          fetchPriority="high"
        />
        <div className="stage__scrim" />
      </div>

      <div className="shell stage__rail">
        <div className="stage__copy">
          <p className="stage__brand rise">PRO<span>потолок</span></p>
          <h1 className="stage__title rise rise-d1">
            Свет, который
            <br />
            собирает пространство
          </h1>
          <p className="stage__lead rise rise-d2">
            Натяжные потолки и профильные системы · Вологда · с&nbsp;2009
          </p>
          <div className="stage__cta rise rise-d3">
            <a className="cta cta--pill cta--teal" href="tel:+79115011202">
              Обсудить проект
              <span className="mark">
                <IconArrow />
              </span>
            </a>
            <a className="cta cta--ghost" href="#work">
              Смотреть работы
            </a>
          </div>
        </div>
      </div>

      <div className="stage__line" aria-hidden="true" />
    </section>
  )
}
