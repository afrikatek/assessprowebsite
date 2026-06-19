import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'loss', label: 'Loss Adjusting' },
  { value: 'motor', label: 'Motor' },
  { value: 'property', label: 'Property & Valuation' },
  { value: 'risk', label: 'Risk Surveys' },
  { value: 'marine', label: 'Marine' },
  { value: 'superintending', label: 'Superintending' },
]

const CASES = [
  {
    category: 'property',
    tag: 'Property',
    meta: 'Fire Loss · Property',
    title: 'Mixed-use tower fire — full quantum verification',
    excerpt:
      'Quantified material damage and 14-week business interruption loss on a tenanted commercial tower. Disputed cause resolved through forensic engineering analysis.',
    foot: '2025 · Lead adjuster: S. Mberi',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=70',
    alt: 'Commercial office tower exterior — subject of a fire loss adjustment',
  },
  {
    category: 'marine',
    tag: 'Marine',
    meta: 'Cargo Loss · Marine',
    title: 'Reefer container temperature excursion',
    excerpt:
      'Investigated 4,200 cartons of pharmaceuticals affected by an inland reefer failure. Preserved data-logger evidence enabled a successful recovery action.',
    foot: '2025 · Lead adjuster: N. Adebayo',
    img: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=70',
    alt: 'Container vessel docked at port for cargo claim inspection',
  },
  {
    category: 'motor',
    tag: 'Motor',
    meta: 'Fleet · Heavy Commercial',
    title: 'Logistics fleet — 11-vehicle accident reconstruction',
    excerpt:
      "Multi-vehicle highway pile-up involving a logistics operator's fleet. Accident reconstruction supported apportionment of liability across three insurers.",
    foot: '2025 · Lead adjuster: K. Dlamini',
    img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=900&q=70',
    alt: 'Heavy commercial truck being inspected after a road incident',
  },
  {
    category: 'risk',
    tag: 'Risk Survey',
    meta: 'Risk Engineering · Industrial',
    title: 'Food-processing plant — fire protection upgrade plan',
    excerpt:
      'Surveyed an 18,000 m² processing facility. Identified MPL scenarios and produced a phased fire protection upgrade plan adopted by the board.',
    foot: '2024 · Lead engineer: T. Mokoena',
    img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=900&q=70',
    alt: 'Industrial processing plant being surveyed by a risk engineer',
  },
  {
    category: 'property',
    tag: 'Valuation',
    meta: 'Valuation · Industrial',
    title: 'Distribution warehouse — sums-insured review',
    excerpt:
      'Reinstatement valuation of a 32,000 m² distribution facility, including racking, refrigeration and contents. Corrected a 22% underinsurance exposure.',
    foot: '2024 · Lead valuer: M. Chidziva',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=70',
    alt: 'Modern industrial warehouse undergoing insurance valuation',
  },
  {
    category: 'superintending',
    tag: 'Superintending',
    meta: 'Bulk Cargo · Superintending',
    title: 'Bulk maize discharge — independent superintending',
    excerpt:
      'Supervised the discharge of 28,000 MT of maize for a financier-backed trading desk. Independent draft survey and condition verification at quay.',
    foot: '2024 · Lead surveyor: A. Phiri',
    img: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&q=70',
    alt: 'Bulk dry cargo discharge under independent supervision',
  },
  {
    category: 'loss',
    tag: 'Loss Adjusting',
    meta: 'Retail · Water Damage',
    title: 'Multi-tenant retail — water ingress causation',
    excerpt:
      'Forensic causation analysis on water damage across a retail centre. Apportioned cost between insurers based on physical evidence and policy interpretation.',
    foot: '2025 · Lead adjuster: R. Banda',
    img: 'https://images.unsplash.com/photo-1604754742629-3e5728249d73?auto=format&fit=crop&w=900&q=70',
    alt: 'Damaged interior of a retail outlet after a water ingress event',
  },
  {
    category: 'motor',
    tag: 'Motor',
    meta: 'Agricultural Machinery',
    title: 'Combine harvester — salvage and total loss evaluation',
    excerpt:
      'Total loss assessment and salvage marketing for a high-value combine harvester. Realised salvage value 18% above benchmark.',
    foot: '2024 · Lead assessor: J. van Wyk',
    img: 'https://images.unsplash.com/photo-1574023239308-f17a4c41f44c?auto=format&fit=crop&w=900&q=70',
    alt: 'Agricultural machinery in the field, subject of a total loss evaluation',
  },
  {
    category: 'marine',
    tag: 'Marine',
    meta: 'Port Incident · Marine',
    title: 'Port handling incident — break-bulk steel damage',
    excerpt:
      'Investigated cargo handling damage to 180 MT of break-bulk steel. Joint survey produced a single recoverable quantum agreed by all parties.',
    foot: '2024 · Lead surveyor: O. Achebe',
    img: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=900&q=70',
    alt: 'Port cargo handling operations being assessed for damage claims',
  },
]

export default function Listings() {
  const [active, setActive] = useState('all')
  const visible = active === 'all' ? CASES : CASES.filter((c) => c.category === active)

  return (
    <>
      <section className="pagehero">
        <div className="container pagehero__inner">
          <div className="crumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Case Studies</span>
          </div>
          <span className="eyebrow">Recent engagements</span>
          <h1>Selected work, anonymised — illustrating how we handle each class.</h1>
          <p>
            The cases below cover the past 18 months. Client and policyholder identities are anonymised; the technical
            detail is real and representative of how we approach each matter.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="filters" role="tablist">
            <span className="filters__label">Filter by service</span>
            {FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                className={`chip${active === f.value ? ' is-active' : ''}`}
                onClick={() => setActive(f.value)}
              >
                {f.label}
              </button>
            ))}
          </Reveal>

          <div className="grid-cards">
            {visible.map((c) => (
              <Reveal as="article" key={c.title} className="card">
                <div className="card__media">
                  <span className="card__tag">{c.tag}</span>
                  <img src={c.img} alt={c.alt} />
                </div>
                <div className="card__body">
                  <span className="card__meta">{c.meta}</span>
                  <h3>{c.title}</h3>
                  <p>{c.excerpt}</p>
                  <div className="card__foot">
                    <span>{c.foot}</span>
                    <Link to="/contact">Discuss</Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Want to discuss a similar matter?</h2>
            <p>Our coordinating adjusters will tell you what we'd assign, who would lead, and what the realistic turnaround looks like — usually on the same day.</p>
          </div>
          <div className="cta-banner__actions">
            <Link className="btn btn--primary" to="/contact">
              Talk to an Adjuster <span className="arrow">→</span>
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
