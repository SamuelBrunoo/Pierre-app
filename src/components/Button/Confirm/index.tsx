import React from 'react'
import * as S from './styles'
import { CheckLightIcon } from '../../../utils/imports/icons'


type Props = {
  fn: (props?: any) => void;
  text: string;
  fnProps?: any;
}

const ConfirmBtn = ({ fn, text, fnProps }: Props) => {

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