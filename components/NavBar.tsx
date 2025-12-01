'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getCartItemCount } from '@/data/cart'

export default function NavBar() {
  const [cartCount, setCartCount] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(getCartItemCount())
    }
    updateCartCount()
    
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', updateCartCount)
      window.addEventListener('cartUpdated', updateCartCount)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('storage', updateCartCount)
        window.removeEventListener('cartUpdated', updateCartCount)
      }
    }
  }, [])

  return (
    <nav className="w-full bg-white/98 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-neutral-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center text-xl sm:text-2xl md:text-3xl font-bold text-primary-green hover:text-primary-dark transition-colors duration-200"
          >
            <span className="tracking-tight">Vamsi.Farms</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 h-full">
            <Link 
              href="/products" 
              className="relative text-neutral-dark hover:text-primary-green transition-colors duration-200 font-medium text-base lg:text-lg h-full flex items-center group"
            >
              <span className="relative">
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-green transition-all duration-200 group-hover:w-full"></span>
              </span>
            </Link>
            <Link 
              href="/cart" 
              className="relative text-neutral-dark hover:text-primary-green transition-colors duration-200 h-full flex items-center group"
            >
              <div className="relative p-2 rounded-lg group-hover:bg-neutral-light/50 transition-colors duration-200">
                <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary-green text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg animate-pulse">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3 h-full">
            <Link 
              href="/cart" 
              className="relative text-neutral-dark hover:text-primary-green transition-colors duration-200 flex items-center h-full"
            >
              <div className="relative p-2 rounded-lg hover:bg-neutral-light/50 transition-colors duration-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary-green text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </div>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-dark hover:text-primary-green transition-colors duration-200 p-2 rounded-lg hover:bg-neutral-light/50 flex items-center justify-center h-10 w-10"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-light/50 animate-in slide-in-from-top duration-200">
            <div className="py-2">
              <Link
                href="/products"
                className="block py-3 px-4 text-neutral-dark hover:text-primary-green hover:bg-neutral-light/50 rounded-lg transition-colors duration-200 font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
