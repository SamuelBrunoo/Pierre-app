import React from 'react'
import DatePicker from './DatePicker'
import HourPicker from './HourPicker'


type Props = {
  type: 'date' | 'hour';
  date: Date;
  onSet: (value: number) => void;
}

const DateHourPicker = ({ type, date, onSet }: Props) => {


  return type === 'date' ?
    <DatePicker
      date={date}
      onSet={onSet}
    />
    :
    <HourPicker
      date={date}
      onSet={onSet}
    />

}


export default DateHourPicker