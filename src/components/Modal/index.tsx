import React from 'react'
import {
  Modal, Text
} from 'react-native'

import NewTalk from './NewTalk'



type Props = {
  visible: boolean;
  setModal: React.Dispatch<React.SetStateAction<{
    showing: boolean;
    type: string;
  }>>
  type: 'newTalk';
}

const ModalComponent = ({ visible, setModal, type }: Props) => {

  const Content = () => {
    switch (type) {
      case 'newTalk':
        return <NewTalk handleClose={handleClose} />
        break;
    }
  }

  const handleClose = () => {
    setModal({
      showing: false,
      type
    })
  }

  return (
    <Modal
      visible={visible}
      animationType='fade'
      onRequestClose={handleClose}
      transparent={true}
    >
      <Content />
    </Modal>
  )

}


export default ModalComponent