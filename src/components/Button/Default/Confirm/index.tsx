import React from 'react'
import * as S from './styles'
import { CheckLightIcon } from '../../../../utils/imports/icons'
import { SvgProps } from 'react-native-svg'

interface Props {
  fn: (props?: any) => void
  text?: string
  Icon?: React.FC<SvgProps>
  fnProps?: any
}

const ConfirmBtn = ({ fn, text, fnProps, Icon }: Props) => {
  const handlePress = () => {
    if (fnProps) fn(fnProps)
    else fn()
  }

  return (
    <S.El onPress={handlePress}>
      <S.BtnText>{text}</S.BtnText>
      <CheckLightIcon />
    </S.El>
  )
}

export default ConfirmBtn
