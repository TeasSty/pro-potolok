import './Directions.css'

const base = import.meta.env.BASE_URL

export function Directions() {
  return (
    <section className="dirs" aria-label="Два направления">
      <div className="dirs__pair">
        <a className="dirs__panel dirs__panel--home" href="tel:+79115011202" id="private">
          <img
            src={`${base}images/dir-private.jpg`}
            alt=""
            width={1800}
            height={1200}
            loading="lazy"
          />
          <div className="dirs__veil dirs__veil--left" aria-hidden="true" />
          <div className="dirs__body">
            <p className="dirs__kicker">Частным клиентам</p>
            <h2 className="dirs__title">Комфорт в вашем доме</h2>
            <p className="dirs__text">
              Подбор системы, замер и расчёт — чтобы свет и плоскость потолка
              работали на ваш интерьер.
            </p>
            <span className="dirs__action">
              Позвонить
              <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path
                  d="M4 9h10M10 5l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </a>

        <a
          className="dirs__panel dirs__panel--pro"
          href="https://vk.ru/propotolok1"
          target="_blank"
          rel="noreferrer"
          id="designers"
        >
          <img
            src={`${base}images/dir-design.jpg`}
            alt=""
            width={1800}
            height={1200}
            loading="lazy"
          />
          <div className="dirs__veil dirs__veil--right" aria-hidden="true" />
          <div className="dirs__body dirs__body--end">
            <p className="dirs__kicker">Дизайнерам и архитекторам</p>
            <h2 className="dirs__title">Техническая поддержка проектов</h2>
            <p className="dirs__text">
              Согласование узлов, световые решения и работа по дизайн-проекту —
              пишите в сообщество VK.
            </p>
            <span className="dirs__action">
              Написать в VK
              <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path
                  d="M4 9h10M10 5l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}
