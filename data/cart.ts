import { Product } from './products'

export interface CartItem {
  product: Product
  quantity: number
}

export interface Cart {
  items: CartItem[]
}

let cart: Cart = {
  items: [],
}

export const getCart = (): Cart => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('vamshi-farms-cart')
    if (stored) {
      cart = JSON.parse(stored)
    }
  }
  return cart
}

export const addToCart = (product: Product, quantity: number = 1): void => {
  const currentCart = getCart()
  const existingItem = currentCart.items.find(item => item.product.id === product.id)
  
  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    currentCart.items.push({ product, quantity })
  }
  
  cart = currentCart
  if (typeof window !== 'undefined') {
    localStorage.setItem('vamshi-farms-cart', JSON.stringify(cart))
  }
}

export const updateCartItem = (productId: string, quantity: number): void => {
  const currentCart = getCart()
  const item = currentCart.items.find(item => item.product.id === productId)
  
  if (item) {
    if (quantity <= 0) {
      currentCart.items = currentCart.items.filter(item => item.product.id !== productId)
    } else {
      item.quantity = quantity
    }
  }
  
  cart = currentCart
  if (typeof window !== 'undefined') {
    localStorage.setItem('vamshi-farms-cart', JSON.stringify(cart))
  }
}

export const removeFromCart = (productId: string): void => {
  const currentCart = getCart()
  currentCart.items = currentCart.items.filter(item => item.product.id !== productId)
  
  cart = currentCart
  if (typeof window !== 'undefined') {
    localStorage.setItem('vamshi-farms-cart', JSON.stringify(cart))
  }
}

export const clearCart = (): void => {
  cart = { items: [] }
  if (typeof window !== 'undefined') {
    localStorage.removeItem('vamshi-farms-cart')
  }
}

export const getCartTotal = (): number => {
  const currentCart = getCart()
  return currentCart.items.reduce((total, item) => {
    return total + (item.product.price * item.quantity)
  }, 0)
}

export const getCartItemCount = (): number => {
  const currentCart = getCart()
  return currentCart.items.reduce((count, item) => count + item.quantity, 0)
}
