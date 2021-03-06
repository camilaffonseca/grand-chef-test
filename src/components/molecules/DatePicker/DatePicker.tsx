import { useState } from 'react'
import DatePicker from 'react-datepicker'

import { DatePickerButton } from './DatePickerButton'

import type { DatePickerProps } from './types'

const DatePickerComponent = ({
  dateHandler,
  dateTemplate,
  ...props
}: DatePickerProps) => {
  const [startDate, setStartDate] = useState<Date>(new Date())

  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      customInput={
        <DatePickerButton
          dateHandler={dateHandler}
          dateTemplate={dateTemplate}
          {...props}
        />
      }
    />
  )
}

export default DatePickerComponent
