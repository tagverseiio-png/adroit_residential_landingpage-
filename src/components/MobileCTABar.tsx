export default function MobileCTABar() {
  return (
    <div className="floating-actions">
      <a href="tel:+919940064343" className="floating-btn phone" aria-label="Call Us">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      </a>
      <a href="https://wa.me/919940064343" className="floating-btn whatsapp" target="_blank" rel="noopener" aria-label="WhatsApp Us">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.91-9.91-9.91zm5.44 14.21c-.27.76-1.53 1.36-2.14 1.46-.54.1-1.49.26-4.23-1.01-3.51-1.63-5.77-5.21-5.94-5.44-.17-.23-1.42-1.89-1.42-3.6 0-1.71.89-2.55 1.21-2.91.32-.36.7-.45.93-.45.23 0 .47.01.66.02.21.01.48-.08.73.54.27.66.92 2.24 1 2.43.08.19.13.42.01.66-.12.23-.19.38-.38.6-.19.22-.4.48-.57.66-.19.19-.39.4-.17.78.22.38.99 1.63 2.12 2.64 1.46 1.3 2.68 1.7 3.06 1.89.38.19.61.16.84-.11.23-.27.97-1.12 1.23-1.51.27-.38.54-.32.88-.19.34.13 2.16 1.02 2.54 1.21.38.19.63.29.73.45.09.16.09.93-.18 1.69z"/></svg>
      </a>
      <a href="#quote" className="floating-btn chat" aria-label="Send Message">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </a>
    </div>
  )
}
