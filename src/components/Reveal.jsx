import { useEffect, useRef } from 'react'

export default function Reveal({ as: Tag = 'div', className = '', ref: forwardedRef, children, ...props }) {
  const innerRef = useRef(null)

  useEffect(() => {
    const el = innerRef.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const setRef = (node) => {
    innerRef.current = node
    if (typeof forwardedRef === 'function') forwardedRef(node)
    else if (forwardedRef) forwardedRef.current = node
  }

  const cls = `reveal${className ? ` ${className}` : ''}`
  return (
    <Tag ref={setRef} className={cls} {...props}>
      {children}
    </Tag>
  )
}
