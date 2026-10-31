import { IconArrowCircle } from './IconArrow'
import './Header.css'

const NAV = [
  { href: '#solutions', label: 'Решения' },
  { href: '#projects', label: 'Проекты' },
  { href: '#designers', label: 'Дизайнерам' },
  { href: '#about', label: 'О компании' },
  { href: '#contacts', label: 'Контакты' },
]

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="logo" href="#top" aria-label="ПРО Потолок">
          <span className="logo__pro">PRO</span>
          <span className="logo__name">потолок</span>
        </a>

        <nav className="site-nav" aria-label="Основная навигация">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a className="site-header__phone" href="tel:+79115011202">
            +7 (911) 501-12-02
          </a>
          <a className="btn btn--pill btn--light" href="#request">
            <span>Заявка</span>
            <IconArrowCircle />
          </a>
        </div>
      </div>
    </header>
  )
}
