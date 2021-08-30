import { forwardRef, useCallback } from 'react'

import Button from 'components/atoms/Button'
import Div from 'components/atoms/Div'
import Icon from 'components/atoms/Icon'
import Text from 'components/atoms/Text'

import { formatDate } from 'utils/formatters'
import type { DateTemplate } from 'utils/formatters'

import type { DateHandler, DatePickerButtonBaseProps } from './types'

const DEFAULT_DATE_TEMPLATE = 'dd/mm/yyyy'

export const DatePickerButton = forwardRef<HTMLButtonElement, DatePickerButtonBaseProps>(
  (
    { value, onClick, dateHandler, dateTemplate, ...props }: DatePickerButtonBaseProps,
    ref
  ) => {
    const getDisplayDate = useCallback(
      (
        dateMemo?: Date,
        dateHandlerMemo?: DateHandler,
        dateTemplateMemo?: DateTemplate
      ) => {
        if (dateHandlerMemo && dateMemo) {
          return dateHandlerMemo(dateMemo)
        }

        if (dateMemo) {
          return formatDate(dateMemo, dateTemplateMemo || DEFAULT_DATE_TEMPLATE)
        }

        return '-'
      },
      [value, dateHandler, dateTemplate]
    )

    return (
      <Button ref={ref} onClick={onClick} justifyContent='space-between' {...props}>
        <Div flexDirection='column' alignItems='flex-start'>
          <Text fontSize='1.2rem' color='black54' lineHeight='1.4rem'>
            Data
          </Text>
          <Text color='black87' lineHeight='1.6rem'>
            {getDisplayDate(value, dateHandler, dateTemplate)}
          </Text>
        </Div>
        <Icon type='event' />
      </Button>
    )
  }
)

DatePickerButton.defaultProps = {
  value: undefined,
  onClick: undefined,
  dateHandler: date => String(formatDate(date, DEFAULT_DATE_TEMPLATE)),
  dateTemplate: DEFAULT_DATE_TEMPLATE,
}

export default DatePickerButton
