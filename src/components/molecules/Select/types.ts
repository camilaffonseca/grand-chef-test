import { MouseEvent } from 'react'

import { SystemProps } from '@xstyled/styled-components'

export type Option = {
  value: unknown
  label: string
}

export type Options = Option[]

export type SelectProps = {
  options: Options
  defaultValue?: Option
  onChange: (option: Option) => void
  dropdown?: boolean
  title: string
  color?: string
} & SystemProps

export type SelectOptionProps = {
  text: string
  onClick?: (event: MouseEvent) => void
  color?: string
} & SystemProps
