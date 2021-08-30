import { SystemProps } from '@xstyled/styled-components'

import { IconTypes } from 'components/atoms/Icon/types'

export type CardProps = {
  iconName: IconTypes
  title: string
  text: string
  color?: string
} & SystemProps
