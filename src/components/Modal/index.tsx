import React from 'react'
import * as S from './styles'

import EditTalklog from './EditTalklog'
import SaveLocation from './SaveLocation'
import { Coordenates } from '../../utils/@types/maps'
import { TFSVisit } from '../../utils/@types/_ministery/revisit'

export type TAvailableModals = 'saveLocation' | 'editTalklog'
export type TModalControl = { showing: boolean; type: TAvailableModals }

type IBaseProps = {
  visible: boolean
  setModal: React.Dispatch<React.SetStateAction<TModalControl>>
  afterClose?: () => void
}

type ISaveLocationProps = IBaseProps & {
  type: 'saveLocation'
  action: (data: { snap: string | null; marker: Coordenates }) => void
  data?: { mapCoord: Coordenates }
}

type IEditTalklogProps = IBaseProps & {
  type: 'editTalklog'
  action: (data: { notes: string; date: number | Date }) => void
  data: TFSVisit
}

type Props = ISaveLocationProps | IEditTalklogProps

const ModalComponent = ({
  type,
  visible,
  setModal,
  action,
  afterClose,
  data,
}: Props) => {
  const Content = () => {
    switch (type) {
      case 'saveLocation':
        return (
          <SaveLocation
            handleClose={handleClose}
            saveLocationData={action}
            mapData={data}
          />
        )
      case 'editTalklog':
        return (
          <EditTalklog
            handleClose={handleClose}
            saveTalklog={action}
            log={data}
          />
        )
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
