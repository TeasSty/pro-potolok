import { IconArrowCircle } from './IconArrow'
import './Audience.css'

export function Audience() {
  return (
    <section className="audience" id="designers">
      <div className="audience__grid">
        <article className="audience-card audience-card--private" id="request">
          <div className="audience-card__visual">
            <img src="./images/cta-private.jpg" alt="" aria-hidden="true" />
            <img
              className="audience-card__inset"
              src="./images/proj-corner.jpg"
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className="audience-card__content">
            <p className="audience-card__label">Частным клиентам</p>
            <h2>
              Уютный дом
              <br />
              с продуманным светом
            </h2>
            <p>
              Поможем подобрать решение, сделаем замер и рассчитаем стоимость.
              Реализуем проект под ключ.
            </p>
            <a className="btn btn--pill btn--light" href="tel:+79115011202">
              <span>Рассчитать стоимость</span>
              <IconArrowCircle />
            </a>
          </div>
        </article>

        <article className="audience-card audience-card--design" id="contacts">
          <div className="audience-card__content audience-card__content--dark">
            <p className="audience-card__label">Дизайнерам и архитекторам</p>
            <h2>
              Надёжный партнёр
              <br />
              для ваших проектов
            </h2>
            <p>
              Предоставляем технические решения, работаем по дизайн-проектам,
              помогаем с подбором систем и нестандартными узлами.
            </p>
            <a
              className="btn btn--pill btn--light"
              href="https://vk.ru/propotolok1"
              target="_blank"
              rel="noreferrer"
            >
              <span>Сотрудничество</span>
              <IconArrowCircle />
            </a>
          </div>
          <div className="audience-card__visual audience-card__visual--design">
            <img src="./images/cta-designers.jpg" alt="" aria-hidden="true" />
          </div>
        </article>
      </div>
    </section>
  )
}
