export default function Process() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">How We Build Your Home</p>
          <h2>Four stages, one team, zero handoffs</h2>
          <p>This is the actual sequence every Adroit Design residential project follows, from first consultation to handover.</p>
        </div>
        
        <div className="process-timeline">
          <div className="timeline-line"></div>
          <div className="process-steps">
            <div className="pstep">
              <div className="timeline-dot"></div>
              <div className="pstep-box">
                <div className="step-no">01</div>
                <h4>Consultation &amp; Site Visit</h4>
                <p>Site study, budget and brief discussion to understand how you want to live in the space.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="timeline-dot"></div>
              <div className="pstep-box">
                <div className="step-no">02</div>
                <h4>Design &amp; 3D Visualization</h4>
                <p>Floor plans, elevations and photorealistic 3D walkthroughs, refined until you approve.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="timeline-dot"></div>
              <div className="pstep-box">
                <div className="step-no">03</div>
                <h4>Approvals &amp; Costing</h4>
                <p>Plan sanction, statutory approvals and a detailed, itemised construction estimate.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="timeline-dot"></div>
              <div className="pstep-box">
                <div className="step-no">04</div>
                <h4>Construction &amp; Handover</h4>
                <p>Turnkey construction with weekly updates, ending in a ready-to-move-in home.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mid-cta">
          <a href="#quote" className="btn solid">Get Your Free Quote</a>
        </div>
      </div>
    </section>
  )
}
