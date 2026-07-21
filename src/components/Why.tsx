export default function Why() {
  return (
    <section className="why" id="why">
      <div className="wrap why-grid">
        <div>
          <p className="eyebrow">Why Homeowners Choose Adroit</p>
          <h2 style={{ fontSize: 'clamp(25px,2.8vw,34px)', marginBottom: '34px' }}>One home, one team, no compromises between drawing and delivery.</h2>
          <div className="why-list">
            <div className="why-item"><span className="mark">→</span><div><h4>Single point of accountability</h4><p>One contract, one project manager, from first sketch to final handover.</p></div></div>
            <div className="why-item"><span className="mark">→</span><div><h4>Fixed timelines, tracked weekly</h4><p>A published construction schedule with weekly site updates, not open-ended promises.</p></div></div>
            <div className="why-item"><span className="mark">→</span><div><h4>Transparent, itemised costing</h4><p>Detailed cost estimate before work starts — no surprise variations at handover.</p></div></div>
            <div className="why-item"><span className="mark">→</span><div><h4>Approvals handled for you</h4><p>Plan sanction and statutory approvals managed in-house, start to finish.</p></div></div>
          </div>
          <div className="mid-cta">
            <a href="#quote" className="btn solid">Schedule a Free Site Visit</a>
          </div>
        </div>
        <div className="why-visual">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
            alt="Modern residential home interior designed and built by Adroit Design"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
