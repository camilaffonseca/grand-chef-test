import Image from 'next/image'

import Div from 'components/atoms/Div'
import Icon from 'components/atoms/Icon'
import Text from 'components/atoms/Text'

import { ProductCardProps } from './types'

const ProductCard = ({ product }: ProductCardProps) => (
  <Div borderWidth='1px' borderColor='black12' flexDirection='column' borderRadius='4px'>
    <Div
      alignItems='center'
      px='0.8rem'
      py='1rem'
      borderLeftWidth='1px'
      borderLeftColor={product.color}
    >
      {product.image ? (
        <Image src={product.image} alt={product.name} width='28px' height='28px' />
      ) : (
        <Icon type='broken_image' />
      )}
      <Div ml='0.8rem' w='100%' justifyContent='space-between'>
        <Div flexDirection='column'>
          <Text fontSize='1.2rem' lineHeight='1.6rem' color='black87'>
            {product.name}
          </Text>
          <Text fontSize='1rem' lineHeight='1.6rem' color='black60'>
            Quantidade: {product.quantity}
          </Text>
        </Div>
        <Div flexDirection='column' textAlign='right'>
          <Text fontSize='1rem' lineHeight='1.6rem' color='black60'>
            {product.promotion ? 'Preço / Promoção' : 'Preço'}
          </Text>
          {product.promotion && (
            <Div>
              <Text fontSize='1.2rem' lineHeight='1.6rem' color='black60'>
                R$ {product.price}/
              </Text>
              <Text fontSize='1.2rem' lineHeight='1.6rem' color='#095'>
                R$ {product.promotion}
              </Text>
            </Div>
          )}
        </Div>
      </Div>
    </Div>
    {product.spots || product.rescue ? (
      <Div
        borderTopWidth='1px'
        borderTopColor='black12'
        h='2.6rem'
        px='0.8rem'
        py='0.4rem'
        justifyContent='space-between'
      >
        {product.spots && (
          <Div>
            <Text fontSize='1rem' lineHeight='1.6rem' color='black60'>
              Pontos:
            </Text>
            <Text fontSize='1rem' lineHeight='1.6rem' color='orangePrimary75'>
              {product.spots} pts
            </Text>
          </Div>
        )}
        {product.rescue && (
          <Div>
            <Text fontSize='1rem' lineHeight='1.6rem' color='black60'>
              Resgates:
            </Text>
            <Text fontSize='1rem' lineHeight='1.6rem' color='orangePrimary75'>
              {product.rescue} pts
            </Text>
          </Div>
        )}
      </Div>
    ) : (
      ''
    )}
  </Div>
)

export default ProductCard
