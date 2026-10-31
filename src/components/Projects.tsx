import { IconArrowCircle } from './IconArrow'
import './Projects.css'

const MOSAIC = [
  {
    className: 'is-large',
    img: './images/proj-wide.jpg',
    title: 'Частный интерьер',
    tags: ['Сложный рельеф', 'Трековый свет'],
    objectPos: 'center 28%',
  },
  {
    className: 'is-tall',
    img: './images/proj-up.jpg',
    title: 'Вид снизу',
    objectPos: 'center',
  },
  {
    className: 'is-small',
    img: './images/sol-float.jpg',
    title: 'Парящий контур',
    objectPos: 'center 40%',
  },
  {
    className: 'is-small is-detail',
    img: './images/proj-corner.jpg',
    title: 'Узел примыкания',
    objectPos: 'center',
  },
]

export function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container projects__top">
        <div className="projects__intro">
          <p className="section-label">Реализованные проекты</p>
          <h2 className="projects__title">
            Интерьеры,
            <br />
            в которых потолок
            <br />
            имеет значение
          </h2>
          <a className="text-link projects__all" href="#projects">
            <span>Все проекты</span>
            <IconArrowCircle />
          </a>
        </div>

        <div className="projects__mosaic">
          {MOSAIC.map((item) => (
            <article className={`project-tile ${item.className}`} key={item.title}>
              <img
                src={item.img}
                alt={item.title}
                style={{ objectPosition: item.objectPos }}
              />
              {item.tags ? (
                <div className="project-tile__meta">
                  <h3>{item.title}</h3>
                  <p>{item.tags.join(' · ')}</p>
                </div>
              ) : null}
              <button
                className="project-tile__nav"
                type="button"
                aria-label="Смотреть проект"
              >
                <IconArrowCircle />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
