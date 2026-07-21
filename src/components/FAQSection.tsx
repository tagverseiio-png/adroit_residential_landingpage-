'use client'

import { useRef, useState } from 'react'

const faqs = [
  {
    q: 'What is the cost of residential construction per square foot?',
    a: 'Turnkey residential construction typically ranges based on specification level, structure type and finishes chosen. Adroit Design shares a detailed, itemised cost estimate after the initial site visit and brief, so there are no hidden costs later.',
  },
  {
    q: 'How long does it take to build a house or villa?',
    a: 'A typical independent house or villa takes 8 to 14 months from foundation to handover depending on built-up area and design complexity, with a fixed schedule shared before construction begins.',
  },
  {
    q: 'Does Adroit Design handle government approvals and plan sanction?',
    a: 'Yes. Plan sanction, statutory approvals and liaison with local authorities are handled as part of the design and turnkey construction package, so clients do not have to navigate approvals separately.',
  },
  {
    q: 'Can Adroit Design design a Vastu-compliant home?',
    a: 'Yes. Vastu-compliant planning is available on request and can be incorporated into the architectural layout from the earliest design stage without compromising functionality.',
  },
  {
    q: 'Can I hire Adroit Design only for interior design, without construction?',
    a: 'Yes. Residential architecture, interiors and turnkey construction are offered both as a combined package and as standalone services, depending on what stage your project is at.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const answersRef = useRef<(HTMLDivElement | null)[]>([])

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2>Residential design &amp; construction, explained</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
              <button className="faq-q" onClick={() => toggle(i)}>
                {faq.q}
                <span className="plus">+</span>
              </button>
              <div
                className="faq-a"
                ref={(el) => { answersRef.current[i] = el }}
                style={{ maxHeight: openIndex === i ? answersRef.current[i]?.scrollHeight + 'px' : '0' }}
              >
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mid-cta">
          <a href="#contact" className="btn solid">Still Have Questions? Talk to Our Team</a>
        </div>
      </div>
    </section>
  )
}
