import './Work.css'

const base = import.meta.env.BASE_URL

const FRAMES = {
  dining: `${base}images/vk/vk_02.jpg`,
  bath: `${base}images/vk/vk_04.jpg`,
  shadow: `${base}images/sol-shadow.jpg`,
  track: `${base}images/vk/vk_03.jpg`,
  vault: `${base}images/proj-vault.jpg`,
  corner: `${base}images/vk/vk_07.jpg`,
  up: `${base}images/vk/vk_06.jpg`,
} as const

export function Work() {
  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="shell work__intro">
        <div className="work__intro-left">
          <p className="work__eyebrow">Работы</p>
          <h2 className="work__title" id="work-title">
            Реальные объекты.
            <br />
            Честный свет.
          </h2>
        </div>
        <p className="work__lead">
          Своды, парящие контуры, теневые примыкания и трековые линии с объектов
          в Вологде.
        </p>
      </div>

      <div className="shell work__essay">
        <figure className="work__hero">
          <img
            src={FRAMES.dining}
            alt="Жилой интерьер со сводчатым натяжным потолком и трековым светом"
            width={1920}
            height={2560}
            loading="lazy"
          />
          <figcaption>
            <span>01</span>
            Свод · жилой интерьер
          </figcaption>
        </figure>

        <div className="work__pair">
          <figure className="work__vert">
            <img
              src={FRAMES.bath}
              alt="Санузел с парящим контуром подсветки по периметру"
              width={720}
              height={1280}
              loading="lazy"
            />
            <figcaption>
              <span>02</span>
              Парящий контур
            </figcaption>
          </figure>

          <figure className="work__detail work__detail--offset">
            <img
              src={FRAMES.shadow}
              alt="Теневой зазор и спот в углу потолка"
              width={720}
              height={1280}
              loading="lazy"
            />
            <figcaption>
              <span>03</span>
              Теневой зазор
            </figcaption>
          </figure>
        </div>

        <div className="work__band">
          <figure className="work__wide">
            <img
              src={FRAMES.vault}
              alt="Геометрия свода с треком и круглым окном"
              width={1920}
              height={1080}
              loading="lazy"
            />
            <figcaption>
              <span>04</span>
              Геометрия свода
            </figcaption>
          </figure>
        </div>

        <div className="work__trio">
          <figure>
            <img
              src={FRAMES.track}
              alt="Магнитный трек у текстурной стены"
              width={720}
              height={1280}
              loading="lazy"
            />
            <figcaption>
              <span>05</span>
              Трек
            </figcaption>
          </figure>
          <figure className="work__trio-shift">
            <img
              src={FRAMES.corner}
              alt="Узел примыкания профиля в углу"
              width={720}
              height={1280}
              loading="lazy"
            />
            <figcaption>
              <span>06</span>
              Узел
            </figcaption>
          </figure>
          <figure>
            <img
              src={FRAMES.up}
              alt="Вид вверх на потолок со спотами и теневым профилем"
              width={720}
              height={1280}
              loading="lazy"
            />
            <figcaption>
              <span>07</span>
              Плоскость
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="shell work__foot">
        <hr className="light-cut" />
        <p>
          Больше кадров — в{' '}
          <a href="https://vk.ru/propotolok1" target="_blank" rel="noreferrer">
            сообществе VK
          </a>
          .
        </p>
      </div>
    </section>
  )
}
