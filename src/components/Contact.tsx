import './Contact.css'

export function Contact() {
  return (
    <footer className="contact" id="order">
      <div className="shell contact__inner">
        <p className="contact__brand">
          PRO<span>потолок</span>
        </p>

        <a className="contact__phone" href="tel:+79115011202">
          +7 (911) 501-12-02
        </a>

        <p className="contact__place">Вологда · с 2009 · замер бесплатно</p>

        <p className="contact__note">
          Натяжные потолки и профильные системы.
        </p>

        <a
          className="contact__vk"
          href="https://vk.ru/propotolok1"
          target="_blank"
          rel="noreferrer"
        >
          vk.ru/propotolok1
        </a>
      </div>
    </footer>
  )
}
