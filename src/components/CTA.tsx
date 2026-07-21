'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export default function CTA() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', { send_to: 'AW-XXXXXXXXX/XXXXXXXXXXXXXXXXXXXX' })
    }
    router.push('/thank-you')
  }

  return (
    <section className="cta" id="contact">
      <div className="wrap">
        <p className="eyebrow" style={{ color: '#3a2113' }}>Start Your Home Project</p>
        <h2>Tell us about your home. We&apos;ll send a plan, not a sales pitch.</h2>
        <p>Share your requirement and our design team will get back within one business day with next steps.</p>
        <form className="cta-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="email" placeholder="Email Address" className="full" required />
          <select className="full">
            <option value="">Project Type</option>
            <option>New Home / Villa Construction</option>
            <option>Home Interior Design</option>
            <option>Renovation / Remodeling</option>
            <option>Apartment Interiors</option>
            <option>Design Only (No Construction)</option>
          </select>
          <textarea placeholder="Tell us about your home — location, plot/built-up area, timeline" />
          <button type="submit" className="btn full" style={{ justifyContent: 'center', background: 'var(--clay)', color: 'var(--linen)', border: '1px solid var(--clay)' }}>Request a Free Callback</button>
          <p className="full" style={{ fontFamily: 'var(--mono)', fontSize: '11.5px', color: '#4a2c17', marginTop: '2px' }}>We reply within 1 business day. Your details are used only to contact you about this enquiry — no spam, no sharing with third parties.</p>
        </form>
      </div>
    </section>
  )
}
