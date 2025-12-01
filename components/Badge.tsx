interface BadgeProps {
  label: string
  variant?: 'organic' | 'pure' | 'natural'
  className?: string
}

export default function Badge({ label, variant = 'organic', className = '' }: BadgeProps) {
  const variants = {
    organic: 'bg-primary-green text-white',
    pure: 'bg-primary-light text-white',
    natural: 'bg-neutral-beige text-primary-green border border-primary-green',
  }

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}>
      {label}
    </span>
  )
}

