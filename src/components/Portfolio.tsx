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
            <div className="proj-thumb">
              <img src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800" alt="4BHK Villa" style={{width:'100%',height:'100%',objectFit:'cover',position:'absolute',top:0,left:0,zIndex:0}}/>
              <span className="tag" style={{position:'relative',zIndex:1,background:'rgba(42,32,25,0.7)',backdropFilter:'blur(4px)'}}>Villa</span>
            </div>
            <div className="proj-info"><h4>4BHK Villa, 3,800 sq.ft.</h4><p>Architecture · Interiors · Turnkey</p></div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb">
              <img src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Duplex Family Home" style={{width:'100%',height:'100%',objectFit:'cover',position:'absolute',top:0,left:0,zIndex:0}}/>
              <span className="tag" style={{position:'relative',zIndex:1,background:'rgba(42,32,25,0.7)',backdropFilter:'blur(4px)'}}>Independent House</span>
            </div>
            <div className="proj-info"><h4>Duplex Family Home</h4><p>Architecture · Construction</p></div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb">
              <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800" alt="3BHK Apartment Interior" style={{width:'100%',height:'100%',objectFit:'cover',position:'absolute',top:0,left:0,zIndex:0}}/>
              <span className="tag" style={{position:'relative',zIndex:1,background:'rgba(42,32,25,0.7)',backdropFilter:'blur(4px)'}}>Apartment</span>
            </div>
            <div className="proj-info"><h4>3BHK Apartment Interior</h4><p>Interior Design · Furnishing</p></div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb">
              <img src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Full Home Renovation" style={{width:'100%',height:'100%',objectFit:'cover',position:'absolute',top:0,left:0,zIndex:0}}/>
              <span className="tag" style={{position:'relative',zIndex:1,background:'rgba(42,32,25,0.7)',backdropFilter:'blur(4px)'}}>Renovation</span>
            </div>
            <div className="proj-info"><h4>Full Home Renovation</h4><p>Remodeling · Interiors</p></div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb">
              <img src="https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Gated Community Villa" style={{width:'100%',height:'100%',objectFit:'cover',position:'absolute',top:0,left:0,zIndex:0}}/>
              <span className="tag" style={{position:'relative',zIndex:1,background:'rgba(42,32,25,0.7)',backdropFilter:'blur(4px)'}}>Villa</span>
            </div>
            <div className="proj-info"><h4>Gated Community Villa</h4><p>Architecture · Landscape · Turnkey</p></div>
          </div>
          <div className="proj-card">
            <div className="proj-thumb">
              <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Vastu-Compliant Family Home" style={{width:'100%',height:'100%',objectFit:'cover',position:'absolute',top:0,left:0,zIndex:0}}/>
              <span className="tag" style={{position:'relative',zIndex:1,background:'rgba(42,32,25,0.7)',backdropFilter:'blur(4px)'}}>Independent House</span>
            </div>
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
