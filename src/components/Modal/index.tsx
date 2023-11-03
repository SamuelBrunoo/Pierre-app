import React from 'react'
import { Modal, Text } from 'react-native'

import NewTalk from './NewTalk'

type Props = {
  visible: boolean
  setModal: React.Dispatch<
    React.SetStateAction<{
      showing: boolean
      type: string
    }>
  >
  afterClose?: () => void
  type: 'newTalk'
}

const ModalComponent = ({ visible, setModal, type, afterClose }: Props) => {
  const Content = () => {
    switch (type) {
      case 'newTalk':
        return <NewTalk handleClose={handleClose} />
        break
    }
  }

  const handleClose = () => {
    setModal({
      showing: false,
      type,
    })
    if (afterClose) afterClose()
  }

  return (
    <Modal
      visible={visible}
      animationType="fade"
      onRequestClose={handleClose}
      transparent={true}>
      <Content />
    </Modal>
  )
}

export default ModalComponent
