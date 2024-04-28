import React, { useState } from 'react'
import * as S from './styles'
import Button from '../../Button'
import { TFSVisit } from '../../../utils/@types/_ministery/revisit'
import Input from '../../Input'
import DateHourPicker from '../../DateHourPicker'
import { parseDate } from '../../../utils/toolbox/parsers'

type Props = {
  log: TFSVisit
  handleClose: () => void
  saveTalklog: (data: { notes: string; date: number | Date }) => void
}

const SaveLocation = ({ log, handleClose, saveTalklog }: Props) => {
  const [date, setDate] = useState(new Date(log.date))
  const [notes, setNotes] = useState(log.notes)

  const handleSave = async () => {
    saveTalklog({ date, notes })
  }

  return (
    <S.Bg>
      <S.Box>
        <S.Title>{parseDate(date.getTime())}</S.Title>
        <S.Main>
          <Input
            type="none"
            error={{ has: false, message: '' }}
            placeholder="Faça uma breve anotação sobre a conversa"
            value={notes}
            onChange={(val: string) => setNotes(val)}
            textarea={true}
          />
          <DateHourPicker
            type="hour"
            date={date}
            fieldLabel="Horas"
            onSet={val => setDate(new Date(val))}
          />
          <S.BtnsArea>
            <Button
              type="default"
              mode="cancel"
              title="Cancelar"
              action={handleClose}
            />
            <Button
              type="default"
              mode="confirm"
              title="Salvar"
              action={handleSave}
            />
          </S.BtnsArea>
        </S.Main>
      </S.Box>
    </S.Bg>
  )
}

export default SaveLocation
