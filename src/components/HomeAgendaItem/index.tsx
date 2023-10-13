import React, { useState } from 'react'
import * as S from './styles'
import { Text } from 'react-native'

import { CheckIcon } from '../../utils/imports/icons'
import { ActivityType } from '../../utils/types/activity'
import GLOBALS from '../../utils/defaults/GLOBALS'

type PropsType = {
  event: ActivityType
}

const HomeAgendaItem = ({ event }: PropsType) => {
  const [doneState, setDoneState] = useState<boolean>(event.done)

  const handleDone = () => {
    setDoneState(!doneState)
  }

  return (
    <S.El activeOpacity={0.7} onPress={handleDone}>
      <S.Info>
        <S.EventName done={doneState}>
          {GLOBALS.MODALITIES.find(m => m.id === event.type)?.name}
          {event.partner.length > 0 && ` com ${event.partner}`}
        </S.EventName>
        <S.EventTime>
          {`${event.initial_hour} - ${event.final_hour}`}
        </S.EventTime>
        {event.person_name && event.person_name.length > 0 && (
          <S.StudentName>{event.person_name}</S.StudentName>
        )}
      </S.Info>
      <S.Checkbox done={doneState}>{doneState && <CheckIcon />}</S.Checkbox>
    </S.El>
  )
}

export default HomeAgendaItem
