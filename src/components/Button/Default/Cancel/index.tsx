import React from 'react'
import * as S from './styles'
import { CloseGreyIcon as CloseIcon } from '../../../../utils/imports/icons'
import { SvgProps } from 'react-native-svg'

type Props = {
  fn: (props?: any) => void
  text?: string
  Icon?: React.FC<SvgProps>
  fnProps?: any
}

const CancelBtn = ({ fn, text, fnProps, Icon }: Props) => {
  const handlePress = () => {
    if (fnProps) fn(fnProps)
    else fn()
  }

  return (
    <S.El onPress={handlePress}>
      <S.BtnText>{text}</S.BtnText>
      <CloseIcon />
    </S.El>
  )
}

export default CancelBtn
