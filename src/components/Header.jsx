import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/listings', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const navClass = ({ isActive }) => (isActive ? 'is-active' : undefined)

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <Link to="/" className="logo" aria-label="Assesspro Consultants home" onClick={close}>
            <Logo />
          </Link>
          <nav className="nav" aria-label="Primary">
            {NAV.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={navClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="header__cta">
            <Link className="btn btn--primary" to="/contact">
              Book a Consultation <span className="arrow">→</span>
            </Link>
          </div>
          <button
            className="menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 7h18M3 12h18M3 17h18" />
            </svg>
          </button>
        </div>
      </header>
      <nav
        id="mobile-menu"
        className={`mobile-menu${open ? ' is-open' : ''}`}
        aria-label="Mobile"
      >
        {NAV.map((item) => (
          <Link key={item.to} to={item.to} onClick={close}>
            {item.label}
          </Link>
        ))}
        <Link className="btn btn--primary" to="/contact" onClick={close}>
          Book a Consultation
        </Link>
      </nav>
    </>
  )
}
