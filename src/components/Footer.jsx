import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="logo">
              <Logo smallColor="var(--silver)" />
            </div>
            <p>
              Independent loss adjusting, claims management, valuation and risk consulting — serving insurers,
              reinsurers and brokers across the SADC region from offices in Zambia and South Africa.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.5 0h4.37v1.92h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.48 3.04 5.48 7v7.45h-4.56v-6.6c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22H7.72V8z" />
                </svg>
              </a>
              <a href="#" aria-label="X / Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2H21.5l-7.534 8.617L23 22h-6.945l-5.43-7.09L4.4 22H1.14l8.06-9.218L1 2h7.116l4.91 6.49L18.244 2zm-1.215 18h1.832L7.06 4H5.118L17.03 20z" />
                </svg>
              </a>
              <a href="mailto:admin@assessproconsultants.com" aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
                  <path d="M3 6l9 7 9-7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer__col">
            <h4>Pages</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/listings">Case Studies</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services#loss-adjusting">Loss Adjusting</Link></li>
              <li><Link to="/services#motor-assessing">Motor Assessing</Link></li>
              <li><Link to="/services#valuation">Property Valuation</Link></li>
              <li><Link to="/services#risk">Risk Management Surveys</Link></li>
              <li><Link to="/services#marine">Marine Claims</Link></li>
              <li><Link to="/services#superintending">Sampling &amp; Superintending</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Get in touch</h4>
            <ul>
              <li><a href="mailto:admin@assessproconsultants.com">admin@assessproconsultants.com</a></li>
              <li><a href="tel:+260769569641">+260 769 569 641</a></li>
              <li>Mon–Fri · 08:00 – 17:30</li>
              <li>Field instructions 24/7</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Assesspro Consultants Ltd. All rights reserved.</span>
          <span>Registered No. 2026/LA/09 · Zambia &amp; South Africa</span>
        </div>
      </div>
    </footer>
  )
}
