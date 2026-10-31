import { IconArrowCircle } from './IconArrow'
import './Solutions.css'

export function Solutions() {
  return (
    <section className="solutions" id="solutions">
      <div className="container">
        <div className="solutions__head">
          <div className="solutions__intro">
            <p className="section-label section-label--dark">Решения</p>
            <h2 className="solutions__title">
              Современные
              <br />
              потолочные системы
            </h2>
          </div>
          <div className="solutions__aside">
            <p>
              От классических натяжных потолков до сложных профильных и световых
              решений. Подбираем оптимальное решение под ваш интерьер, задачи и
              бюджет.
            </p>
            <a className="text-link text-link--dark" href="#solutions">
              <span>Все решения</span>
              <IconArrowCircle />
            </a>
          </div>
        </div>

        <div className="solutions__stage">
          <article className="sol-feat">
            <div className="sol-feat__media">
              <img
                src="./images/sol-shadow.jpg"
                alt="Теневой профиль и точечный свет"
              />
            </div>
            <div className="sol-feat__body">
              <span className="sol-n">01</span>
              <div>
                <h3>Теневые системы</h3>
                <p>Чёткая геометрия и аккуратный стык с потолком и стеной</p>
              </div>
              <IconArrowCircle />
            </div>
          </article>

          <div className="solutions__rail">
            <article className="sol-rail">
              <div className="sol-rail__media">
                <img
                  src="./images/sol-track.jpg"
                  alt="Трековый светильник на натяжном потолке"
                />
              </div>
              <div className="sol-rail__body">
                <span className="sol-n">02</span>
                <h3>Световые линии</h3>
                <p>Встроенное освещение в единой плоскости потолка</p>
              </div>
            </article>

            <article className="sol-rail sol-rail--reverse">
              <div className="sol-rail__media sol-rail__media--wide">
                <img
                  src="./images/sol-float.jpg"
                  alt="Парящий контур подсветки"
                />
              </div>
              <div className="sol-rail__body">
                <span className="sol-n">03</span>
                <h3>Парящие потолки</h3>
                <p>Мягкий свет и ощущение лёгкости пространства</p>
              </div>
            </article>
          </div>
        </div>

        <article className="sol-band">
          <div className="sol-band__media">
            <img
              src="./images/sol-niche.jpg"
              alt="Скрытый карниз и периметр потолка"
            />
          </div>
          <div className="sol-band__body">
            <span className="sol-n">04</span>
            <h3>Скрытые ниши</h3>
            <p>Карнизы, вентиляция и другие элементы в единой системе</p>
            <IconArrowCircle />
          </div>
        </article>
      </div>
    </section>
  )
}
