import styled, { th } from '@xstyled/styled-components'

import Div from 'components/atoms/Div'

const Card = styled(Div)`
  width: 100%;
  background-color: white;
  box-shadow: 0px 1px 2px ${th.color('black12')}, 0px 1px 3px ${th.color('black24')};
`

export default Card
