import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Listings from './pages/Listings.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import NotFound from './pages/NotFound.jsx'
import { getAllPosts } from './lib/blog.js'

export const routes = [
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'services', Component: Services },
      { path: 'listings', Component: Listings },
      { path: 'contact', Component: Contact },
      { path: 'blog', Component: Blog },
      {
        path: 'blog/:slug',
        Component: BlogPost,
        getStaticPaths() {
          return getAllPosts().map((post) => `/blog/${post.slug}`)
        },
      },
      { path: '*', Component: NotFound },
    ],
  },
]
