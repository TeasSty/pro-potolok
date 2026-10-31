import { IconArrow } from './IconArrow'
import './Contact.css'

export function Contact() {
  return (
    <footer className="contact" id="order">
      <div className="shell contact__inner">
        <p className="contact__eyebrow">Заказ</p>
        <h2 className="contact__title">
          Замер бесплатно.
          <br />
          Обсудим ваш потолок.
        </h2>
        <p className="contact__lead">
          Вологда · натяжные потолки и профильные системы. Работаем с&nbsp;2009&nbsp;года.
        </p>

        <a className="contact__phone" href="tel:+79115011202">
          +7 (911) 501-12-02
        </a>

        <div className="contact__actions">
          <a className="cta cta--pill" href="tel:+79115011202">
            Позвонить
            <span className="mark">
              <IconArrow />
            </span>
          </a>
          <a
            className="cta cta--ghost contact__vk"
            href="https://vk.ru/propotolok1"
            target="_blank"
            rel="noreferrer"
          >
            Сообщество VK
          </a>
        </div>
      </div>
    </footer>
  )
}
