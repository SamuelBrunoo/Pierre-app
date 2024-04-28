import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { Route, useNavigation } from '@react-navigation/native'
import {
  TFSVisit,
  TRevisitFStore,
} from '../../../utils/@types/_ministery/revisit'
import { AppNavProps } from '../../../navigators/App'
import RevisitVisit from '../../../components/RevisitVisit'
import ModalComponent, { TModalControl } from '../../../components/Modal'
import { Coordenates, CustomMarker } from '../../../utils/@types/maps'
import MapArea from '../../../components/MapArea'

interface Props {
  route: Route<'talkView', { rev: TRevisitFStore }>
}

const TalkView = ({ route }: Props) => {
  const navigation = useNavigation<AppNavProps>()
  const { rev } = route.params

  const [modal, setModal] = useState<TModalControl>({
    showing: false,
    type: 'saveLocation',
  })
  const [mapCoord, setMapCoord] = useState<Coordenates>({
    latitude: 0,
    longitude: 0,
  })
  const [editingLog, setEditingLog] = useState<
    { status: false; data: null } | { status: true; data: TFSVisit }
  >({
    status: false,
    data: null,
  })
  const [marker, setMarker] = useState<CustomMarker | null>(null)

  const saveLocationData = (data: {
    snap: string | null
    marker: Coordenates
  }) => {
    setSnap(data.snap)
    setMarker(data.marker)
    setModal({ showing: false, type: modal.type })
  }

  const updateLog = async () => {
    //
  }

  const handleDeleteBtn = (log: TFSVisit) => {
    //
  }

  const handleEditClick = (log: TFSVisit) => {
    setEditingLog({ status: true, data: log })
    setModal({ showing: true, type: 'editTalklog' })
  }

  const [snap, setSnap] = useState<string | null>(null)

  useEffect(() => {
    navigation.setOptions({
      headerTitle: rev?.person_name ?? '',
    })
  }, [rev])

  return (
    <S.Page
      nestedScrollEnabled={true}
      contentContainerStyle={{
        rowGap: 20,
        paddingRight: 24,
        paddingLeft: 24,
        paddingBottom: 60,
      }}>
      <ModalComponent
        visible={modal.showing}
        setModal={setModal}
        afterClose={() => {
          setMapCoord({ latitude: 0, longitude: 0 })
          setMarker({ latitude: 0, longitude: 0 })
        }}
        action={saveLocationData}
        type={modal.type as 'saveLocation'}
        data={{
          mapCoord,
        }}
      />
      {editingLog.status && (
        <ModalComponent
          visible={modal.showing}
          setModal={setModal}
          afterClose={() => {
            //
          }}
          action={updateLog}
          type={modal.type as 'editTalklog'}
          data={editingLog.data}
        />
      )}
      <S.LocationSection>
        <S.TerritoryName>
          {rev?.neighborhood ?? 'Localização não definida'}
        </S.TerritoryName>

        <MapArea
          mapExibitionToggler={() =>
            setModal({ showing: true, type: 'saveLocation' })
          }
          snapUrl={snap}
          address={rev?.address ?? 'Endereço não definido'}
        />
      </S.LocationSection>
      <S.Next>
        <S.Title>Próxima conversa</S.Title>
        <S.NextSubject>Algum assunto</S.NextSubject>
      </S.Next>
      <S.History>
        <S.Title>Conversas</S.Title>
        <S.ListContainer
          contentContainerStyle={{
            rowGap: 8,
            paddingBottom: 10,
          }}>
          {rev?.visits.map((v, k) => (
            <RevisitVisit
              key={k}
              info={v}
              handleDeleteBtn={handleDeleteBtn}
              handleEditBtn={handleEditClick}
            />
          ))}
        </S.ListContainer>
      </S.History>
    </S.Page>
  )
}

export default TalkView
