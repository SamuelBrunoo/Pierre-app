import React from 'react'
import ConfirmBtn from './Confirm'
import CancelBtn from './Cancel'


type Props = {
  type: 'confirm' | 'cancel';
  fn: (props?: any) => void;
  text: string;
  fnProps?: any;
}

const Button = (props: Props) => {

  return props.type === 'confirm' ?
    <ConfirmBtn {...props} /> :
    <CancelBtn {...props} />
}


export default Button