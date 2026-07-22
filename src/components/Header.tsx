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
    <header style={{ boxShadow: scrolled ? '0 8px 24px rgba(0,0,0,0.25)' : 'none' }}>
      <nav>
        <a href="https://www.adroitdesigns.in/" target="_blank" rel="noopener noreferrer" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <AdroitIcon width={82} height={82} />
          <span style={{ textTransform: 'uppercase', color: 'white', letterSpacing: '3px', fontWeight: '600', fontSize: '1.25rem' }}>ADROIT DESIGN</span>
        </a>
        <div className="nav-cta">
          <a href="#quote" className="btn solid">Get a Free Quote</a>
        </div>
      </nav>
    </header>
  )
}
