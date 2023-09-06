import React from 'react'
import Picker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'


type Props = {
  date: Date;
  onSet: (value: number) => void;
}

const DatePicker = ({ date, onSet }: Props) => {


  const handleChange = (ev: DateTimePickerEvent) => {
    if (ev.type === 'set') {
      onSet(ev.nativeEvent.timestamp)
    }
  }

  return (
    <Picker
      mode='date'
      value={date}
      onChange={handleChange}
    />
  )

}


export default DatePicker