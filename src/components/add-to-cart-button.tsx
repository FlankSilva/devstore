'use client'

import { useCart } from '@/contexts/cart-context'

export type AddToCartButtonProps = {
  productId: number
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart, items } = useCart()

  function handleAddProductCart() {
    console.log(items.length)
    addToCart(productId)
  }

  return (
    <button
      type="button"
      className={`
        mt-8
        flex
        h-12
        items-center
        justify-center
        rounded-full
        bg-emerald-600
        font-semibold
        text-white
      `}
      onClick={handleAddProductCart}
    >
      Adicionar ao carrinho
    </button>
  )
}
