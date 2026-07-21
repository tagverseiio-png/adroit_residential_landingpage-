export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Client Feedback</p>
          <h2>What our clients say</h2>
        </div>
        <div className="testi-grid">
          <div className="testi-card"><p className="quote">&ldquo;We handed over a rough idea and a plot. What came back matched the render almost exactly — on schedule.&rdquo;</p><p className="who">Homeowner, Independent House</p></div>
          <div className="testi-card"><p className="quote">&ldquo;One team for design and construction meant no finger-pointing when questions came up on site.&rdquo;</p><p className="who">Homeowner, Villa Project</p></div>
          <div className="testi-card"><p className="quote">&ldquo;Vastu requirements were built into the plan from day one, not bolted on as an afterthought.&rdquo;</p><p className="who">Homeowner, Family Residence</p></div>
        </div>
        <div className="mid-cta">
          <a href="#quote" className="btn solid">Become Our Next Success Story</a>
        </div>
      </div>
    </section>
  )
}
