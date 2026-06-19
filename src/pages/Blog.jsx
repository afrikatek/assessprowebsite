import { Link } from 'react-router-dom'
import { getAllPosts, formatPostDate } from '../lib/blog.js'

export default function Blog() {
  const posts = getAllPosts()
  return (
    <>
      <section className="pagehero blog-hero">
        <div className="container pagehero__inner">
          <div className="crumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Blog</span>
          </div>
          <span className="eyebrow">Field notes</span>
          <h1>Insights from the practice.</h1>
          <p>Observations from real files — loss adjusting, valuation, risk surveys and claims across the SADC region.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {posts.length === 0 ? (
            <p>No posts yet. Check back soon.</p>
          ) : (
            <div className="blog-grid">
              {posts.map((post) => (
                <Link key={post.slug} className="blog-card" to={`/blog/${post.slug}`}>
                  <h3>{post.title}</h3>
                  <p className="blog-card__meta">
                    {formatPostDate(post.date)}
                    {' · '}
                    {post.author}
                  </p>
                  {post.description && <p className="blog-card__excerpt">{post.description}</p>}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
