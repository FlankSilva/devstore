'use client'

import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { api } from '@/data/api'
import { ProductProps, SearchProps } from '@/data/types/product'
import { PriceFormatted } from '@/utils/formattedPrice'
import { Suspense } from 'react'

async function searchProducts(query: string): Promise<ProductProps[]> {
  const response = await api(`/products/search?q=${query}`, {
    cache: 'default',
  })
  const products = await response.json()

  return products
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para:{' '}
        <span className="font-semibold">
          <Suspense>{query}</Suspense>
        </span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
            >
              <Image
                src={product.image}
                className="group-hover:scale-105 transition-transforme duration-500"
                width={480}
                height={480}
                quality={100}
                alt=""
              />

              <div className="absolute bottom-28 right-16 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
                <span className="text-sm truncate">{product.title}</span>
                <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                  {PriceFormatted({ price: product.price })}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
