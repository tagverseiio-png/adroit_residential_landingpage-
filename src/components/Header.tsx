'use client'

import { useEffect, useState } from 'react'
import AdroitIcon from './AdroitIcon'
export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <nav>
        <a href="https://www.adroitdesigns.in/" target="_blank" rel="noopener noreferrer" className="logo">
          <AdroitIcon className="logo-icon" />
          <span className="logo-text">ADROIT DESIGN</span>
        </a>
        <div className="nav-cta">
          <a href="#quote" className="btn solid">Get a Free Quote</a>
        </div>
      </nav>
    </header>
  )
}
