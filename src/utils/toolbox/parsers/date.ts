import { padValue } from './padValue'

export const parseDate = (dateTime: number) => {
  const tm = new Date().getTimezoneOffset() / 60
  const orDate = new Date(dateTime)
  const d = new Date(new Date(orDate).setHours(orDate.getHours() - tm))
  const str =
    `${padValue(d.getDate())}/` +
    `${padValue(d.getMonth() + 1)}/` +
    `${d.getFullYear()}`

  return str
}

export const getDateString = (
  dt: Date | number,
  format: 'usa' | 'bra' = 'bra',
) => {
  const d = dt instanceof Date ? dt : new Date(dt)
  const dateString =
    format === 'usa'
      ? `${d.getFullYear()}-` + `${d.getMonth() + 1}-` + `${d.getDate()}`
      : `${padValue(d.getDate())}/` +
        `${padValue(d.getMonth() + 1)}/` +
        `${d.getFullYear()}`

  return dateString
}
