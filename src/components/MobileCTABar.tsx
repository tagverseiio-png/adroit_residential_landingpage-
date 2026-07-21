export default function MobileCTABar() {
  return (
    <div className="floating-actions">
      <a href="tel:+919940064343" className="floating-btn phone" aria-label="Call Us">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      </a>
      <a href="https://wa.me/919940064343" className="floating-btn whatsapp" target="_blank" rel="noopener" aria-label="WhatsApp Us">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.8.46 3.5 1.3 5L2 22l5.1-1.3c1.5.8 3.2 1.2 5 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.1l-.3-.2-3.2.8.8-3.1-.2-.3c-.7-1.3-1.1-2.8-1.1-4.3 0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8zm4.3-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.7-1.2-1.5-1.4-1.8-.1-.2 0-.3.1-.5.1-.1.2-.3.3-.4.1-.1.2-.3.1-.5 0-.2-.5-1.3-.7-1.8-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.5 2.4 3.7 3.3.5.2 1 .4 1.3.5.5.2 1 .1 1.4.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3z"/></svg>
      </a>
      <a href="#quote" className="floating-btn chat" aria-label="Send Message">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </a>
    </div>
  )
}
