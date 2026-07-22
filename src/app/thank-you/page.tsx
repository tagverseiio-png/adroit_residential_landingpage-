import Link from 'next/link'
import Header from '@/components/Header'
import MobileCTABar from '@/components/MobileCTABar'

export default function ThankYou() {
  return (
    <>
      <main className="thankyou-page">
        <div className="thankyou-bg-text">ADROIT</div>
        
        <div className="wrap thankyou-content">
          <div className="eyebrow" style={{ color: 'var(--terracotta)', marginBottom: '30px' }}>
            ADROIT DESIGN
          </div>
          
          <div className="success-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <h1>THANK<br />YOU!</h1>
          
          <p className="thankyou-desc">
            Your request has been received. Our team will<br />
            contact you within <strong>24 hours</strong> to discuss your project.
          </p>
          
          <div className="thankyou-actions">
            <Link href="/" className="btn solid quote-btn" style={{ margin: 0 }}>BACK TO HOME</Link>
            <Link href="/#projects" className="btn ghost-ink">VIEW OUR PROJECTS</Link>
          </div>
          
          <div className="thankyou-stats">
            <div className="stat">
              <span className="stat-val">24 Hrs</span>
              <span className="stat-lbl">RESPONSE TIME</span>
            </div>
            <div className="stat divider"></div>
            <div className="stat">
              <span className="stat-val highlight">250+</span>
              <span className="stat-lbl">CLIENTS</span>
            </div>
            <div className="stat divider"></div>
            <div className="stat">
              <span className="stat-val">12 Yrs</span>
              <span className="stat-lbl">EXPERIENCE</span>
            </div>
          </div>
        </div>
      </main>
      <MobileCTABar />
    </>
  )
}
