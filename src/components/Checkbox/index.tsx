import React from 'react'
import * as S from './styles'

import { CheckOrangeIcon as CheckIcon } from '../../utils/imports/icons'
import theme from '../../assets/styles/themes'

type Props = {
  isChecked: boolean
  onChange: (v?: any) => void
  text: string
}

const Checkbox = ({ isChecked, onChange, text }: Props): JSX.Element => {
  return (
    <S.CheckBoxArea
      onPress={onChange}
      style={theme.shadows.default}
      activeOpacity={0.6}>
      <S.CheckBox>
        {isChecked && <CheckIcon width={16} height={16} />}
      </S.CheckBox>
      <S.CheckLabel>{text}</S.CheckLabel>
    </S.CheckBoxArea>
  )
}

export default Checkbox
