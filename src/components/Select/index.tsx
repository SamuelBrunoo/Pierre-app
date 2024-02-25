import React, { useEffect, useRef, useState } from 'react'
import { View, TextInput, Animated } from 'react-native'
import { FieldError } from '../../utils/@types/loginForm'
import * as S from './styles'
import { ArrowThin } from '../../utils/imports/icons'
import { TTerritory } from '../../utils/@types/_ministery/territory'
import theme from '../../assets/styles/themes'

type Person = {
  id: string
  name: string
}

type Props = {
  options: Person[] | TTerritory[]
  placeholder: string
  value: Person | TTerritory
  onChange: (v: Person | TTerritory) => void
  error: FieldError
  disabled?: boolean
}

const Select = ({
  options,
  placeholder,
  value,
  onChange,
  error,
  disabled,
}: Props): JSX.Element => {
  const errOpacity = useRef(new Animated.Value(0)).current

  const [showingOpt, setShowingOpt] = useState(false)
  const [choosed, setChoosed] = useState<Person | TTerritory | null>(value)

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
    onChange(options.find(o => o.id === choosed?.id) as Person | TTerritory)
    setShowingOpt(false)
  }

  return (
    <S.Wrapper>
      <S.InputArea>
        <S.Placeholder error={error}>{placeholder}</S.Placeholder>
        <S.SelectArea
          hasError={error.has}
          style={theme.shadows.default}
          onPress={() => (disabled ? null : setShowingOpt(!showingOpt))}
          activeOpacity={disabled ? 1 : .7}>
          <S.Choosed>
            {disabled ? 'Não há territórios cadastrados' : choosed?.name}
          </S.Choosed>
          <S.IconArea>
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
            color: theme.colors.red,
            fontSize: 10,
            marginTop: 6,
            opacity: errOpacity,
          }}>
          {error.message}
        </Animated.Text>
      </S.InputArea>
      <S.OptionsArea
        style={theme.shadows.default}
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
