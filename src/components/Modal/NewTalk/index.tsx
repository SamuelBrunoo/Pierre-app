import React, { useState } from 'react'
import * as S from './styles'
import Input from '../../Input'
import { FieldsErrors } from '../../../utils/types/forms/newTalk'
import Select from '../../Select'
import { CheckLightIcon } from '../../../utils/imports/icons'


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
  const [errors, setErrors] = useState<FieldsErrors>({
    name: { has: false, message: 'Digite ou escolha o nome da pessoa' },
    notes: { has: false, message: 'Por favor, faça uma anotação' },
    territory: { has: false, message: 'Digite o território' },
  })
  const [isNew, setIsNew] = useState(false)


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
        </S.Content>
      </S.Box>
    </S.Bg>
  )

}


export default NewTalk