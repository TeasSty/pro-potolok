import { useEffect, useState } from 'react'
import './Header.css'

const LINKS = [
  { href: '#work', label: 'Работы' },
  { href: '#systems', label: 'Система' },
  { href: '#order', label: 'Связь' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const tick = () => setOn(window.scrollY > 40)
    tick()
    window.addEventListener('scroll', tick, { passive: true })
    return () => window.removeEventListener('scroll', tick)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`hd${on || open ? ' is-on' : ''}`}>
      <div className="shell hd__row">
        <a className="hd__logo" href="#top" aria-label="PRO Потолок">
          PRO<span>потолок</span>
        </a>

        <nav className="hd__nav" aria-label="Навигация">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a className="hd__tel" href="tel:+79115011202">
          +7 (911) 501-12-02
        </a>

        <button
          className={`hd__menu${open ? ' is-open' : ''}`}
          type="button"
          aria-label={open ? 'Закрыть' : 'Меню'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <i />
          <i />
        </button>
      </div>

      <div className={`hd__drawer${open ? ' is-open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="tel:+79115011202" onClick={() => setOpen(false)}>
          +7 (911) 501-12-02
        </a>
      </div>
    </header>
  )
}
