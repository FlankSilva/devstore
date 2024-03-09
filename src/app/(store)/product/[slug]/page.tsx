import Image from 'next/image'

import { AddToCartButton } from '@/components/add-to-cart-button'
import { ButtonSelectProductSizes } from '@/components/button-select-product-sizes'
import { PriceFormatted } from '@/utils/formattedPrice'
import { api } from '@/data/api'
import { ProductProps } from '@/data/types/product'

const listSizesButton = ['P', 'M', 'G', 'GG']

type ProductPropsParams = {
  params: {
    slug: string
  }
}

async function getFeaturedProducts(slug: string): Promise<ProductProps> {
  const response = await api(`/products/${slug}`, {
    cache: 'default',
  })

  const product = await response.json()

  return product
}

export default async function ProductPage({ params }: ProductPropsParams) {
  const product = await getFeaturedProducts(params.slug)

  return (
    <section className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {PriceFormatted({
              price: product.price,
              formattedCents: true,
            })}
          </span>
          <span className="text-sm text-zinc-400">
            Em 12x sem juros de{' '}
            {(Number(product.price) / 12).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span>Tamanhos</span>

          <div className="flex gap-2">
            {listSizesButton.map((size) => (
              <ButtonSelectProductSizes key={size} title={size} />
            ))}
          </div>
        </div>

        <AddToCartButton productId={product.id} />
      </div>
    </section>
  )
}
