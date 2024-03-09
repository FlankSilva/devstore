type PriceFormattedProps = {
  price: string | number | null
  formattedCents?: boolean
}

export function PriceFormatted({
  price,
  formattedCents = true,
}: PriceFormattedProps) {
  if (price) {
    let formattedPrice: string

    if (typeof price === 'string' || typeof price === 'number') {
      formattedPrice = Number(price).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: formattedCents ? 0 : 2,
        maximumFractionDigits: formattedCents ? 0 : 2,
      })
    } else {
      throw new Error('Invalid price type. Must be string or number.')
    }

    return formattedPrice
  }
}
