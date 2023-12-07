import React, { useState } from 'react'
import * as S from './styles'
import { TFSVisit } from '../../utils/@types/_ministery/revisit'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'

type Props = {
  info: TFSVisit
}

const RevisitVisit = ({ info }: Props) => {
  const date = new Date(info.date)

  const [isOpened, setIsOpened] = useState(false)

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

  const animatedStyle = useAnimatedStyle(()=>({
    ...S.expanded,
    height: isOpened ? withTiming(100) : withTiming(0)
  }))

  return (
    <S.El activeOpacity={.8} onPress={()=>setIsOpened(!isOpened)}>
      <S.Top>
        <S.Date>{renderDate()}</S.Date>
      </S.Top>
      <Animated.View style={animatedStyle}>
        <S.Notes>{info.notes}</S.Notes>
        <S.Hour>{renderHour()}</S.Hour>
      </Animated.View>
    </S.El>
  )
}

export default RevisitVisit
