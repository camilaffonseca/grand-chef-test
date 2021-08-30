export type ProductProps = {
  id: number
  name: string
  image?: string
  quantity: number
  price: number
  promotion?: number
  spots?: number
  rescue?: number
  color: string
}

export type ProductCardProps = {
  product: ProductProps
}
