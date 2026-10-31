export function IconArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 6h7.5M6.5 2.5 10 6l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconArrowCircle({ className }: { className?: string }) {
  return (
    <span className={className ?? 'icon-arrow-circle'}>
      <IconArrow />
    </span>
  )
}
