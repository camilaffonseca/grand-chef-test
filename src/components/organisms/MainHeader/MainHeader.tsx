import { createGlobalStyle } from '@xstyled/styled-components'

import Header from 'components/atoms/Header'
import Icon from 'components/atoms/Icon'
import Text from 'components/atoms/Text'

import { MainHeaderProps } from './types'

const HeaderGlobalStyle = createGlobalStyle`
  body {
    padding-top: 5.6rem !important;
  }
`

const MainHeader = ({ title }: MainHeaderProps) => (
  <>
    <HeaderGlobalStyle />
    <Header position='fixed' top='0'>
      <Icon fontSize='2.4rem' type='menu' />
      <Text ml='3.2rem' fontWeight='500' fontSize='2rem' color='black87'>
        {title}
      </Text>
    </Header>
  </>
)

export default MainHeader
