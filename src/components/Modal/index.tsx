import React from 'react'
import { Modal, Text } from 'react-native'
import * as S from './styles'

import NewTalk from './NewTalk'
import SaveLocation from './SaveLocation'
import { Coordenates } from '../../utils/@types/maps'

type Props = {
  visible: boolean
  setModal: React.Dispatch<
    React.SetStateAction<{
      showing: boolean
      type: string
    }>
  >
  afterClose?: () => void
  saveLocationData?: (data: {
    snap: string | null
    marker: Coordenates
  }) => void
  type: 'saveLocation'
  mapData?: {
    mapCoord: Coordenates
  }
}

const ModalComponent = ({
  visible,
  setModal,
  type,
  afterClose,
  saveLocationData,
  mapData,
}: Props) => {
  const Content = () => {
    switch (type) {
      case 'saveLocation':
        return (
          <SaveLocation
            handleClose={handleClose}
            saveLocationData={saveLocationData}
            mapData={mapData}
          />
        )
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
    <S.Modal
      visible={visible}
      animationType="fade"
      onRequestClose={handleClose}
      transparent={true}>
      <Content />
    </S.Modal>
  )
}

export default ModalComponent
