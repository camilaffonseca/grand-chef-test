import { DateTemplate } from 'utils/formatters'

export type DateHandler = (date: Date) => string

export type DatePickerButtonBaseProps = {
  value?: Date
  onClick?: () => void
  dateHandler?: DateHandler
  dateTemplate?: DateTemplate
}

export type DatePickerProps = Pick<
  DatePickerButtonBaseProps,
  'dateHandler' | 'dateTemplate'
>
