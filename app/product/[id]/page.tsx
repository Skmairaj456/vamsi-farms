'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import Badge from '@/components/Badge'
import { products } from '@/data/products'
import { addToCart } from '@/data/cart'

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [product, setProduct] = useState(products.find(p => p.id === params.id))

  useEffect(() => {
    const foundProduct = products.find(p => p.id === params.id)
    if (!foundProduct) {
      router.push('/products')
    } else {
      setProduct(foundProduct)
    }
  }, [params.id, router])

  if (!product) {
    return null
  }

  const handleAddToCart = () => {
    addToCart(product, 1)
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('cartUpdated'))
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-light shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
              <Badge label="100% Natural" variant="natural" />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-dark mb-3 sm:mb-4">
              {product.name}
            </h1>
            <p className="text-2xl sm:text-3xl font-bold text-primary-green mb-4 sm:mb-6">
              ₹{product.price}
            </p>

            {/* Batch Info */}
            <div className="bg-neutral-beige rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
              <p className="text-xs sm:text-sm text-neutral-grey">
                Batch #{product.batchNumber} · Packed Today · Natural Purity Guaranteed
              </p>
            </div>

            {/* Description */}
            <p className="text-neutral-grey mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Benefits */}
            {product.benefits && product.benefits.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                  Key Benefits
                </h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-neutral-grey">
                      <svg className="w-5 h-5 text-primary-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              variant="primary"
              size="large"
              className="w-full mb-6 sm:mb-8"
            >
              Add to Cart
            </Button>

            {/* Nutrition & Purity Info */}
            {product.nutritionInfo && (
              <div className="bg-white border-2 border-neutral-light rounded-xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-dark mb-3 sm:mb-4">
                  Nutrition & Purity Info
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between">
                    <span className="text-neutral-grey">Purity</span>
                    <span className="font-semibold text-neutral-dark">{product.nutritionInfo.purity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-grey">Origin</span>
                    <span className="font-semibold text-neutral-dark">{product.nutritionInfo.origin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-grey">Shelf Life</span>
                    <span className="font-semibold text-neutral-dark">{product.nutritionInfo.shelfLife}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Usage Suggestions / Recipes / Benefits */}
        {product.usageSuggestions && product.usageSuggestions.length > 0 && (
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-dark mb-4 sm:mb-6">
              Usage Suggestions / Recipes / Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {product.usageSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="bg-neutral-beige border-2 border-neutral-light rounded-xl p-4 sm:p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">
                      {index + 1}
                    </div>
                    <p className="text-sm sm:text-base text-neutral-dark leading-relaxed">{suggestion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

