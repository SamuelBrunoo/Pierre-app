import { Alert } from "react-native"
import { CalendarType, CalendarWeek } from "../../utils/types/components/Calendar"


export const getCalData = (
  newMonth: number,
  setCalendarData: React.Dispatch<React.SetStateAction<CalendarType>>
) => {
  const [cDate, cMonth, cYear] = [
    new Date().getDate(),
    newMonth,
    new Date().getFullYear()
  ]
  const pastMonthDay = (new Date(cYear, newMonth, 0))

  const daysInMonth =
    new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()

  let rows: CalendarWeek[] = []

  for (let r = 1; r <= 6; r++) {
    let row: CalendarWeek = { rowNumber: r, days: [] }

    if (r == 1) {
      if (pastMonthDay.getDay() < 6) {
        for (let i = 1; i <= 7; i++) {
          const inPastMonth = pastMonthDay.getDate() - (6 - i) <= pastMonthDay.getDate()
          const dayN = inPastMonth ?
            pastMonthDay.getDate() - (6 - i) :
            i - ((r - 1) + 6)

          row.days.push({
            cMonth: !inPastMonth,
            id: 'id',
            number: dayN
          })
        }
      } else {
        for (let i = 1; i <= 7; i++) {
          const dayN = i + ((r - 1) * 7)
          row.days.push({
            cMonth: true,
            id: 'id',
            number: dayN
          })
        }
      }
    }
    else {
      for (let i = 1; i <= 7; i++) {
        const dayN = i + ((r - 1) * 7)
        row.days.push({
          cMonth: dayN <= daysInMonth,
          id: 'id',
          number: (dayN <= daysInMonth) ? dayN : dayN - daysInMonth
        })
      }
    }

    rows.push(row)
  }


  const newData = { rows }
  setCalendarData(newData)
}