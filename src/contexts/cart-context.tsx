'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

type CartItem = {
  productId: number
  quantity: number
}

type CartContextType = {
  items: CartItem[]
  selectSize: string
  setSelectSize: (size: string) => void
  addToCart: (productId: number) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [selectSize, setSelectSize] = useState('')

  console.log(cartItems)

  function addToCart(productId: number) {
    if (selectSize) {
      setCartItems((state) => {
        const productInCart = state.some((item) => item.productId === productId)

        if (productInCart) {
          return state.map((item) => {
            if (item.productId === productId) {
              return { ...item, quantity: item.quantity + 1, size: selectSize }
            } else {
              return item
            }
          })
        } else {
          return [...state, { productId, quantity: 1, size: selectSize }]
        }
      })
    }
  }

  return (
    <CartContext.Provider
      value={{ items: cartItems, addToCart, selectSize, setSelectSize }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
