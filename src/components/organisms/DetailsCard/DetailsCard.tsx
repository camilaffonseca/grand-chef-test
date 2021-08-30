import Div from 'components/atoms/Div'
import Icon from 'components/atoms/Icon'
import Text from 'components/atoms/Text'
import BasicCard from 'components/molecules/Card'

import { CardProps } from './types'

const DetailsCard = ({ iconName, title, text, ...props }: CardProps) => (
  <BasicCard
    h='8.6rem'
    gap='2.1rem'
    alignItems='center'
    w='100%'
    padding='21px'
    {...props}
  >
    <Icon color='black60' fontSize='4.5rem' type={iconName} />
    <Div flexDirection='column'>
      <Text color='black60' fontSize='1.2rem' lineHeight='1.6rem'>
        {title}
      </Text>
      <Text
        color='black60'
        fontSize='2rem'
        lineHeight='1.3rem'
        fontWeight='500'
        mt='0.4rem'
      >
        {text}
      </Text>
    </Div>
  </BasicCard>
)

export default DetailsCard
