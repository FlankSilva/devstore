import { CardProduct } from '@/components/card-product'
import { Metadata } from 'next'
import { api } from '@/data/api'
import { ProductProps } from '@/data/types/product'

export const metadata: Metadata = {
  title: 'Home',
}

async function getFeaturedProducts(): Promise<ProductProps[]> {
  const response = await api('/products/featured', {
    cache: 'default',
  })

  const products = await response.json()

  return products
}

export default async function Home() {
  const [highlightsProducts, ...outherProducts] = await getFeaturedProducts()

  console.log(highlightsProducts)

  return (
    <section className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <CardProduct
        key={highlightsProducts.id}
        className="col-span-6 row-span-6"
        link={`/product/${highlightsProducts.slug}`}
        img={highlightsProducts.image}
      />

      {outherProducts.map((product) => (
        <CardProduct
          key={product.id}
          className="col-span-3 row-span-3"
          link={`/product/${product.slug}`}
          img={product.image}
        />
      ))}
    </section>
  )
}
