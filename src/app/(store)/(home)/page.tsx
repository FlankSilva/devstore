import { CardProduct } from '@/components/card-product'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  return (
    <section className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <CardProduct
        colSpan={6}
        rowSpan={6}
        link="/"
        img="/moletom-never-stop-learning 1.png"
      />
      <CardProduct colSpan={3} rowSpan={3} link="/" img="/moletom-java.png" />
      <CardProduct
        colSpan={3}
        rowSpan={3}
        link="/"
        img="/moletom-ai-side.png"
      />
    </section>
  )
}
