import './Work.css'

const base = import.meta.env.BASE_URL

/**
 * Curated registry (no hero sol-shadow, no Story vk_07, no construction/VK overlays):
 * vault · dining · float · tracks · niche · plane
 */
const FRAMES = {
  vault: `${base}images/proj-vault.jpg`,
  dining: `${base}images/vk/vk_02.jpg`,
  float: `${base}images/sol-float.jpg`,
  niche: `${base}images/vk/vk_05.jpg`,
  plane: `${base}images/vk/vk_06.jpg`,
  tracks: `${base}images/proj-wide.jpg`,
} as const

export function Work() {
  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="shell work__open">
        <h2 className="work__title" id="work-title">
          Объекты
        </h2>
        <p className="work__aside">
          Своды, парящие контуры, теневые примыкания и трек — кадры с объектов
          в Вологде.
        </p>
      </div>

      <div className="work__essay">
        <figure className="work__lead-shot">
          <img
            src={FRAMES.vault}
            alt="Свод с теневым профилем и круглым окном"
            width={1920}
            height={1080}
            loading="lazy"
          />
          <figcaption>Свод</figcaption>
        </figure>

        <div className="shell work__split">
          <figure className="work__tall">
            <img
              src={FRAMES.dining}
              alt="Жилой интерьер со сводом и трековым светом"
              width={1920}
              height={2560}
              loading="lazy"
            />
            <figcaption>Жилой интерьер</figcaption>
          </figure>

          <figure className="work__stack-one">
            <img
              src={FRAMES.float}
              alt="Парящий контур подсветки"
              width={720}
              height={960}
              loading="lazy"
            />
            <figcaption>Парящий контур</figcaption>
          </figure>
        </div>

        <figure className="work__bleed">
          <img
            src={FRAMES.tracks}
            alt="Геометрия свода с треком и кольцевым светильником"
            width={1920}
            height={1280}
            loading="lazy"
          />
          <figcaption className="shell">Трек и плоскость</figcaption>
        </figure>

        <div className="shell work__duo">
          <figure>
            <img
              src={FRAMES.niche}
              alt="Квадратная ниша со спотом и теневым профилем"
              width={720}
              height={1280}
              loading="lazy"
            />
            <figcaption>Ниша</figcaption>
          </figure>
          <figure>
            <img
              src={FRAMES.plane}
              alt="Плоскость потолка со спотами и теневым периметром"
              width={720}
              height={1280}
              loading="lazy"
            />
            <figcaption>Плоскость</figcaption>
          </figure>
        </div>
      </div>

      <div className="shell work__foot">
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
