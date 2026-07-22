export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div>
          <p className="eyebrow">Residential Architectural Design &amp; Construction</p>
          <h1>From floor plan to<br /><em>move-in day</em> — your home, one team.</h1>
          <p className="lead">Adroit Design designs and builds homes end-to-end — residential architecture, interiors and turnkey construction for villas, independent houses and apartments, from the first sketch to the final handover.</p>
          <div className="hero-ctas">
            <a href="#quote" className="btn solid">Start Your Home Project</a>
            <a href="#projects" className="btn">View Our Projects</a>
          </div>
          <div className="hero-stats">
            <div><span className="num">150<span className="unit">+</span></span><span className="lbl">Homes Delivered</span></div>
            <div><span className="num">12<span className="unit">+</span></span><span className="lbl">Years in Practice</span></div>
            <div><span className="num">8-14 <span className="unit">Mo</span></span><span className="lbl">Avg. Build Time</span></div>
            <div><span className="num">100<span className="unit">%</span></span><span className="lbl">In-House Execution</span></div>
          </div>
        </div>
        <div className="plan-box">
          <img 
            src="/modern-house.jpg" 
            alt="Elegant Modern Residential Architecture" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
          <span className="tag" style={{ background: 'rgba(42,32,25,0.85)', padding: '6px 12px', color: 'var(--terracotta)', border: '1px solid rgba(196,123,79,0.3)' }}>Floor Plan → Finished Home</span>
        </div>
      </div>
    </section>
  )
}
