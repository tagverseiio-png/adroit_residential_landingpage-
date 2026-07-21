'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#quote') {
        setIsOpen(true)
        // Clear hash so it can be triggered again if closed
        window.history.pushState('', document.title, window.location.pathname + window.location.search)
      }
    }
    
    // Check on mount
    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const close = () => {
    setIsOpen(false)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', { send_to: 'AW-XXXXXXXXX/XXXXXXXXXXXXXXXXXXXX' })
    }
    setIsOpen(false)
    router.push('/thank-you')
  }

  if (!isOpen) return null

  return (
    <div className="quote-modal-overlay" onClick={close}>
      <div className="quote-modal" onClick={(e) => e.stopPropagation()}>
        <button className="quote-modal-close" onClick={close}>✕</button>
        
        <h2>QUICK ENQUIRY</h2>
        <p className="quote-desc">If you are interested in any of our services, please submit your basic details below and we will get back to you as soon as possible!</p>
        
        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="quote-form-row">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Official Mail ID" required />
          </div>
          <div className="quote-form-row">
            <input type="tel" placeholder="Phone Number" required />
            <select required defaultValue="">
              <option value="" disabled hidden>Select Category</option>
              <option value="New Construction">New Home Construction</option>
              <option value="Interiors">Home Interiors</option>
              <option value="Renovation">Renovation</option>
              <option value="Architecture">Design Only</option>
            </select>
          </div>
          <div className="quote-form-row">
            <input type="text" placeholder="Location" required />
            <input type="text" placeholder="Area (sq. ft.)" />
          </div>
          <textarea placeholder="Message / Specifications" />
          
          <button type="submit" className="quote-btn">SEND INQUIRY &rarr;</button>
        </form>
      </div>
    </div>
  )
}


