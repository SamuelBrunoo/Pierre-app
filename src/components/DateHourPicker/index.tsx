import React, { useState } from 'react'
import * as S from './styles'

import DatePicker from './DatePicker'
import HourPicker from './HourPicker'
import { CalendarIcon } from '../../utils/imports/icons'
import { getDateString, getHourString } from '../../utils/toolbox/parsers/date'
import theme from '../../assets/styles/themes'

type Props = {
  fieldLabel: string
  type: 'date' | 'hour'
  date: Date
  onSet: (value: number) => void
}

const DateHourPicker = ({ fieldLabel, type, date, onSet }: Props) => {
  const [pickerShowing, setShowPicker] = useState<boolean>(false)

  const handleSet = (value: number) => {
    setShowPicker(false)
    onSet(value)
  }

  const handleShowPicker = () => {
    setShowPicker(true)
  }

  const renderPicker = () => {
    return type === 'date' ? (
      <DatePicker date={date} onSet={handleSet} />
    ) : (
      <HourPicker date={date} onSet={handleSet} />
    )
  }

  const renderReadableDate = () => {
    const str =
      type === 'date' ? getDateString(date, 'bra') : getHourString(date)
    return str
  }

  return (
    <>
      <S.InfoArea>
        <S.FieldLabel>{fieldLabel}</S.FieldLabel>
        <S.InfoBox
          activeOpacity={0.8}
          onPress={handleShowPicker}
          style={{ ...theme.shadows.default }}>
          <S.DateString>{renderReadableDate()}</S.DateString>
          {type === 'date' && <CalendarIcon />}
        </S.InfoBox>
      </S.InfoArea>
      {pickerShowing && renderPicker()}
    </>
  )
}

export default DateHourPicker
