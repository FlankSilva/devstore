import { CardProduct } from '@/components/card-product'
import Stripe from 'stripe'
import { stripe } from '@/data/stripe'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

async function getFeaturedProducts() {
  const { data } = await stripe.products.list({
    expand: ['data.default_price'],
    active: true,
  })

  const products = data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0] || '',
      price: price.unit_amount ? price.unit_amount / 100 : null,
    }
  })

  return products
}

export default async function Home() {
  const products = await getFeaturedProducts()

  return (
    <section className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      {products.map((product, index) => {
        if (index === 0) {
          return (
            <CardProduct
              key={product.id}
              className="col-span-6 row-span-6"
              link={`/product/${product.name}`}
              img={product.imageUrl}
            />
          )
        } else {
          return (
            <CardProduct
              key={product.id}
              className="col-span-3 row-span-3"
              link={`/product/${product.name}`}
              img={product.imageUrl}
            />
          )
        }
      })}
    </section>
  )
}
