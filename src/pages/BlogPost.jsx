import { Link, useParams } from 'react-router-dom'
import { getPost, formatPostDate } from '../lib/blog.js'
import NotFound from './NotFound.jsx'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) return <NotFound />

  return (
    <section className="section">
      <div className="container">
        <article className="post">
          <div className="crumbs" style={{ marginBottom: '1rem' }}>
            <Link to="/blog">Blog</Link>
            <span>/</span>
            <span>{post.title}</span>
          </div>
          <h1>{post.title}</h1>
          <p className="post__meta">
            {formatPostDate(post.date)}
            {' · '}
            {post.author}
          </p>
          {post.cover && (
            <img
              src={post.cover}
              alt=""
              style={{ width: '100%', borderRadius: 12, marginBottom: '2rem' }}
            />
          )}
          <div className="post__body" dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </div>
    </section>
  )
}
