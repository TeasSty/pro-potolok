import './Systems.css'

const base = import.meta.env.BASE_URL

const ITEMS = [
  {
    id: '01',
    title: 'Теневой профиль',
    text: 'Чистая геометрия и аккуратное примыкание',
    src: `${base}images/sys-shadow.jpg`,
    w: 1600,
    h: 1200,
  },
  {
    id: '02',
    title: 'Световые линии',
    text: 'Свет как часть архитектуры',
    src: `${base}images/sys-lines.jpg`,
    w: 1600,
    h: 1200,
  },
  {
    id: '03',
    title: 'Парящий потолок',
    text: 'Визуальная лёгкость и объём',
    src: `${base}images/sys-float.jpg`,
    w: 1600,
    h: 1200,
  },
  {
    id: '04',
    title: 'Ниши и узлы',
    text: 'Интеграция света, штор и оборудования',
    src: `${base}images/sys-niche.jpg`,
    w: 1600,
    h: 1200,
  },
] as const

export function Systems() {
  return (
    <section className="systems" id="systems" aria-labelledby="systems-title">
      <div className="shell systems__intro">
        <h2 className="systems__title" id="systems-title">
          Системы, которые меняют пространство.
        </h2>
        <p className="systems__lead">
          Четыре направления профильных решений — от теневого зазора до ниш
          под свет и карнизы. Подбираем узел под задачу интерьера.
        </p>
      </div>

      <div className="shell systems__grid">
        {ITEMS.map((item, index) => (
          <article
            key={item.id}
            className={`systems__card systems__card--${index + 1}`}
          >
            <div className="systems__shot">
              <img
                src={item.src}
                alt=""
                width={item.w}
                height={item.h}
                loading="lazy"
              />
            </div>
            <div className="systems__meta">
              <span className="systems__num">{item.id}</span>
              <div className="systems__copy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <a
                className="systems__go"
                href="tel:+79115011202"
                aria-label={`${item.title}: обсудить проект`}
              >
                <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M4 9h10M10 5l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="shell systems__note">
        Фото в блоке — референсы атмосферы света и архитектуры, не объекты
        компании.
      </p>
    </section>
  )
}
