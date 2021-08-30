import Div from 'components/atoms/Div'
import Text from 'components/atoms/Text'
import Card from 'components/molecules/Card'
import Select from 'components/molecules/Select'
import ProductCard from 'components/organisms/ProductCard'

import { ProductSectionProps } from './types'

const ProductSection = ({
  products,
  selectOptions,
  selectTitle,
}: ProductSectionProps) => (
  <Card
    flexDirection='column'
    w={{ xs: '100%', lg: '322px' }}
    overflowY='auto'
    h='100%'
    gap='1.6rem'
    padding='1.6rem'
  >
    <Div justifyContent='space-between'>
      <Text>Produtos</Text>
      <Select options={selectOptions} onChange={() => {}} dropdown title={selectTitle} />
    </Div>
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </Card>
)

export default ProductSection
