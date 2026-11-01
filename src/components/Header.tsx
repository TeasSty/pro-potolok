import { useEffect, useState } from 'react'
import './Header.css'

const LINKS = [
  { href: '#systems', label: 'Решения' },
  { href: '#works', label: 'Интерьеры' },
  { href: '#construct', label: 'Конструкция' },
  { href: '#designers', label: 'Дизайнерам' },
  { href: '#contact', label: 'Контакты' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`hd${solid || open ? ' is-solid' : ''}`}>
      <div className="shell hd__row">
        <a className="hd__logo" href="#top">
          PRO ПОТОЛОК
        </a>

        <nav className="hd__nav" aria-label="Основная навигация">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hd__actions">
          <a className="hd__tel" href="tel:+79115011202">
            +7 (911) 501-12-02
          </a>
          <a className="btn btn--solid hd__cta" href="tel:+79115011202">
            Обсудить проект
            <span className="btn__icon" aria-hidden="true">
              <svg viewBox="0 0 18 18" fill="none">
                <path
                  d="M4 9h10M10 5l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>

        <button
          className={`hd__burger${open ? ' is-open' : ''}`}
          type="button"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <i />
          <i />
        </button>
      </div>

      <div className={`hd__drawer${open ? ' is-open' : ''}`} id="mobile-nav">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="tel:+79115011202" onClick={() => setOpen(false)}>
          +7 (911) 501-12-02
        </a>
        <a
          className="btn btn--solid"
          href="tel:+79115011202"
          onClick={() => setOpen(false)}
        >
          Обсудить проект
        </a>
      </div>
    </header>
  )
}
