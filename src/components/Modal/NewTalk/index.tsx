import React, { useState } from 'react'
import * as S from './styles'
import Input from '../../Input'
import { FieldsErrors } from '../../../utils/types/forms/newTalk'
import Select from '../../Select'
import { CalendarIcon, CheckLightIcon, ClockIcon } from '../../../utils/imports/icons'
import DateHourPicker from '../../DateHourPicker'
import { Text } from 'react-native'


type Props = {
  handleClose: () => void;
}

const territories = [
  {
    id: 'id',
    name: 'Centro'
  },
  {
    id: 'id',
    name: 'Canudos'
  },
  {
    id: 'id',
    name: 'Vila Doze'
  },
  {
    id: 'id',
    name: 'Erval Seco'
  },
]

const persons = [
  {
    id: 'id',
    name: 'Fulaniso',
  },
  {
    id: 'id',
    name: 'Fulaniso',
  },
  {
    id: 'id',
    name: 'Fulaniso',
  },
  {
    id: 'id',
    name: 'Fulaniso',
  },
  {
    id: 'id',
    name: 'Fulaniso2',
  },
  {
    id: 'id',
    name: 'Fulaniso',
  },
  {
    id: 'id',
    name: 'Fulaniso laskdj',
  },
  {
    id: 'id',
    name: 'Fulaniso',
  },
  {
    id: 'id',
    name: 'Fulaniso',
  },
  {
    id: 'id',
    name: 'Fulaniso',
  },
]

const NewTalk = ({ handleClose }: Props) => {

  const [name, setName] = useState('')
  const [notes, setNotes] = useState('')
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date().getTime())
  const [errors, setErrors] = useState<FieldsErrors>({
    name: { has: false, message: 'Digite ou escolha o nome da pessoa' },
    notes: { has: false, message: 'Por favor, faça uma anotação' },
    territory: { has: false, message: 'Digite o território' },
  })
  const [isNew, setIsNew] = useState(false)
  const [pickerConfig, setPickerConfig] = useState<{
    showing: boolean;
    type: 'date' | 'hour'
  }>({
    showing: false,
    type: 'date'
  })

  const handleDate = (value: number) => {
    setPickerConfig({
      ...pickerConfig,
      showing: false
    })
    setDate(new Date(value))
  }

  const handleTime = (value: number) => {
    setPickerConfig({
      ...pickerConfig,
      showing: false
    })
    const hourDate = new Date(value)
    setDate(
      new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        hourDate.getHours(),
        hourDate.getMinutes()
      )
    )
  }


  return (
    <S.Bg>
      <S.Box>
        <S.Title>Nova conversa</S.Title>
        <S.Content
          contentContainerStyle={{
            rowGap: 20,
            flex: 1
          }}
        >
          {pickerConfig.showing &&
            <DateHourPicker
              type={pickerConfig.type}
              date={date}
              onSet={pickerConfig.type === 'date' ? handleDate : handleTime}
            />
          }
          <S.CheckBoxArea onPress={() => setIsNew(!isNew)}>
            <S.CheckBox>
              {isNew && <CheckLightIcon width={15} height={15} />}
            </S.CheckBox>
            <S.CheckLabel>Novo</S.CheckLabel>
          </S.CheckBoxArea>
          <S.InputWrapper>
            {isNew ?
              <Input
                type='none'
                value={name}
                onChange={setName}
                placeholder='Nome da pessoa'
                error={errors.name}
              />
              :
              <Select
                options={persons}
                value={name}
                onChange={setName}
                placeholder='Nome da pessoa'
                error={errors.name}
              />
            }
          </S.InputWrapper>
          {isNew &&
            <Select
              options={territories}
              value={name}
              onChange={setName}
              placeholder='Território'
              error={errors.name}
            />
          }
          <Input
            type='none'
            textarea={true}
            error={errors.notes}
            onChange={setNotes}
            placeholder='Anotação'
            value={notes}
          />
          <S.DateTimeInfo>
            <S.InfoArea>
              <S.FieldLabel>Data</S.FieldLabel>
              <S.InfoBox
                activeOpacity={.8}
                onPress={() => setPickerConfig({
                  showing: true,
                  type: 'date'
                })}
              >
                <S.DateString>
                  {`${String(date.getDate()).padStart(2, '0')
                    }/${String(date.getMonth() + 1).padStart(2, '0')
                    }/${String(date.getFullYear())
                    }`
                  }
                </S.DateString>
                <CalendarIcon />
              </S.InfoBox>
            </S.InfoArea>
            <S.InfoArea>
              <S.FieldLabel>Hora</S.FieldLabel>
              <S.InfoBox
                activeOpacity={.8}
                onPress={() => setPickerConfig({
                  showing: true,
                  type: 'hour'
                })}
              >
                <S.DateString>
                  {`${date.getHours()}:${date.getMinutes()}`}
                </S.DateString>
                <ClockIcon />
              </S.InfoBox>
            </S.InfoArea>
          </S.DateTimeInfo>
        </S.Content>
      </S.Box>
    </S.Bg>
  )

}


export default NewTalk