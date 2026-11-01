import './Works.css'

const base = import.meta.env.BASE_URL

/** Real company frames only — distinct object groups, no stock as portfolio. */
const SHOTS = [
  {
    key: 'dining',
    src: `${base}images/proj-dining.jpg`,
    alt: 'Жилой интерьер со сводчатым потолком и трековым светом',
    caption: 'Жилой интерьер',
    w: 1920,
    h: 1996,
    className: 'works__a',
  },
  {
    key: 'bath',
    src: `${base}images/proj-bath.jpg`,
    alt: 'Санузел с парящим контуром подсветки',
    caption: 'Парящий контур',
    w: 720,
    h: 1280,
    className: 'works__b',
  },
  {
    key: 'track',
    src: `${base}images/proj-track.jpg`,
    alt: 'Трек и примыкание потолка в интерьере',
    caption: 'Трек',
    w: 720,
    h: 1280,
    className: 'works__c',
  },
  {
    key: 'corner',
    src: `${base}images/proj-corner.jpg`,
    alt: 'Узел теневого профиля и спота',
    caption: 'Узел',
    w: 720,
    h: 1280,
    className: 'works__d',
  },
] as const

export function Works() {
  return (
    <section className="works" id="works" aria-labelledby="works-title">
      <div className="shell works__layout">
        <div className="works__aside">
          <h2 className="works__title" id="works-title">
            Наши работы
          </h2>
          <p className="works__lead">
            Кадры с объектов в Вологде — разные пространства и узлы, без
            стоковых подмен.
          </p>
          <a className="btn btn--ghost works__cta" href="tel:+79115011202">
            Обсудить проект
          </a>
        </div>

        <div className="works__mosaic">
          {SHOTS.map((shot) => (
            <figure key={shot.key} className={`works__fig ${shot.className}`}>
              <img
                src={shot.src}
                alt={shot.alt}
                width={shot.w}
                height={shot.h}
                loading="lazy"
              />
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
