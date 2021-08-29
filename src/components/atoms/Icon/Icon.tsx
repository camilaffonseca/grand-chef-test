import styled, { SystemProps } from '@xstyled/styled-components'

import { IconTypes } from './types'

type IconProps = {
  type: IconTypes
  color?: string
} & SystemProps

const IconComponent = styled.iBox`
  color: gray;
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
