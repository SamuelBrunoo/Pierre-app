import React, { useEffect, useRef, useState } from 'react'
import { View, TextInput, Animated } from 'react-native'
import { FieldError } from '../../utils/types/loginForm'
import * as S from './styles'
import { ArrowThin } from '../../utils/imports/icons'
import { Territory } from '../../utils/types/_ministery/territory'

type Person = {
  id: string
  name: string
}

type Props = {
  options: Person[] | Territory[]
  placeholder: string
  value: Person | Territory
  onChange: (v: Person | Territory) => void
  error: FieldError
}

const Select = ({
  options,
  placeholder,
  value,
  onChange,
  error,
}: Props): JSX.Element => {
  const errOpacity = useRef(new Animated.Value(0)).current

  const [showingOpt, setShowingOpt] = useState(false)
  const [choosed, setChoosed] = useState<Person | Territory | null>(value)

  useEffect(() => {
    if (error.has) {
      Animated.timing(errOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start()
    } else {
      if (Number(errOpacity) !== 0) {
        Animated.timing(errOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }).start()
      }
    }
  }, [error])

  const handleChoose = (p: any) => {
    setChoosed(p)
    onChange(options.find(o => o.id === choosed?.id) as Person | Territory)
    setShowingOpt(false)
  }

  return (
    <S.Wrapper>
      <S.InputArea>
        <S.Placeholder error={error}>{placeholder}</S.Placeholder>
        <S.SelectArea hasError={error.has} style={S.shadowStyle}>
          <S.Choosed>{choosed?.name}</S.Choosed>
          <S.IconArea onPress={() => setShowingOpt(!showingOpt)}>
            <ArrowThin
              width={24}
              height={24}
              style={{
                transform: [{ rotate: `${showingOpt ? 180 : 0}deg` }],
              }}
            />
          </S.IconArea>
        </S.SelectArea>
        <Animated.Text
          style={{
            color: 'rgba(193, 14, 14, 1)',
            opacity: errOpacity,
          }}>
          {error.message}
        </Animated.Text>
      </S.InputArea>
      <S.OptionsArea
        style={S.shadowStyle}
        showing={showingOpt}
        contentContainerStyle={{
          paddingHorizontal: 10,
          rowGap: 4,
        }}>
        {options.map((p, k) => (
          <S.Option key={k} onPress={() => handleChoose(p)}>
            <S.OptionLabel>{p.name}</S.OptionLabel>
          </S.Option>
        ))}
      </S.OptionsArea>
    </S.Wrapper>
  )
}

export default Select
