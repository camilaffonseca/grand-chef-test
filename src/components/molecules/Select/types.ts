import { MouseEvent } from 'react'

import { SystemProps } from '@xstyled/styled-components'

export type Option = {
  value: unknown
  label: string
}

type Options = Option[]

export type SelectProps = {
  options: Options
  onChange: (option: Option) => void
  dropdown?: boolean
  title: string
}

export type SelectOptionProps = {
  text: string
  onClick: (event: MouseEvent) => void
  color?: string
} & SystemProps
