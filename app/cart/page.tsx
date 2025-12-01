'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import { getCart, updateCartItem, removeFromCart, getCartTotal, CartItem } from '@/data/cart'

export default function CartPage() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const loadCart = () => {
      const cart = getCart()
      setCartItems(cart.items)
      setTotal(getCartTotal())
    }
    loadCart()

    if (typeof window !== 'undefined') {
      window.addEventListener('cartUpdated', loadCart)
      window.addEventListener('storage', loadCart)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('cartUpdated', loadCart)
        window.removeEventListener('storage', loadCart)
      }
    }
  }, [])

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateCartItem(productId, newQuantity)
    const cart = getCart()
    setCartItems(cart.items)
    setTotal(getCartTotal())
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('cartUpdated'))
    }
  }

  const handleRemove = (productId: string) => {
    removeFromCart(productId)
    const cart = getCart()
    setCartItems(cart.items)
    setTotal(getCartTotal())
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('cartUpdated'))
    }
  }

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!')
      return
    }
    alert('Thank you for your order! This is a demo - checkout functionality would be implemented here.')
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <NavBar />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-dark mb-3 sm:mb-4">Your Cart</h1>
          <p className="text-lg sm:text-xl text-neutral-grey mb-6 sm:mb-8">Your cart is empty</p>
          <Button href="/products" variant="primary" size="large" className="w-full sm:w-auto">
            Start Shopping
          </Button>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-dark mb-6 sm:mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.product.id}
                className="bg-white border-2 border-neutral-light rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md"
              >
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="w-full sm:w-32 h-32 bg-neutral-light rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-neutral-dark">
                        {item.product.name}
                      </h3>
                      <button
                        onClick={() => handleRemove(item.product.id)}
                        className="text-neutral-grey hover:text-red-500 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-lg font-bold text-primary-green mb-4">
                      ₹{item.product.price}
                    </p>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="text-sm sm:text-base text-neutral-grey">Quantity:</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                          className="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-neutral-light hover:bg-neutral-grey hover:text-white transition-colors flex items-center justify-center text-lg sm:text-base"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="w-8 sm:w-8 text-center font-semibold text-base sm:text-base">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                          className="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-neutral-light hover:bg-primary-green hover:text-white transition-colors flex items-center justify-center text-lg sm:text-base"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-neutral-grey">
                      Subtotal: ₹{item.product.price * item.quantity}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-neutral-beige border-2 border-neutral-light rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-md lg:sticky lg:top-24">
              <h2 className="text-2xl font-bold text-neutral-dark mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-neutral-grey">
                  <span>Subtotal</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between text-neutral-grey">
                  <span>Delivery</span>
                  <span className="text-primary-green font-semibold">Free</span>
                </div>
                <div className="border-t-2 border-neutral-light pt-4">
                  <div className="flex justify-between text-xl font-bold text-neutral-dark">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleCheckout}
                variant="primary"
                size="large"
                className="w-full"
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
