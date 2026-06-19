export default function Logo({ smallColor }) {
  return (
    <>
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 104 104" xmlns="http://www.w3.org/2000/svg">
          <rect width="104" height="104" rx="6" ry="6" fill="#0B1F3B" />
          <polygon points="14 88 52 16 52 42 36 74 52 74 52 88 14 88" fill="#8D0C16" />
          <polygon points="90 88 52 16 52 42 66 70 56 70 56 80 70 80 76 88 90 88" fill="#FFFFFF" />
          <circle cx="52" cy="97" r="3" fill="#FFFFFF" />
        </svg>
      </span>
      <span className="logo__text">
        <span>Assesspro</span>
        <small style={smallColor ? { color: smallColor } : undefined}>Consultants</small>
      </span>
    </>
  )
}
