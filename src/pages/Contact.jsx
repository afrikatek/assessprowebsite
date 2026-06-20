import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

const TURNSTILE_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || ''

function useTurnstileScript() {
  useEffect(() => {
    if (typeof document === 'undefined') return
    if (document.querySelector(`script[src="${TURNSTILE_SRC}"]`)) return
    const s = document.createElement('script')
    s.src = TURNSTILE_SRC
    s.async = true
    s.defer = true
    document.head.appendChild(s)
  }, [])
}

export default function Contact() {
  useTurnstileScript()
  const formRef = useRef(null)
  const [status, setStatus] = useState({
    color: 'var(--navy-70)',
    msg: 'We respond to all enquiries within one business day.',
  })
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = formRef.current
    if (!form) return
    const data = Object.fromEntries(new FormData(form).entries())

    if (!data.name || !data.email || !data.message) {
      setStatus({ color: '#8D0C16', msg: 'Please complete the required fields.' })
      return
    }

    setSubmitting(true)
    setStatus({ color: '#0B1F3B', msg: 'Sending…' })

    try {
      const payload = Object.fromEntries(new FormData(form).entries())
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const body = await res.json().catch(() => ({}))

      if (res.ok && body.ok) {
        const firstName = String(data.name).split(' ')[0]
        setStatus({
          color: '#0B1F3B',
          msg: `Thank you, ${firstName}. Our team will respond within one business day.`,
        })
        form.reset()
      } else {
        const err = body.error || 'unknown'
        const msg =
          err === 'turnstile_failed'
            ? 'Please complete the security check and try again.'
            : err === 'missing_or_invalid_fields'
              ? 'Please check that your name, email and message are filled in correctly.'
              : 'Sorry, we could not send your enquiry. Please email admin@assessproconsultants.com directly.'
        setStatus({ color: '#8D0C16', msg })
      }
    } catch {
      setStatus({ color: '#8D0C16', msg: 'Network error. Please check your connection and try again.' })
    } finally {
      if (typeof window !== 'undefined' && window.turnstile) {
        try { window.turnstile.reset() } catch { /* ignore */ }
      }
      setSubmitting(false)
    }
  }

  return (
    <>
      <section className="pagehero">
        <div className="container pagehero__inner">
          <div className="crumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <span className="eyebrow">Get in touch</span>
          <h1>Send the matter. We will respond within one business day.</h1>
          <p>
            Field instructions are accepted 24/7 across Zambia, South Africa and the wider SADC region. For routine
            enquiries and consultations, please complete the form below or call our offices directly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <Reveal as="form" id="contact-form" ref={formRef} className="form" noValidate onSubmit={onSubmit}>
              <h2>Tell us about your matter</h2>
              <p className="form__intro">
                A senior adjuster will review your enquiry and respond with the team we would assign, the realistic
                turnaround, and any evidence that should be preserved in the meantime.
              </p>

              <div className="form__row">
                <div className="form__field">
                  <label htmlFor="name">Full name *</label>
                  <input id="name" name="name" type="text" required placeholder="e.g. Sarah Mberi" autoComplete="name" />
                </div>
                <div className="form__field">
                  <label htmlFor="organisation">Organisation</label>
                  <input id="organisation" name="organisation" type="text" placeholder="e.g. Apex Reinsurance" autoComplete="organization" />
                </div>
              </div>

              <div className="form__row">
                <div className="form__field">
                  <label htmlFor="email">Email *</label>
                  <input id="email" name="email" type="email" required placeholder="you@company.com" autoComplete="email" />
                </div>
                <div className="form__field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" placeholder="+260 769 569 641" autoComplete="tel" />
                </div>
              </div>

              <div className="form__field">
                <label htmlFor="service">Service required</label>
                <select id="service" name="service" defaultValue="">
                  <option value="">Select a service</option>
                  <option>Loss Adjusting</option>
                  <option>Motor Assessing</option>
                  <option>Property Valuation</option>
                  <option>Risk Management Survey</option>
                  <option>Joint Survey</option>
                  <option>Marine Claim</option>
                  <option>Sampling &amp; Superintending</option>
                  <option>Other / General Enquiry</option>
                </select>
              </div>

              <div className="form__field">
                <label htmlFor="message">Brief description of the matter *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Date of loss, location, class of insurance, and any other context that will help us respond."
                  rows={6}
                />
              </div>

              <div
                className="form__hp"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}
              >
                <label htmlFor="website">Leave this field empty</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              {TURNSTILE_SITE_KEY && (
                <div
                  className="cf-turnstile"
                  data-sitekey={TURNSTILE_SITE_KEY}
                  data-theme="light"
                  data-size="flexible"
                  style={{ margin: '8px 0 16px' }}
                />
              )}

              <button className="btn btn--primary" type="submit" disabled={submitting}>
                Submit Enquiry <span className="arrow">→</span>
              </button>
              <p id="form-status" className="form__note" aria-live="polite" style={{ color: status.color }}>
                {status.msg}
              </p>
            </Reveal>

            <Reveal as="aside" className="contact-info">
              <div className="info-card">
                <span className="info-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+260769569641">+260 769 569 641</a> &nbsp;·&nbsp;
                    <span style={{ color: 'var(--navy-70)', fontSize: '0.9rem' }}>Work</span>
                    <br />
                    <a href="tel:+260772996725">+260 772 996 725</a> &nbsp;·&nbsp;
                    <span style={{ color: 'var(--navy-70)', fontSize: '0.9rem' }}>Mobile / 24-hour duty line</span>
                  </p>
                </div>
              </div>
              <div className="info-card">
                <span className="info-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M3 6l9 7 9-7" />
                  </svg>
                </span>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:admin@assessproconsultants.com">admin@assessproconsultants.com</a> &nbsp;·&nbsp;
                    <span style={{ color: 'var(--navy-70)', fontSize: '0.9rem' }}>General enquiries</span>
                    <br />
                    <a href="mailto:blessings@assessproconsultants.com">blessings@assessproconsultants.com</a>{' '}
                    &nbsp;·&nbsp;
                    <span style={{ color: 'var(--navy-70)', fontSize: '0.9rem' }}>Managing Consultant</span>
                  </p>
                </div>
              </div>
              <div className="info-card">
                <span className="info-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 22s8-7 8-13a8 8 0 0 0-16 0c0 6 8 13 8 13z" />
                    <circle cx="12" cy="9" r="3" />
                  </svg>
                </span>
                <div>
                  <h4>Lusaka — Head office</h4>
                  <p>
                    6th Floor, ZEP RE Business Park
                    <br />
                    Lusaka, Zambia
                  </p>
                </div>
              </div>
              <div className="info-card">
                <span className="info-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 22s8-7 8-13a8 8 0 0 0-16 0c0 6 8 13 8 13z" />
                    <circle cx="12" cy="9" r="3" />
                  </svg>
                </span>
                <div>
                  <h4>Kitwe — Copperbelt branch</h4>
                  <p>
                    Plot 788 Ndeke Village
                    <br />
                    Kitwe, Zambia
                  </p>
                </div>
              </div>
              <div className="info-card">
                <span className="info-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>
                <div>
                  <h4>24/7 field instructions</h4>
                  <p>
                    <a href="tel:+260772996725">+260 772 996 725</a>
                    <br />
                    <span style={{ color: 'var(--navy-70)', fontSize: '0.95rem' }}>
                      Marine, fleet and major property losses · across SADC
                    </span>
                  </p>
                </div>
              </div>
              <div className="info-card">
                <span className="info-card__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.5 0h4.37v1.92h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.48 3.04 5.48 7v7.45h-4.56v-6.6c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22H7.72V8z" />
                  </svg>
                </span>
                <div>
                  <h4>Follow us</h4>
                  <p style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                    <a href="#">LinkedIn</a>
                    <a href="#">X / Twitter</a>
                    <a href="#">YouTube</a>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section--tint" style={{ padding: '0 0 clamp(64px, 9vw, 120px)' }}>
        <div className="container">
          <Reveal className="sec-head" style={{ marginTop: 'clamp(48px, 7vw, 88px)' }}>
            <div>
              <span className="eyebrow">Find us</span>
              <h2>Lusaka — head office.</h2>
            </div>
            <div className="sec-head__body">
              <p>
                Visits by appointment. Our field teams deploy from Lusaka and the Copperbelt across Zambia and the SADC
                region — let us know where the matter is, and we will respond from the nearest base.
              </p>
            </div>
          </Reveal>
          <Reveal className="map">
            <iframe
              title="Assesspro Consultants — ZEP RE Business Park, Lusaka, Zambia"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=ZEP+RE+Business+Park,+Lusaka,+Zambia&output=embed"
            />
          </Reveal>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Have a time-sensitive matter?</h2>
            <p>
              Marine cargo, fleet incidents and major property losses can be instructed 24/7 via our duty line. Evidence
              preservation begins the moment we are notified.
            </p>
          </div>
          <div className="cta-banner__actions">
            <a className="btn btn--primary" href="tel:+260772996725">
              Call Duty Line <span className="arrow">→</span>
            </a>
            <a className="btn btn--ghost" href="#contact-form">
              Send a Brief
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
