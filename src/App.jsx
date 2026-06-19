import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
