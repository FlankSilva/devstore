'use client'

import { useCart } from '@/contexts/cart-context'

type ButtonSelectProductSizesProps = {
  title: string
}

export function ButtonSelectProductSizes({
  title,
}: ButtonSelectProductSizesProps) {
  const { selectSize, setSelectSize } = useCart()

  return (
    <button
      type="button"
      onClick={() => setSelectSize(title)}
      className={`
        flex
        h-9
        w-14
        items-center
        justify-center
        rounded-full
        border
        border-zinc-700
        text-sm
        font-semibold
        ${selectSize === title ? 'bg-emerald-600' : 'bg-zinc-800'}
      `}
    >
      {title}
    </button>
  )
}
