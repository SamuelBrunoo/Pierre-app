import { Alert } from 'react-native'
import {
  CalendarType,
  CalendarWeek,
} from '../../utils/@types/components/Calendar'
import { TUserSchedule } from '../../utils/@types/_ministery/schedule'


export const getCalData = (
  newMonth: number,
  setCalendarData: React.Dispatch<React.SetStateAction<CalendarType>>,
  uArrg?: TUserSchedule
) => {

  const [cDate, cMonth, cYear] = [
    new Date().getDate(),
    newMonth + 1,
    new Date().getFullYear(),
  ]
  const pastMonthDay = new Date(cYear, newMonth, 0)

  const daysInMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0,
  ).getDate()

  let rows: CalendarWeek[] = []

  for (let r = 1; r <= 6; r++) {
    let row: CalendarWeek = { rowNumber: r, days: [] }

    if (pastMonthDay.getDay() < 6) {
      if (r === 1) {
        for (let i = 0; i <= 6; i++) {
          const inPastMonth = i <= pastMonthDay.getDay()

          const dayN = inPastMonth
            ? pastMonthDay.getDate() - (pastMonthDay.getDay() - i)
            : (6 + (-r - i) - 1) * -1

          row.days.push({
            cMonth: !inPastMonth,
            id: 'id',
            number: dayN,
          })
        }
      } else {
        for (let i = 0; i < 7; i++) {
          const dayN = i + (r - 1) * 7 - pastMonthDay.getDay()
          row.days.push({
            cMonth: dayN <= daysInMonth,
            id: 'id',
            number: dayN <= daysInMonth ? dayN : dayN - daysInMonth,
          })
        }
      }
    } else {
      if (r === 1) {
        for (let i = 1; i <= 7; i++) {
          const dayN = i + (r - 1) * 7
          row.days.push({
            cMonth: true,
            id: 'id',
            number: dayN,
          })
        }
      } else {
        for (let i = 0; i < 7; i++) {
          const dayN = i + (r - 1) * 7
          row.days.push({
            cMonth: dayN <= daysInMonth,
            id: 'id',
            number: dayN <= daysInMonth ? dayN : dayN - daysInMonth,
          })
        }
      }
    }

    rows.push(row)
  }

  const newData = { rows }
  setCalendarData(newData)
}
