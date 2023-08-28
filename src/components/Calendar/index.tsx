import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { CalendarDay, CalendarType, CalendarWeek } from '../../utils/types/components/Calendar'
import { falseCalendarData } from './falseCalendarData'
import { Alert } from 'react-native'
import { getCalData } from './getCalData'


const Calendar = () => {


  const [cDate, setCurrentDate] = useState<Date>(new Date())

  const [calendarData, setCalendarData] = useState<CalendarType>({ rows: [] })

  const renderRows = () =>
    calendarData.rows.map((week, k) => (
      <S.Week key={k}>
        {week.days.map((day, i) => (
          <S.Day
            key={i}
            default={day.cMonth}
            active={day.number === cDate.getDate() && day.cMonth}
            activeOpacity={.4}
          >
            <S.DayNumber>{day.number}</S.DayNumber>
          </S.Day>
        ))}
      </S.Week>
    ))

  useEffect(() => {
    getCalData(new Date().getMonth(), setCalendarData)
  }, [])


  return (
    <S.El>
      <S.WeekDays>
        <S.WD><S.WDName>D</S.WDName></S.WD>
        <S.WD><S.WDName>S</S.WDName></S.WD>
        <S.WD><S.WDName>T</S.WDName></S.WD>
        <S.WD><S.WDName>Q</S.WDName></S.WD>
        <S.WD><S.WDName>Q</S.WDName></S.WD>
        <S.WD><S.WDName>S</S.WDName></S.WD>
        <S.WD><S.WDName>S</S.WDName></S.WD>
      </S.WeekDays>
      <S.Rows>
        {renderRows()}
      </S.Rows>
    </S.El>
  )

}


export default Calendar