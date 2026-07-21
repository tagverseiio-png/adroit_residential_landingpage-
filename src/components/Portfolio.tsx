export default function Portfolio() {
  return (
    <section className="portfolio" id="projects">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Selected Work</p>
          <h2>Homes we've designed &amp; built</h2>
          <p>A cross-section of villas, independent houses and apartment interiors delivered by Adroit Design.</p>
        </div>
        <div className="proj-grid">
          <div className="proj-card">
            <div className="proj-thumb"><span className="tag">Villa</span></div>
            <div className="proj-info"><h4>4BHK Villa, 3,800 sq.ft.</h4><p>Architecture · Interiors · Turnkey</p></div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb"><span className="tag">Independent House</span></div>
            <div className="proj-info"><h4>Duplex Family Home</h4><p>Architecture · Construction</p></div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb"><span className="tag">Apartment</span></div>
            <div className="proj-info"><h4>3BHK Apartment Interior</h4><p>Interior Design · Furnishing</p></div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb"><span className="tag">Renovation</span></div>
            <div className="proj-info"><h4>Full Home Renovation</h4><p>Remodeling · Interiors</p></div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb"><span className="tag">Villa</span></div>
            <div className="proj-info"><h4>Gated Community Villa</h4><p>Architecture · Landscape · Turnkey</p></div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb"><span className="tag">Independent House</span></div>
            <div className="proj-info"><h4>Vastu-Compliant Family Home</h4><p>Architecture · Turnkey Construction</p></div>
          </div>
        </div>
        <div className="mid-cta">
          <a href="#contact" className="btn">See More Projects — Talk to Us</a>
        </div>
      </div>
    </section>
  )
}
