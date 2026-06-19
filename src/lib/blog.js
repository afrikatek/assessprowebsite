import fm from 'front-matter'
import { marked } from 'marked'

const modules = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

marked.setOptions({ gfm: true, breaks: false })

function fileToPost(path, raw) {
  const slug = path.split('/').pop().replace(/\.md$/, '')
  const parsed = fm(raw)
  const data = parsed.attributes || {}
  const date = data.date instanceof Date ? data.date : new Date(data.date)
  return {
    slug,
    title: data.title,
    description: data.description,
    date,
    author: data.author || 'Assesspro Editor',
    draft: data.draft === true,
    cover: data.cover,
    body: parsed.body,
  }
}

const ALL_POSTS = Object.entries(modules)
  .map(([path, raw]) => fileToPost(path, raw))
  .filter((p) => !p.draft)
  .sort((a, b) => b.date.getTime() - a.date.getTime())

export function getAllPosts() {
  return ALL_POSTS
}

export function getPost(slug) {
  const post = ALL_POSTS.find((p) => p.slug === slug)
  if (!post) return null
  return { ...post, html: marked.parse(post.body) }
}

export function formatPostDate(date) {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}
