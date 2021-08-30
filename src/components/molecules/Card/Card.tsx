import styled, { th } from '@xstyled/styled-components'

import Div from 'components/atoms/Div'

const Card = styled(Div)`
  box-shadow: 0px 1px 2px ${th.color('black12')}, 0px 1px 3px ${th.color('black24')};
  border-radius: 4px;
`

Card.defaultProps = {
  bg: 'white',
}

export default Card
