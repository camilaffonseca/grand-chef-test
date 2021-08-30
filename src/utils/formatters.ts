import dayjs from 'dayjs'

//  something like 'dd/mm/yyyy' | 'mm/dd/yyyy' | 'yyyy' | 'mm' | 'dd'
export type DateTemplate = string

export type FormatDateParams = (
  date: Date,

  template: DateTemplate
) => string

export const formatDate: FormatDateParams = (date, template) =>
  dayjs(date).format(String(template).toUpperCase())

export const truncate = (str: string, maxNumber: number, useWordBoundary: boolean) => {
  if (str.length <= maxNumber) {
    return str
  }

  const subString = str.substr(0, maxNumber - 1)

  return `${
    useWordBoundary ? subString.substr(0, subString.lastIndexOf(' ')) : subString
  }...`
}
