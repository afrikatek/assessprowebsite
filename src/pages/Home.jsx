import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

export default function Home() {
  return (
    <>
      <section className="hero">
        <img
          className="hero__bg"
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=70"
          alt=""
          aria-hidden="true"
        />
        <div className="container hero__inner">
          <span className="eyebrow">Independent Insurance Consultancy</span>
          <h1>
            Clear evidence. Sound judgment. <span className="accent">Decisions you can defend.</span>
          </h1>
          <p className="hero__lede">
            We are independent loss adjusters, claims managers, valuers and risk engineers with offices in Zambia and
            South Africa, serving insurers, reinsurers, brokers and corporates throughout the SADC region. Every report
            we deliver is built on field evidence and technical rigour.
          </p>
          <div className="hero__ctas">
            <Link className="btn btn--primary" to="/contact">
              Request a Consultation <span className="arrow">→</span>
            </Link>
            <Link className="btn btn--ghost" to="/services">
              Explore Our Services
            </Link>
          </div>
          <div className="hero__meta">
            <div><strong>2</strong><span>Operating countries</span></div>
            <div><strong>SADC</strong><span>Regional coverage</span></div>
            <div><strong>24/7</strong><span>Emergency response</span></div>
            <div><strong>48 hr</strong><span>Preliminary report</span></div>
          </div>
        </div>
      </section>

      <div className="trust">
        <div className="container trust__row">
          <span className="trust__label">Trusted by</span>
          <div className="trust__items">
            <span>Insurers</span>
            <span>Reinsurers</span>
            <span>Brokers</span>
            <span>Corporates</span>
            <span>Financial Institutions</span>
            <span>Government Entities</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Reveal className="sec-head">
            <div>
              <span className="eyebrow">Why Assesspro</span>
              <h2>Independence, technical depth, and prompt turnaround.</h2>
            </div>
            <div className="sec-head__body">
              <p>
                Insurance decisions stand or fall on the quality of the report behind them. We pair seasoned adjusters
                with engineers, valuers and forensic specialists so every finding is technically grounded.
              </p>
            </div>
          </Reveal>

          <div className="benefits">
            <Reveal as="article" className="benefit">
              <div className="benefit__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3>Genuinely independent</h3>
              <p>No insurer or broker holds an equity interest in the firm. Our conclusions follow the evidence — not commercial pressure.</p>
            </Reveal>
            <Reveal as="article" className="benefit">
              <div className="benefit__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 12h4l3-8 4 16 3-8h4" />
                </svg>
              </div>
              <h3>Technical rigour</h3>
              <p>Engineers, qualified valuers, motor and marine specialists in-house. Reports stand up to underwriter, reinsurer and court scrutiny.</p>
            </Reveal>
            <Reveal as="article" className="benefit">
              <div className="benefit__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </div>
              <h3>Prompt response</h3>
              <p>Field instructions accepted 24/7. Most inspections begin within 48 hours and interim reports follow within five working days.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <Reveal className="sec-head">
            <div>
              <span className="eyebrow">Our Practice</span>
              <h2>Seven disciplines, one coordinated team.</h2>
            </div>
            <div className="sec-head__body">
              <p>
                From the first instruction to final report, you work with a single coordinating adjuster — supported by
                specialists drawn from across the practice as the matter requires.
              </p>
            </div>
          </Reveal>

          <Reveal className="services">
            <article className="service">
              <span className="service__num">01 — LOSS ADJUSTING</span>
              <h3>Loss Adjusting</h3>
              <p>Independent investigation and assessment across all classes of insurance — cause, nature, extent and quantum.</p>
              <Link to="/services#loss-adjusting" className="service__more">Read more</Link>
            </article>
            <article className="service">
              <span className="service__num">02 — MOTOR</span>
              <h3>Motor Assessing</h3>
              <p>Private, fleet, heavy commercial, plant and agricultural — from inspection to repair verification and total loss evaluation.</p>
              <Link to="/services#motor-assessing" className="service__more">Read more</Link>
            </article>
            <article className="service">
              <span className="service__num">03 — VALUATION</span>
              <h3>Property Valuation</h3>
              <p>Commercial, industrial, residential and machinery valuations supporting sound underwriting decisions.</p>
              <Link to="/services#valuation" className="service__more">Read more</Link>
            </article>
            <article className="service">
              <span className="service__num">04 — RISK</span>
              <h3>Risk Management Surveys</h3>
              <p>Pre-loss exposure analysis — fire, security, business continuity and engineering risk — with practical improvement plans.</p>
              <Link to="/services#risk" className="service__more">Read more</Link>
            </article>
            <article className="service">
              <span className="service__num">05 — JOINT SURVEYS</span>
              <h3>Joint Surveys</h3>
              <p>Independent, collaborative surveys involving insurers, brokers, reinsurers, policyholders and third-party representatives.</p>
              <Link to="/services#joint" className="service__more">Read more</Link>
            </article>
            <article className="service">
              <span className="service__num">06 — MARINE</span>
              <h3>Marine Claims</h3>
              <p>Cargo, transit, port, container, vessel and freight claims — investigated to preserve evidence and identify recovery.</p>
              <Link to="/services#marine" className="service__more">Read more</Link>
            </article>
          </Reveal>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link className="btn btn--outline" to="/services">
              View All Services <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-prev">
            <Reveal className="about-prev__media">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=70"
                alt="Senior loss adjuster reviewing a site report with the client team"
              />
            </Reveal>
            <Reveal className="about-prev__body">
              <span className="eyebrow">About the Practice</span>
              <h2>Independent. Regional. Technically grounded.</h2>
              <p>
                Assesspro Consultants is an independent loss adjusting, claims management, valuation and risk
                consulting firm with operational offices in Zambia and South Africa. We provide professional, timely
                and technically sound claims assessment and risk management services to insurers, reinsurers, brokers,
                corporates, financial institutions and government entities throughout the SADC region.
              </p>
              <div className="about-prev__stats">
                <div><strong>2</strong><span>Operating countries</span></div>
                <div><strong>SADC</strong><span>Regional coverage</span></div>
                <div><strong>24/7</strong><span>Emergency response</span></div>
                <div><strong>48 hr</strong><span>Preliminary report</span></div>
              </div>
              <Link className="btn btn--outline" to="/about">
                Read Our Story <span className="arrow">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal className="sec-head">
            <div>
              <span className="eyebrow">Client Voices</span>
              <h2>What insurers and brokers say.</h2>
            </div>
            <div className="sec-head__body">
              <p>The work speaks for itself, but here is what some of our long-standing clients have shared about working with us.</p>
            </div>
          </Reveal>

          <div className="testimonials">
            <Reveal as="article" className="testimonial">
              <p className="testimonial__quote">
                Assesspro's report quality is the benchmark we measure others against. Clear narrative, defensible
                quantum, and rarely a question we still need to ask.
              </p>
              <div className="testimonial__author">
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=70" alt="Tendai Moyo" />
                <div>
                  <strong>Tendai Moyo</strong>
                  <span>Head of Claims, Regional Insurer</span>
                </div>
              </div>
            </Reveal>
            <Reveal as="article" className="testimonial">
              <p className="testimonial__quote">
                On a complex marine cargo matter, their team preserved evidence within hours of notification. The
                recovery that followed would not have happened otherwise.
              </p>
              <div className="testimonial__author">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=70" alt="James Okafor" />
                <div>
                  <strong>James Okafor</strong>
                  <span>Marine Underwriting Manager</span>
                </div>
              </div>
            </Reveal>
            <Reveal as="article" className="testimonial">
              <p className="testimonial__quote">
                Their risk surveys translate easily into board-level decisions. We've cut average property claim
                frequency materially across the portfolios they reviewed.
              </p>
              <div className="testimonial__author">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=70" alt="Naledi Khumalo" />
                <div>
                  <strong>Naledi Khumalo</strong>
                  <span>Director, Insurance Brokerage</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Have a matter you'd like to discuss?</h2>
            <p>Send the file. We will tell you the realistic turnaround, who we'd assign, and what evidence we need before deployment.</p>
          </div>
          <div className="cta-banner__actions">
            <Link className="btn btn--primary" to="/contact">
              Book a Consultation <span className="arrow">→</span>
            </Link>
            <Link className="btn btn--ghost" to="/services">
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
