import React, { Fragment, useEffect, useRef, useState } from 'react'
import * as S from './styles'
import Input from '../../Input'
import { FieldsErrors } from '../../../utils/types/forms/newTalk'
import Select from '../../Select'
import { CalendarIcon, CheckLightIcon, ClockIcon } from '../../../utils/imports/icons'
import DateHourPicker from '../../DateHourPicker'
import { Alert, Text, View } from 'react-native'
import MapArea from '../../MapArea'
import MapView, { Callout, MapPressEvent, Marker, MapMarker, LongPressEvent } from 'react-native-maps'
import Api from '../../../utils/Api'
import { AdressInfo } from '../../../utils/types/Api/mapAdress'
import { getUserLocation } from '../../../utils/toolbox/location/getUserLocation'
import { Coordenates, CustomMarker } from '../../../utils/types/maps'


type Props = {
  handleClose: () => void;
}

const territories = [
  {
    id: 'id',
    name: 'Centro'
  },
  {
    id: 'id',
    name: 'Canudos'
  },
  {
    id: 'id',
    name: 'Vila Doze'
  },
  {
    id: 'id',
    name: 'Erval Seco'
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

const NewTalk = ({ handleClose }: Props) => {

  const mapViewRef = useRef<MapView | null>(null)
  const [name, setName] = useState('')
  const [notes, setNotes] = useState('')
  const [date, setDate] = useState(new Date())
  const [mapVisibility, setMapVisibility] = useState(false)
  const [userVisibility, setUserVisibility] = useState(false)
  const [mapCoord, setMapCoord] = useState<Coordenates>({
    latitude: 0, longitude: 0
  })
  const [marker, setMarker] = useState<CustomMarker | null>()
  const [address, setAddress] = useState<AdressInfo | null>(null)
  const [snap, setSnap] = useState<string | null>(null)

  const [errors, setErrors] = useState<FieldsErrors>({
    name: { has: false, message: 'Digite ou escolha o nome da pessoa' },
    notes: { has: false, message: 'Por favor, faça uma anotação' },
    territory: { has: false, message: 'Digite o território' },
  })
  const [isNew, setIsNew] = useState(false)
  const [pickerConfig, setPickerConfig] = useState<{
    showing: boolean; type: 'date' | 'hour';
  }>({ showing: false, type: 'date' })

  const handleDate = (value: number) => {
    setPickerConfig({
      ...pickerConfig,
      showing: false
    })
    setDate(new Date(value))
  }

  const handleTime = (value: number) => {
    setPickerConfig({
      ...pickerConfig,
      showing: false
    })
    const hourDate = new Date(value)
    setDate(
      new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        hourDate.getHours(),
        hourDate.getMinutes()
      )
    )
  }

  const handleMapClick = () => {
    setMapVisibility(!mapVisibility)
    setUserVisibility(true)
  }

  const saveLocation = async () => {
    const mapEl = mapViewRef.current
    if (mapEl) {
      setUserVisibility(false)
      const adr = await Api.getAddress(mapCoord)
      const adrJson = adr.results[0]
      setAddress(adrJson)
      const file = await mapEl.takeSnapshot({
        format: 'jpg',
        result: 'file'
      })
      setSnap(file)
      setMapVisibility(false)
    }
  }

  const handlePressMap = (e: LongPressEvent) => {
    const newCoords = e.nativeEvent.coordinate
    setMarker(newCoords)
  }

  const renderMap = () => {
    return (
      <S.MapViewWrapper>
        <Fragment>
          <MapView
            ref={mapViewRef}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'rgb(41, 41, 41)'
            }}
            showsUserLocation={userVisibility}
            initialRegion={{
              latitude: mapCoord.latitude,
              longitude: mapCoord.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.005,
            }}
            // customMapStyle={customStyle}
            onRegionChange={(region) => {
              setMapCoord({
                latitude: region.latitude,
                longitude: region.longitude,
              })
            }}
            onLongPress={e => handlePressMap(e)}
          >
            {marker &&
              <Marker
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                title={marker.title}
              />
            }
          </MapView>
        </Fragment>
      </S.MapViewWrapper>
    )
  }

  useEffect(() => {
    (async () => {
      const { coords: userLocation } = await getUserLocation()
      setMapCoord({
        latitude: userLocation.latitude,
        longitude: userLocation.longitude
      })
    })()


    setMarker({
      latitude: -27.49169350490711,
      longitude: -48.7774863843426
    })
  }, [])


  return (
    <S.Bg>
      <S.Box>
        <S.Title>Nova conversa</S.Title>
        <S.Content
          contentContainerStyle={{
            rowGap: 20,
          }}
        >
          {mapVisibility &&
            <>
              {renderMap()}
              <S.ConfirmBtn onPress={saveLocation}>
                <S.ConfirmBtnTxt>Salvar localização</S.ConfirmBtnTxt>
              </S.ConfirmBtn>
            </>
          }
          {!mapVisibility &&
            <>
              <S.CheckBoxArea onPress={() => setIsNew(!isNew)}>
                <S.CheckBox>
                  {isNew && <CheckLightIcon width={15} height={15} />}
                </S.CheckBox>
                <S.CheckLabel>Novo</S.CheckLabel>
              </S.CheckBoxArea>
              <S.InputWrapper>
                {isNew ?
                  <Input
                    type='none'
                    value={name}
                    onChange={setName}
                    placeholder='Nome da pessoa'
                    error={errors.name}
                  />
                  :
                  <Select
                    options={persons}
                    value={name}
                    onChange={setName}
                    placeholder='Nome da pessoa'
                    error={errors.name}
                  />
                }
              </S.InputWrapper>
              {isNew &&
                <>
                  <MapArea
                    mapExibitionToggler={handleMapClick}
                    snapUrl={snap}
                    address={address}
                  />
                  <Select
                    options={territories}
                    value={name}
                    onChange={setName}
                    placeholder='Território'
                    error={errors.name}
                  />
                </>
              }
              <S.InputWrapper>
                <Input
                  type='none'
                  textarea={true}
                  error={errors.notes}
                  onChange={setNotes}
                  placeholder='Anotação'
                  value={notes}
                />
              </S.InputWrapper>
              <S.DateTimeInfo>
                <S.InfoArea>
                  <S.FieldLabel>Data</S.FieldLabel>
                  <S.InfoBox
                    activeOpacity={.8}
                    onPress={() => setPickerConfig({
                      showing: true,
                      type: 'date'
                    })}
                  >
                    <S.DateString>
                      {`${String(date.getDate()).padStart(2, '0')
                        }/${String(date.getMonth() + 1).padStart(2, '0')
                        }/${String(date.getFullYear())
                        }`
                      }
                    </S.DateString>
                    <CalendarIcon />
                  </S.InfoBox>
                </S.InfoArea>
                <S.InfoArea>
                  <S.FieldLabel>Hora</S.FieldLabel>
                  <S.InfoBox
                    activeOpacity={.8}
                    onPress={() => setPickerConfig({
                      showing: true,
                      type: 'hour'
                    })}
                  >
                    <S.DateString>
                      {
                        `${String(date.getHours()).padStart(2, '0')
                        }:${String(date.getMinutes()).padStart(2, '0')}`
                      }
                    </S.DateString>
                    <ClockIcon />
                  </S.InfoBox>
                </S.InfoArea>
              </S.DateTimeInfo>
            </>
          }
          {pickerConfig.showing &&
            <DateHourPicker
              type={pickerConfig.type}
              date={date}
              onSet={pickerConfig.type === 'date' ? handleDate : handleTime}
            />
          }
        </S.Content>
      </S.Box>
    </S.Bg>
  )

}


export default NewTalk