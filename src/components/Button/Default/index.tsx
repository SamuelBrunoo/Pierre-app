import React, { useEffect } from 'react'
import ConfirmBtn from './Confirm'
import CancelBtn from './Cancel'
import { SvgProps } from 'react-native-svg'

type Props = {
  mode?: 'confirm' | 'cancel'
  title?: string
  action?: (props?: any) => void
  fnProps?: any
  icon?: React.FC<SvgProps>
}

const Button = (props: Props) => {
  
  return props.mode === 'confirm' ? (
    <ConfirmBtn
      fn={props.action ? props.action : () => {}}
      text={props.title}
      fnProps={props.fnProps}
    />
  ) : (
    <CancelBtn
      fn={props.action ? props.action : () => {}}
      text={props.title}
      fnProps={props.fnProps}
    />
  )
}

export default Button
