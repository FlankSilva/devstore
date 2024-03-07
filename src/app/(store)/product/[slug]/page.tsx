import { AddToCartButton } from '@/components/add-to-cart-button'
import { ButtonSelectProductSizes } from '@/components/button-select-product-sizes'
import Image from 'next/image'

const listSizesButton = ['P', 'M', 'G', 'GG']

export default async function ProductPage() {
  return (
    <section className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src="/moletom-never-stop-learning 1.png"
          alt="Moletom Never Stop Learning"
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
          Moletom Never Stop Learning
        </h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            R$ 59,90
          </span>
          <span className="text-sm text-zinc-400">
            Em 12x sem juros R$ 5,99
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

        <AddToCartButton />
      </div>
    </section>
  )
}
