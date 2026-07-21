export default function Intro() {
  return (
    <section className="intro" id="intro">
      <div className="wrap">
        <div className="intro-header">
          <p className="eyebrow">Trusted By Homeowners</p>
          <h2>Your architect, interior designer and builder — under one roof.</h2>
        </div>
        <div className="intro-grid">
          <div className="intro-left">
            <div className="intro-copy">
              <p>Adroit Design is a residential architectural design and construction company built around one idea: the people who design your home should also be the people who build it. We take on independent houses, villas and apartment interiors — from the first floor plan through statutory approvals to final handover.</p>
              <p>Because design and construction sit under one roof, the home you approve on paper is the home you get on the ground — not a compromised version of it after three different contractors have had their say.</p>
            </div>
            <div className="mid-cta">
              <a href="#contact" className="btn solid">Book a Free Consultation</a>
              <p>No obligation · Response within 1 business day</p>
            </div>
          </div>
          <div className="intro-right">
            <div className="intro-image" style={{ marginBottom: '44px' }}>
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop" 
                alt="Modern Architecture" 
                style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', height: '320px', display: 'block' }} 
              />
            </div>
            <div className="intro-figures">
              <div className="fig"><div className="num">150+</div><div className="lbl">Homes Built &amp; Designed</div></div>
              <div className="fig"><div className="num">12+</div><div className="lbl">Years in Practice</div></div>
              <div className="fig"><div className="num">25+</div><div className="lbl">In-House Specialists</div></div>
              <div className="fig"><div className="num">8-14</div><div className="lbl">Month Avg. Build</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
