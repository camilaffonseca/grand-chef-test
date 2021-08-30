import { SystemProps } from '@xstyled/styled-components'

import { DateTemplate } from 'utils/formatters'

export type DateHandler = (date: Date) => string

export type DatePickerButtonBaseProps = {
  value?: Date
  onClick?: () => void
  dateHandler?: DateHandler
  dateTemplate?: DateTemplate
  color?: string
} & SystemProps

export type DatePickerProps = {
  color?: string
} & Pick<DatePickerButtonBaseProps, 'dateHandler' | 'dateTemplate'> &
  SystemProps
