import './Contact.css'

export function Contact() {
  return (
    <footer className="contact" id="order">
      <div className="shell contact__inner">
        <p className="contact__place">Вологда · с 2009 · замер бесплатно</p>

        <a className="contact__phone" href="tel:+79115011202">
          +7 (911) 501-12-02
        </a>

        <p className="contact__note">
          Натяжные потолки и профильные системы.
          <br />
          Позвоните — обсудим ваш объект.
        </p>

        <div className="contact__links">
          <a className="cta cta--line" href="tel:+79115011202">
            Позвонить
          </a>
          <a
            className="cta cta--line"
            href="https://vk.ru/propotolok1"
            target="_blank"
            rel="noreferrer"
          >
            VK
          </a>
        </div>
      </div>
    </footer>
  )
}
