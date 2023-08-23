import React from 'react'
import * as S from './styles'
import { Text } from 'react-native'

import { CheckIcon } from '../../utils/imports/icons'


type PropsType = {
  event: {
    name: string;
    time: string;
    done: boolean;
    studentName?: string;
  }
}

const HomeAgendaItem = ({ event }: PropsType) => {


  return (
    <S.El activeOpacity={.7}>
      <S.Info>
        <S.EventName done={false}>{event.name}</S.EventName>
        <S.EventTime>{event.time}</S.EventTime>
        {event.studentName &&
          <S.StudentName>{event.studentName}</S.StudentName>
        }
      </S.Info>
      <S.Checkbox done={event.done}>
        <CheckIcon />
      </S.Checkbox>
    </S.El>
  )

}


export default HomeAgendaItem