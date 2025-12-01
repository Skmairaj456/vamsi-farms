import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  className?: string
  type?: 'button' | 'submit'
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'medium',
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95'
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-green to-primary-dark text-white hover:from-primary-dark hover:to-primary-green focus:ring-primary-green shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-primary-green hover:bg-neutral-light focus:ring-primary-green shadow-lg hover:shadow-xl border-2 border-primary-green/20',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-primary-green focus:ring-white backdrop-blur-sm bg-white/10',
  }
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  }
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }
  
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
