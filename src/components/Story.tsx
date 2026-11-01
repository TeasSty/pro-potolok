import './Story.css'

/** Profile node — distinct from hero (sol-shadow) and Work essay frames. */
const NODE = `${import.meta.env.BASE_URL}images/vk/vk_07.jpg`

export function Story() {
  return (
    <section className="story" id="systems" aria-labelledby="story-title">
      <div className="shell story__spread">
        <figure className="story__node">
          <img
            src={NODE}
            alt="Теневой зазор, трек и спот на плоскости потолка"
            width={720}
            height={1280}
            loading="lazy"
          />
        </figure>

        <div className="story__manifesto">
          <h2 className="story__title" id="story-title">
            Профиль держит свет.
            <em>Полотно — плоскость.</em>
          </h2>
          <p className="story__body">
            Теневой зазор, трек, парящий контур — узлы, из которых собирается
            потолок. Свет и материал читаются сами.
          </p>
          <dl className="story__facts">
            <div>
              <dt>Вологда</dt>
              <dd>с 2009</dd>
            </div>
            <div>
              <dt>Замер</dt>
              <dd>бесплатно</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
