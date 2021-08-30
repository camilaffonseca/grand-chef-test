import styled from '@xstyled/styled-components'

import type { IconProps } from './types'

const IconComponent = styled.iBox`
  color: black54;
  width: fit-content;
  height: fit-content;
`

const Icon = ({ type, ...props }: IconProps) => (
  <IconComponent className='material-icons' {...props}>
    {type}
  </IconComponent>
)

Icon.defaultProps = {
  color: '',
}

export default Icon
