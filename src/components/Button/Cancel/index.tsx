import React from 'react'
import * as S from './styles'
import { CloseIcon } from '../../../utils/imports/icons'


type Props = {
  fn: (props?: any) => void;
  text: string;
  fnProps?: any;
}

const CancelBtn = ({ fn, text, fnProps }: Props) => {

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