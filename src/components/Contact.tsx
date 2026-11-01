import './Contact.css'

const DETAIL = `${import.meta.env.BASE_URL}images/final-detail.jpg`

export function Contact() {
  return (
    <footer className="final" id="contact">
      <div className="final__glow" aria-hidden="true">
        <img src={DETAIL} alt="" width={1600} height={1200} loading="lazy" />
      </div>

      <div className="shell final__grid">
        <h2 className="final__title">Давайте обсудим ваше пространство.</h2>

        <div className="final__side">
          <a className="final__phone" href="tel:+79115011202">
            +7 (911) 501-12-02
          </a>
          <p className="final__place">Вологда · Работаем по городу и области</p>
          <p className="final__meta">С 2009 · замер бесплатно</p>

          <div className="final__actions">
            <a className="btn btn--solid" href="tel:+79115011202">
              Позвонить сейчас
            </a>
            <a
              className="final__vk"
              href="https://vk.ru/propotolok1"
              target="_blank"
              rel="noreferrer"
              aria-label="Сообщество ВКонтакте"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12.77 16.8h.86s.26-.03.39-.17c.12-.14.12-.4.12-.4s-.02-1.22.55-1.4c.56-.18 1.28 1.18 2.04 1.7.58.4 1.02.31 1.02.31l2.05-.03s1.07-.07.56-.9c-.04-.07-.3-.63-1.54-1.78-1.3-1.2-1.12-.1.44-3.06.95-1.8 1.33-2.9 1.21-3.37-.11-.45-.84-.33-.84-.33l-2.3.01s-.17-.02-.3.05c-.12.07-.2.24-.2.24s-.36.96-.84 1.78c-1.01 1.73-1.42 1.82-1.58 1.71-.39-.25-.29-.99-.29-1.52 0-1.65.25-2.34-.49-2.52-.24-.06-.42-.1-.1-.1-1.04-.01-1.72.01-2.16.2-.34.15-.6.47-.44.49.2.02.65.12.89.47.31.45.3 1.46.3 1.46s.18 2.35-.41 2.64c-.41.2-.97-.21-2.18-1.75-.62-.79-1.08-1.66-1.08-1.66s-.09-.22-.25-.34c-.19-.14-.46-.19-.46-.19l-2.19.01s-.33.01-.45.15c-.11.13-.01.39-.01.39s1.7 3.98 3.62 5.99c1.76 1.84 3.76 1.72 3.76 1.72Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
