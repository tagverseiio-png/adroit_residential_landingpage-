export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div>
          <p className="eyebrow">Residential Architectural Design &amp; Construction</p>
          <h1>From floor plan to<br /><em>move-in day</em> — your home, one team.</h1>
          <p className="lead">Adroit Design designs and builds homes end-to-end — residential architecture, interiors and turnkey construction for villas, independent houses and apartments, from the first sketch to the final handover.</p>
          <div className="hero-ctas">
            <a href="#contact" className="btn solid">Start Your Home Project</a>
            <a href="#projects" className="btn">View Our Projects</a>
          </div>
          <div className="hero-stats">
            <div><span className="num">150+</span><span className="lbl">Homes Delivered</span></div>
            <div><span className="num">12+</span><span className="lbl">Years in Practice</span></div>
            <div><span className="num">8-14 Mo</span><span className="lbl">Avg. Build Time</span></div>
            <div><span className="num">100%</span><span className="lbl">In-House Execution</span></div>
          </div>
        </div>
        <div className="plan-box">
          <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet">
            <rect className="pl-line" x="30" y="40" width="340" height="420" />
            <line className="pl-line" x1="30" y1="220" x2="230" y2="220" />
            <line className="pl-line" x1="230" y1="40" x2="230" y2="460" />
            <line className="pl-line" x1="30" y1="340" x2="230" y2="340" />
            <rect className="pl-fill" x="255" y="65" width="90" height="130" />
            <rect className="pl-fill" x="55" y="360" width="150" height="80" />
            <circle className="pl-line" cx="300" cy="330" r="30" />
          </svg>
          <span className="tag">Floor Plan → Finished Home</span>
        </div>
      </div>
    </section>
  )
}
