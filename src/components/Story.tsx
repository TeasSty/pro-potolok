import { IconArrow } from './IconArrow'
import './Story.css'

const DETAIL = `${import.meta.env.BASE_URL}images/vk/vk_07.jpg`
const FLOAT = `${import.meta.env.BASE_URL}images/sol-float.jpg`

const SYSTEMS = [
  {
    n: '01',
    title: 'Теневые примыкания',
    text: 'Аккуратный зазор у стены без плинтуса. Потолок читается как плоскость, а не как «плёнка».',
  },
  {
    n: '02',
    title: 'Световые линии',
    text: 'Треки и контурная подсветка в профиле. Свет становится частью архитектуры комнаты.',
  },
  {
    n: '03',
    title: 'Парящие контуры',
    text: 'Периметр с мягким свечением. Особенно уместно в санузлах и камерных зонах.',
  },
  {
    n: '04',
    title: 'Сложные плоскости',
    text: 'Своды, скаты, обход окон и узлов. Полотно и профиль собирают геометрию без лишнего декора.',
  },
] as const

export function Story() {
  return (
    <section className="story" id="systems" aria-labelledby="story-title">
      <div className="shell story__head">
        <p className="story__eyebrow">Системы</p>
        <div className="story__head-row">
          <h2 className="story__title" id="story-title">
            Профиль держит свет.
            <br />
            Полотно — плоскость.
          </h2>
          <p className="story__lead">
            Натяжные потолки и профильные системы: тень, трек, парящий контур,
            ниши. Результат видно на объекте.
          </p>
        </div>
        <hr className="light-cut story__cut" />
      </div>

      <div className="shell story__grid">
        <ol className="story__list">
          {SYSTEMS.map((item) => (
            <li key={item.n} className="story__item">
              <span className="story__n">{item.n}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="story__visuals">
          <figure className="story__shot story__shot--main">
            <img
              src={DETAIL}
              alt="Узел профиля и примыкания в живом интерьере"
              width={720}
              height={1280}
              loading="lazy"
            />
          </figure>
          <figure className="story__shot story__shot--side">
            <img
              src={FLOAT}
              alt="Парящий световой контур"
              width={720}
              height={960}
              loading="lazy"
            />
          </figure>
        </div>
      </div>

      <div className="shell story__cta">
        <p>Нужна система под ваш объект — позвоните, приедем на замер.</p>
        <a className="cta cta--pill" href="tel:+79115011202">
          +7 (911) 501-12-02
          <span className="mark">
            <IconArrow />
          </span>
        </a>
      </div>
    </section>
  )
}
