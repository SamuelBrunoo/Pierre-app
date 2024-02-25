import React, { useEffect, useRef, useState } from 'react'
import * as S from './styles'
import MapView, { LongPressEvent } from 'react-native-maps'
import { Coordenates, CustomMarker } from '../../../utils/@types/maps'
import Button from '../../Button'
import MapViewFragment from '../../MapViewFragment'

type Props = {
  handleClose: () => void
  saveLocationData?: (data: {
    snap: string | null
    marker: Coordenates
  }) => void
  mapData?: {
    mapCoord: Coordenates
  }
}

const territories = [
  {
    id: 'id',
    name: 'Centro',
  },
  {
    id: 'id',
    name: 'Canudos',
  },
  {
    id: 'id',
    name: 'Vila Doze',
  },
  {
    id: 'id',
    name: 'Erval Seco',
  },
]

const persons = [
  {
    id: 'id',
    name: 'Fulaniso',
  },
  {
    id: 'id',
    name: 'Fulaniso',
  },
  {
    id: 'id',
    name: 'Fulaniso',
  },
  {
    id: 'id',
    name: 'Fulaniso',
  },
  {
    id: 'id',
    name: 'Fulaniso2',
  },
  {
    id: 'id',
    name: 'Fulaniso',
  },
  {
    id: 'id',
    name: 'Fulaniso laskdj',
  },
  {
    id: 'id',
    name: 'Fulaniso',
  },
  {
    id: 'id',
    name: 'Fulaniso',
  },
  {
    id: 'id',
    name: 'Fulaniso',
  },
]

const SaveLocation = ({ handleClose, mapData, saveLocationData }: Props) => {
  const mapViewRef = useRef<MapView | null>(null)
  const [mapVisibility, setMapVisibility] = useState(false)
  const [mapCoord, setMapCoord] = useState<Coordenates>({
    latitude: 0,
    longitude: 0,
  })
  const [marker, setMarker] = useState<CustomMarker | null>(null)

  const saveLocation = async () => {
    const snap = await mapViewRef.current?.takeSnapshot({
      format: 'jpg',
      result: 'file',
    })

    if (saveLocationData && marker)
      saveLocationData({
        snap: snap as string,
        marker,
      })
  }

  const handlePressMap = (e: LongPressEvent) => {
    const newCoords = e.nativeEvent.coordinate
    setMarker(newCoords)
  }

  useEffect(() => {
    if (mapData) {
      setMapCoord({
        latitude: mapData.mapCoord.latitude,
        longitude: mapData.mapCoord.longitude,
      })
      setMarker({
        latitude: mapData.mapCoord.latitude,
        longitude: mapData.mapCoord.longitude,
      })

      setTimeout(() => {
        setMapVisibility(true)
      }, 200)
    }
  }, [])

  return (
    <S.Bg>
      <S.Box>
        <S.Title>Definir localização</S.Title>
        <S.Main>
          {mapVisibility ? (
            <MapViewFragment
              userVisibility={false}
              mapViewRef={mapViewRef}
              mapCoord={mapCoord}
              setMapCoord={setMapCoord}
              handlePressMap={handlePressMap}
              marker={marker}
            />
          ) : (
            <S.Title></S.Title>
          )}
          <S.BtnsArea>
            <Button
              type="default"
              mode="cancel"
              title="Cancelar"
              action={handleClose}
            />
            <Button
              type="default"
              mode="confirm"
              title="Definir"
              action={saveLocation}
            />
          </S.BtnsArea>
        </S.Main>
      </S.Box>
    </S.Bg>
  )
}

export default SaveLocation
