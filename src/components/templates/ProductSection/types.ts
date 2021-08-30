import type { Options } from 'components/molecules/Select/types'
import type { ProductProps } from 'components/organisms/ProductCard/types'

export type ProductSectionProps = {
  products: ProductProps[]
  selectTitle: string
  selectOptions: Options
}
