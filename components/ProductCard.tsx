'use client'

import Link from 'next/link'
import { Product } from '@/data/products'
import Button from './Button'
import Badge from './Badge'
import { addToCart } from '@/data/cart'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    addToCart(product, 1)
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('cartUpdated'))
    }
  }

  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer h-full flex flex-col border border-neutral-light hover:border-primary-green/20 group">
        <div className="relative h-48 sm:h-56 bg-neutral-light overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-4 left-4">
            <Badge label="Organic" variant="organic" />
          </div>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-6 flex-1 flex flex-col">
          <h3 className="text-base sm:text-lg font-bold text-neutral-dark mb-2 line-clamp-2 group-hover:text-primary-green transition-colors">
            {product.name}
          </h3>
          <div className="flex items-baseline gap-2 mb-3 sm:mb-4">
            <p className="text-xl sm:text-2xl font-bold text-primary-green">
              ₹{product.price}
            </p>
            <span className="text-xs sm:text-sm text-neutral-grey line-through opacity-60">₹{Math.round(product.price * 1.2)}</span>
          </div>
          <div className="mt-auto">
            <Button
              onClick={handleAddToCart}
              variant="primary"
              size="small"
              className="w-full group-hover:scale-105 transition-transform"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}
