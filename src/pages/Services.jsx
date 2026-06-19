import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

const SERVICES_NAV = [
  { num: '01', anchor: 'loss-adjusting', title: 'Loss Adjusting', blurb: 'Independent investigation across all classes of insurance.' },
  { num: '02', anchor: 'motor-assessing', title: 'Motor Assessing', blurb: 'Private, fleet, heavy commercial, plant and agricultural.' },
  { num: '03', anchor: 'valuation', title: 'Property Valuation', blurb: 'Commercial, industrial, residential, machinery and assets.' },
  { num: '04', anchor: 'risk', title: 'Risk Management Surveys', blurb: 'Pre-loss exposure analysis and improvement plans.' },
  { num: '05', anchor: 'joint', title: 'Joint Surveys', blurb: 'Independent multi-party site inspections.' },
  { num: '06', anchor: 'marine', title: 'Marine Claims', blurb: 'Cargo, transit, port, container and vessel-related losses.' },
  { num: '07', anchor: 'superintending', title: 'Sampling & Superintending', blurb: 'Cargo inspection, quantity verification, quality control.' },
]

const SERVICE_DETAILS = [
  {
    id: 'loss-adjusting',
    tag: '01 — Loss Adjusting',
    eyebrow: 'Loss adjusting',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1100&q=70',
    imgAlt: 'Loss adjuster examining damaged building structure during a site investigation',
    heading: 'Comprehensive loss adjusting across all classes of insurance.',
    lede:
      'We conduct independent investigations and assessments to establish the cause, nature, extent and financial impact of losses — and produce reports that hold up to underwriter, reinsurer and court scrutiny.',
    items: [
      'Cause and origin analysis',
      'Policy interpretation',
      'Quantum verification',
      'Coverage assessment',
      'Subrogation opportunities',
      'Interim and final reporting',
    ],
    cta: 'Instruct on a Matter',
  },
  {
    id: 'motor-assessing',
    tag: '02 — Motor Assessing',
    eyebrow: 'Motor assessing',
    img: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1100&q=70',
    imgAlt: 'Damaged commercial vehicle being assessed by motor specialist',
    heading: 'Private and commercial vehicle assessments — from inspection to settlement.',
    lede:
      'We provide prompt inspections and accurate quantification of losses to facilitate efficient claims resolution. Our motor team covers everything from a single passenger vehicle to a complex fleet incident.',
    items: [
      'Fleet losses',
      'Heavy commercial vehicles',
      'Agricultural machinery',
      'Plant and equipment',
      'Accident reconstruction',
      'Salvage evaluation',
      'Repair cost verification',
      'Total loss evaluations',
    ],
    cta: 'Instruct a Motor Assessor',
  },
  {
    id: 'valuation',
    tag: '03 — Property Valuation',
    eyebrow: 'Property valuation',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1100&q=70',
    imgAlt: 'Commercial property building exterior, the subject of an insurance valuation',
    heading: 'Professional valuations supporting sound underwriting decisions.',
    lede:
      'Our valuation reports help insurers determine adequate sums insured, reduce underinsurance exposure, and support sound underwriting decisions — across the full spectrum of insurable assets.',
    items: [
      'Commercial properties',
      'Industrial facilities',
      'Residential properties',
      'Plant and machinery',
      'Business assets',
      'Specialised equipment',
    ],
    cta: 'Request a Valuation',
  },
  {
    id: 'risk',
    tag: '04 — Risk Management Surveys',
    eyebrow: 'Risk management surveys',
    img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1100&q=70',
    imgAlt: 'Industrial facility being surveyed by a risk engineer',
    heading: 'Identify exposures before losses occur.',
    lede:
      'Our risk engineers conduct detailed surveys designed to identify exposures before losses occur — and provide practical risk improvement recommendations aimed at reducing claim frequency and severity.',
    items: [
      'Fire protection systems',
      'Security arrangements',
      'Operational risks',
      'Business continuity measures',
      'Occupational health and safety',
      'Natural catastrophe exposures',
      'Engineering and machinery risks',
      'Maximum Possible Loss (MPL)',
    ],
    cta: 'Commission a Risk Survey',
  },
  {
    id: 'joint',
    tag: '05 — Joint Surveys',
    eyebrow: 'Joint surveys',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1100&q=70',
    imgAlt: 'Multiple stakeholders gathered at a joint insurance survey',
    heading: 'Independent, collaborative inspections — with every stakeholder at the table.',
    lede:
      'We undertake independent and collaborative joint surveys involving all parties to a matter, producing a single agreed factual record that all sides can rely on.',
    items: ['Insurers', 'Brokers', 'Reinsurers', 'Surveyors', 'Policyholders', 'Third-party representatives'],
    cta: 'Convene a Joint Survey',
  },
  {
    id: 'marine',
    tag: '06 — Marine Claims',
    eyebrow: 'Marine claims',
    img: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1100&q=70',
    imgAlt: 'Cargo container vessel at port, the subject of a marine claim investigation',
    heading: 'Prompt investigation. Preserved evidence. Recovery opportunities identified.',
    lede:
      'Our marine team conducts prompt investigations to preserve evidence, identify causes of loss, and facilitate recovery opportunities wherever possible — across the full marine and logistics chain.',
    items: [
      'Cargo losses',
      'Marine transit claims',
      'Port-related incidents',
      'Container damages',
      'Vessel-related losses',
      'Import and export cargo',
      'Freight and logistics incidents',
    ],
    cta: 'Engage Our Marine Team',
  },
  {
    id: 'superintending',
    tag: '07 — Sampling & Superintending',
    eyebrow: 'Sampling & superintending',
    img: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1100&q=70',
    imgAlt: 'Bulk cargo being inspected during a superintending operation',
    heading: 'Independent verification for traders, insurers and financiers.',
    lede:
      'We offer professional cargo sampling and superintending services for commodities and bulk cargo operations. Our reports provide independent verification for insurers, traders, financiers and logistics operators.',
    items: [
      'Cargo inspection',
      'Quantity verification',
      'Quality control',
      'Loading supervision',
      'Discharge monitoring',
      'Stock verification',
      'Condition surveys',
    ],
    cta: 'Book a Superintendent',
  },
]

const STEPS = [
  {
    title: 'Instruction & triage',
    body: 'Immediate acknowledgement, scope confirmed and a coordinating adjuster assigned. 24/7 emergency duty line for time-sensitive matters.',
  },
  {
    title: 'Field investigation',
    body: 'Loss scene secured, critical evidence preserved and inspection commenced. Specialists (engineering, motor, marine) brought in where required.',
  },
  {
    title: 'Preliminary report — 48 hours',
    body: 'Issued within 48 hours of inspection: circumstances of loss, initial findings, coverage considerations, preliminary reserve recommendations and immediate loss-mitigation measures.',
  },
  {
    title: 'Final report — 72 hours',
    body: 'Issued within 72 hours of receiving all documentation: detailed investigation, liability analysis, cause determination, quantum, recovery prospects and settlement recommendation.',
  },
]

const FAQ = [
  {
    open: true,
    q: 'How quickly can you accept an instruction?',
    a: 'Field instructions are accepted 24/7 across our operational territories in Zambia and South Africa, and our preliminary report is issued within 48 hours of inspection. Final reports follow within 72 hours of receiving all documentation.',
  },
  {
    q: 'Do you work outside of office hours?',
    a: 'Yes. Our duty roster covers nights, weekends and public holidays for time-sensitive matters — particularly marine cargo claims, fleet incidents and large-property losses where evidence preservation is critical.',
  },
  {
    q: 'What classes of insurance do you cover?',
    a: 'All major commercial classes: property, business interruption, motor, marine cargo and hull, engineering, liability, plant and machinery, and specialised lines. We do not handle life or health claims.',
  },
  {
    q: 'How do your fees work?',
    a: 'We quote on a fixed-fee or hourly basis depending on the matter. We are happy to provide a written fee estimate before deployment, based on a brief description of the loss.',
  },
  {
    q: 'Can you handle joint surveys with our preferred surveyors?',
    a: 'Yes — joint surveys are a core part of our practice. We work cooperatively with insurer, broker, reinsurer and policyholder representatives to produce a single agreed factual record.',
  },
  {
    q: 'Do you handle subrogation and recovery?',
    a: 'Where viable, yes. Our reports explicitly identify recovery opportunities and we work with appointed recovery agents and legal counsel through to settlement or litigation as required.',
  },
  {
    q: 'What regions do you operate in?',
    a: 'We have operational offices in Zambia (Lusaka head office; Copperbelt branch in Kitwe) and South Africa, and we accept instructions throughout the SADC region. Cross-border matters are coordinated through our regional professional network.',
  },
]

export default function Services() {
  return (
    <>
      <section className="pagehero">
        <div className="container pagehero__inner">
          <div className="crumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>
          <span className="eyebrow">Our services</span>
          <h1>Seven disciplines, delivered by one coordinated team.</h1>
          <p>
            From a single motor claim to a multi-jurisdictional marine cargo investigation, every instruction we accept
            is investigated bottom-up from physical evidence and policy interpretation.
          </p>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <Reveal className="services">
            {SERVICES_NAV.map((s) => (
              <a key={s.anchor} className="service" href={`#${s.anchor}`}>
                <span className="service__num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.blurb}</p>
                <span className="service__more">Read more</span>
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {SERVICE_DETAILS.map((s) => (
            <Reveal as="article" id={s.id} key={s.id} className="svc-detail">
              <div className="svc-detail__media">
                <span className="svc-detail__tag">{s.tag}</span>
                <img src={s.img} alt={s.imgAlt} />
              </div>
              <div>
                <span className="eyebrow">{s.eyebrow}</span>
                <h2>{s.heading}</h2>
                <p className="lede">{s.lede}</p>
                <ul className="svc-detail__list">
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link className="btn btn--outline" to="/contact">
                  {s.cta} <span className="arrow">→</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal className="sec-head">
            <div>
              <span className="eyebrow">How we work</span>
              <h2>From instruction to final report — a transparent process.</h2>
            </div>
            <div className="sec-head__body">
              <p>
                Every instruction follows the same disciplined sequence — so you know what to expect, when to expect
                it, and who is responsible for each deliverable.
              </p>
            </div>
          </Reveal>

          <Reveal className="steps">
            {STEPS.map((step) => (
              <article
                key={step.title}
                className="step"
                style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.12)' }}
              >
                <h3 style={{ color: '#fff' }}>{step.title}</h3>
                <p style={{ color: 'var(--silver)' }}>{step.body}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <Reveal className="sec-head">
            <div>
              <span className="eyebrow">Frequently asked</span>
              <h2>Quick answers to the questions we hear most.</h2>
            </div>
            <div className="sec-head__body">
              <p>If your question isn't here, our team will give a direct answer within one business day.</p>
            </div>
          </Reveal>

          <Reveal className="faq">
            {FAQ.map((f) => (
              <details key={f.q} className="faq__item" open={f.open || undefined}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Need an adjuster on a matter today?</h2>
            <p>Send a one-line description of the loss and we will respond with a realistic turnaround, who we'd assign, and what to preserve at the scene.</p>
          </div>
          <div className="cta-banner__actions">
            <Link className="btn btn--primary" to="/contact">
              Instruct Us Now <span className="arrow">→</span>
            </Link>
            <Link className="btn btn--ghost" to="/listings">
              See Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
