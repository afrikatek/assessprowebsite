import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

export default function About() {
  return (
    <>
      <section className="pagehero">
        <div className="container pagehero__inner">
          <div className="crumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
          <span className="eyebrow">Our practice</span>
          <h1>Independent practitioners, serving the SADC insurance industry.</h1>
          <p>
            Assesspro Consultants is an independent firm of loss adjusters, claims managers, valuers and risk engineers
            with operational offices in Zambia and South Africa. Our independence is structural — and that is the point.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="story">
            <Reveal className="story__media">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=70"
                alt="Assesspro adjusters in discussion at a site inspection"
              />
            </Reveal>
            <Reveal className="story__body">
              <span className="eyebrow">Our story</span>
              <h2>An independent partner to the insurance industry — across the SADC region.</h2>
              <p>
                Assesspro Consultants is a leading independent loss adjusting, claims management, valuation and risk
                consulting firm, with operational offices in Zambia and South Africa. We provide professional, timely
                and technically sound claims assessment and risk management services to insurers, reinsurers, brokers,
                corporates, financial institutions, government entities and private clients throughout the Southern
                African Development Community (SADC) region.
              </p>
              <p>
                With extensive regional experience and a network of professionals across Southern Africa, we are
                strategically positioned to respond swiftly and effectively to claims of any size, complexity or
                magnitude. A coordinating adjuster is named for every instruction — supported by specialists drawn from
                across our practice (loss adjusting, motor, marine, valuation, engineering and risk surveys) as the
                matter requires.
              </p>
              <p>
                We pride ourselves on delivering independent, objective and technically accurate assessments that help
                insurers make informed claim decisions while ensuring fair outcomes for all stakeholders. The firm is
                registered as Assesspro Consultants Ltd (No. 2026/LA/09).
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <Reveal className="sec-head">
            <div>
              <span className="eyebrow">Mission &amp; vision</span>
              <h2>What we work toward, and why.</h2>
            </div>
            <div className="sec-head__body">
              <p>
                Our work is technical, but its purpose is human: claimants deserve fair settlements; insurers deserve
                defensible decisions; and the market as a whole works better when the evidence does the talking.
              </p>
            </div>
          </Reveal>
          <Reveal className="mvbox">
            <div className="mission">
              <h3>Our Mission</h3>
              <p>
                To deliver independent, technically rigorous insurance reports that give every stakeholder — insurer,
                broker, reinsurer and policyholder — a defensible basis on which to act.
              </p>
            </div>
            <div className="vision">
              <h3>Our Vision</h3>
              <p>
                To be the regional reference point for evidence-led loss adjusting, valuation and risk engineering —
                known equally for our independence and for the practical clarity of our reports.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="sec-head">
            <div>
              <span className="eyebrow">Why insurers choose us</span>
              <h2>Four reasons our clients come back.</h2>
            </div>
            <div className="sec-head__body">
              <p>
                We are not the cheapest provider in the market. We are, however, the one most often instructed when the
                matter is contested, complex, or simply too important to delegate to a templated process.
              </p>
            </div>
          </Reveal>

          <div className="values">
            <Reveal as="article" className="value">
              <span className="value__num">01</span>
              <h3>Structural independence</h3>
              <p>No insurer, broker or reinsurer holds a stake in the firm. Our work is the work — not a managed channel of someone else's interests.</p>
            </Reveal>
            <Reveal as="article" className="value">
              <span className="value__num">02</span>
              <h3>In-house technical depth</h3>
              <p>Engineers, qualified valuers, motor specialists and marine surveyors under one roof. No outsourcing of the technical core of our reports.</p>
            </Reveal>
            <Reveal as="article" className="value">
              <span className="value__num">03</span>
              <h3>Coordinating adjuster model</h3>
              <p>One named adjuster owns your file from instruction to final report. You always know who is responsible for the next deliverable.</p>
            </Reveal>
            <Reveal as="article" className="value">
              <span className="value__num">04</span>
              <h3>Prompt, plain reports</h3>
              <p>Inspections begin within 48 hours of instruction. Reports are written to be read by underwriters and judges alike — clear, structured, defensible.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section--dark" style={{ padding: 'clamp(48px, 7vw, 88px) 0' }}>
        <div className="container">
          <div className="hero__meta" style={{ marginTop: 0, border: 'none' }}>
            <div><strong>2</strong><span>Operating countries</span></div>
            <div><strong>SADC</strong><span>Regional coverage</span></div>
            <div><strong>24/7</strong><span>Emergency response</span></div>
            <div><strong>72 hr</strong><span>Final report standard</span></div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Looking for an adjuster you can trust on the difficult files?</h2>
            <p>Tell us about the matter. We'll respond with a realistic turnaround, who we'd assign, and what evidence to preserve in the meantime.</p>
          </div>
          <div className="cta-banner__actions">
            <Link className="btn btn--primary" to="/contact">
              Talk to a Senior Adjuster <span className="arrow">→</span>
            </Link>
            <Link className="btn btn--ghost" to="/services">
              See Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
