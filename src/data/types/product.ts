export type ProductProps = {
  id: number
  title: string
  slug: string
  price: number
  image: string
  description: string
  featured: boolean
}

export type SearchProps = {
  searchParams: {
    q: string
  }
}
