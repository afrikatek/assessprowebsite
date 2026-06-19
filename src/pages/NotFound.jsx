import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="pagehero">
      <div className="container pagehero__inner">
        <div className="crumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>404</span>
        </div>
        <span className="eyebrow">Page not found</span>
        <h1>That page isn't here.</h1>
        <p>The link may be out of date. Return to the homepage or browse our services.</p>
        <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
          <Link className="btn btn--primary" to="/">
            Back to home <span className="arrow">→</span>
          </Link>
          <Link className="btn btn--ghost" to="/services">
            Browse services
          </Link>
        </div>
      </div>
    </section>
  )
}
