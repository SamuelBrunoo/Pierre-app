import React, { useCallback, useEffect, useRef, useState } from 'react'
import * as S from './styles'
import { TFSVisit } from '../../utils/@types/_ministery/revisit'
import { Animated } from 'react-native'

type Props = {
  info: TFSVisit
}

const RevisitVisit = ({ info }: Props) => {
  const date = new Date(info.date)

  const animHeight = useRef(new Animated.Value(0)).current

  const [isOpened, setIsOpened] = useState(false)
  const [contentSize, setContentSize] = useState(0)

  const renderDate = () => {
    const [y, m, d] = [
      date.getFullYear(),
      String(date.getMonth()).padStart(2, '0'),
      String(date.getDate()).padStart(2, '0'),
    ]
    return `${d}/${m}/${y}`
  }

  const renderHour = () => {
    const [hour, minutes] = [
      String(date.getHours()).padStart(2, '0'),
      String(date.getMinutes()).padStart(2, '0'),
    ]
    return `${hour}:${minutes}`
  }

  useEffect(() => {
    animProp(isOpened ? 'open' : 'close')
  }, [isOpened])

  const animProp = (action: 'open' | 'close') => {
    action === 'open'
      ? Animated.timing(animHeight, {
          toValue: contentSize,
          duration: 200,
          useNativeDriver: false,
        }).start()
      : Animated.timing(animHeight, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }).start()
  }

  return (
    <S.El activeOpacity={0.8} onPress={() => setIsOpened(!isOpened)}>
      <S.Top>
        <S.Date>{renderDate()}</S.Date>
      </S.Top>
      <Animated.View style={{ ...S.expanded, height: animHeight }}>
        <S.Notes
          onTextLayout={ev => {
            console.log(ev.nativeEvent.lines.length)
            setContentSize((ev.nativeEvent.lines.length * 14) + 36)
          }}
        >{info.notes}</S.Notes>
        <S.Bottom>
          <S.Btns>
            <S.BottomBtn>
              <S.BtnText from={'delete'}>Excluir</S.BtnText>
            </S.BottomBtn>
            {/* <S.BottomBtn>
              <S.BtnText from={'edit'}>Editar</S.BtnText>
            </S.BottomBtn> */}
          </S.Btns>
          <S.Hour>{renderHour()}</S.Hour>
        </S.Bottom>
      </Animated.View>
    </S.El>
  )
}

export default RevisitVisit
