import React, { useEffect, useRef, useState } from 'react'
import * as S from './styles'
import NetInfo from '@react-native-community/netinfo'
import Input from '../../Input'
import { FieldsErrors } from '../../../utils/@types/forms/newTalk'
import Select from '../../Select'
import {
  CalendarIcon,
  CheckLightIcon,
  ClockIcon,
} from '../../../utils/imports/icons'
import DateHourPicker from '../../DateHourPicker'
import { Alert, Text, View } from 'react-native'
import MapArea from '../../MapArea'
import MapView, { LongPressEvent } from 'react-native-maps'
import Api from '../../../utils/Api'
import { AdressInfo } from '../../../utils/@types/Api/mapAdress'
import { getUserLocation } from '../../../utils/toolbox/location/getUserLocation'
import { Coordenates, CustomMarker } from '../../../utils/@types/maps'
import Button from '../../Button'
import MapViewFragment from '../../MapViewFragment'
import { useMMKV, useMMKVObject } from 'react-native-mmkv'
import { LocalUserInfo } from '../../../utils/@types/_user/local'
import { TTerritory } from '../../../utils/@types/_ministery/territory'

type Props = {
  handleClose: () => void
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

const NewTalk = ({ handleClose }: Props) => {
  const [user] = useMMKVObject<LocalUserInfo>('user')

  const mapViewRef = useRef<MapView | null>(null)
  const [name, setName] = useState('')
  const [neighborhood, setNeighborhood] = useState<{
    id: string
    name: string
  }>(user?.territories[0] ?? { id: '', name: '' })
  const [notes, setNotes] = useState('')
  const [date, setDate] = useState((() => new Date())())
  const [mapVisibility, setMapVisibility] = useState(false)
  const [userVisibility, setUserVisibility] = useState(true)
  const [mapCoord, setMapCoord] = useState<Coordenates>({
    latitude: 0,
    longitude: 0,
  })
  const [marker, setMarker] = useState<CustomMarker | null>(null)
  const [address, setAddress] = useState<string | null>(null)
  const [snap, setSnap] = useState<string | null>(null)

  const [errors, setErrors] = useState<FieldsErrors>({
    name: { has: false, message: 'Digite ou escolha o nome da pessoa' },
    address: { has: false, message: 'Digite um endereço' },
    territory: { has: false, message: 'Especifique o território' },
    map: { has: false, message: 'Defina a localização' },
    notes: { has: false, message: 'Por favor, faça uma anotação' },
    nextAbout: { has: false, message: 'Anote o assunto da próxima visita' },
  })
  const [isNew, setIsNew] = useState(false)
  const [pickerConfig, setPickerConfig] = useState<{
    showing: boolean
    type: 'date' | 'hour'
  }>({ showing: false, type: 'date' })

  const handleDate = (value: number) => {
    setPickerConfig({
      ...pickerConfig,
      showing: false,
    })
    setDate(new Date(value))
  }

  const handleTime = (value: number) => {
    setPickerConfig({
      ...pickerConfig,
      showing: false,
    })
    const hourDate = new Date(value)
    setDate(
      new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        hourDate.getHours(),
        hourDate.getMinutes(),
      ),
    )
  }

  const handleMapClick = () => {
    setMapVisibility(!mapVisibility)
  }

  const getAddressText = (address: AdressInfo) => {
    let resStr = ''
    if (address) {
      const info = address.address_components

      const streetId = info.findIndex(c => c.types.includes('route'))
      const numberId = info.findIndex(c => c.types.includes('street_number'))

      if (streetId > -1) resStr += info[streetId].long_name
      if (numberId > -1) resStr += `, nº ${info[numberId].long_name}`
      else resStr += ', sem nº'
    }

    return resStr
  }

  const saveLocation = async () => {
    const hasConnection = await NetInfo.fetch().then(s => s.isConnected)

    setUserVisibility(false)

    // get address and take snapshot
    if (hasConnection) {
      const adr = await Api.getAddress(mapCoord)
      const adrJson = adr.results[0]
      const adrText = getAddressText(adrJson)
      setAddress(adrText)

      // picture snapshot
      const mapEl = mapViewRef.current
      if (mapEl) {
        const file = await mapEl.takeSnapshot({ format: 'jpg', result: 'file' })
        setSnap(file)
        setMapVisibility(false)
      }
    } else {
      // save coords (to save when have internet) **actual/user location
      // show only icon, and show coords as address, until get internet

      setAddress(`lat ${mapCoord.latitude}, long ${mapCoord.longitude}`)
      setMapVisibility(false)
    }
  }

  const handlePressMap = (e: LongPressEvent) => {
    const newCoords = e.nativeEvent.coordinate
    setMarker(newCoords)
  }

  const verifyErrors = () => {
    // const [nameError, notesError, mapCoordError, markerError, addressError] = [
    const fields = [
      { field: 'name', hasError: name.trim().length === 0 },
      { field: 'notes', hasError: notes.trim().length === 0 },
      {
        field: 'mapCoord',
        hasError: mapCoord.latitude === 0 || mapCoord.longitude === 0,
      },
      {
        field: 'marker',
        hasError: !marker || marker.latitude === 0 || marker.longitude === 0,
      },
      { field: 'address', hasError: !address || address.trim().length === 0 },
    ]

    // verify if is new (then, if has location setted)
    return fields.some(i => i.hasError === true)
  }

  const handleSave = async () => {
    const hasErrors = verifyErrors()
    const hasConnection = await NetInfo.fetch().then(s => s.isConnected)

    if (hasConnection) {
      if (!hasErrors) {
        const save = isNew
          ? await Api.saveTalk(user?.id as string, {
              address: address as string,
              date,
              neighborhood: neighborhood.name,
              marker: marker ?? mapCoord,
              name,
              notes,
            })
          : await Api.updateTalk()

        if (save.ok) {
          handleClose()
          // save in local the returned parsed value?
        }
      } else {
        // show errors
      }
    } else {
      // save in local
      // or use firebase off-line saving
    }
  }

  const renders = {
    map: () => {
      return (
        <MapViewFragment
          userVisibility={userVisibility}
          mapViewRef={mapViewRef}
          mapCoord={mapCoord}
          setMapCoord={setMapCoord}
          handlePressMap={handlePressMap}
          marker={marker}
        />
      )
    },
    picker: () => {
      return (
        <></>
        // <DateHourPicker
        //   type={pickerConfig.type}
        //   date={date}
        //   onSet={pickerConfig.type === 'date' ? handleDate : handleTime}
        // />
      )
    },
  }

  useEffect(() => {
    getUserLocation().then(({ coords: userLocation }) => {
      console.log(userLocation)
      setMapCoord({
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
      })
      setMarker({
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
      })
    })
  }, [])

  return (
    <S.Bg>
      <S.Box>
        <S.Title>Nova conversa</S.Title>
        <S.Main>
          {mapVisibility && ( // && hasConnection
            // if !hasConnection, show loading spinner to 'feedback' that some is
            // data is being getted
            <>
              {renders.map()}
              <S.ConfirmBtn onPress={saveLocation}>
                <S.ConfirmBtnTxt>Salvar localização</S.ConfirmBtnTxt>
              </S.ConfirmBtn>
            </>
          )}
          {!mapVisibility && (
            <>
              <S.Content
                contentContainerStyle={{
                  rowGap: 10,
                  paddingBottom: 40,
                  justifyContent: 'space-between',
                  flexGrow: 1,
                }}>
                <S.ContentPrincipal>
                  <S.CheckBoxArea onPress={() => setIsNew(!isNew)}>
                    <S.CheckBox>
                      {isNew && <CheckLightIcon width={15} height={15} />}
                    </S.CheckBox>
                    <S.CheckLabel>Novo</S.CheckLabel>
                  </S.CheckBoxArea>
                  <S.InputWrapper>
                    {isNew ? (
                      <Input
                        type="none"
                        value={name}
                        onChange={setName}
                        placeholder="Nome da pessoa"
                        error={errors.name}
                      />
                    ) : (
                      <Select
                        options={persons}
                        value={
                          user?.territories.find(
                            t => t.id === neighborhood.id,
                          ) as TTerritory
                        }
                        onChange={v => setName(v.name)}
                        placeholder="Nome da pessoa"
                        error={errors.name}
                      />
                    )}
                  </S.InputWrapper>
                  {isNew && (
                    <>
                      <MapArea
                        mapExibitionToggler={handleMapClick}
                        snapUrl={snap}
                        address={address}
                        error={errors.map}
                      />

                      {/* if has territories */}
                      <Select
                        options={user?.territories as TTerritory[]}
                        value={
                          user?.territories.find(
                            t => t.id === neighborhood.id,
                          ) as TTerritory
                        }
                        onChange={t => setNeighborhood(t)}
                        placeholder="Território"
                        error={errors.name}
                      />
                      {/* else show input disabled: 'Nenhum território cadastrado' */}
                    </>
                  )}
                  {/* Observations */}
                  {/* <S.InputWrapper>
                    <Input
                      type="none"
                      textarea={true}
                      error={errors.notes}
                      onChange={setNotes}
                      placeholder="Anotação"
                      value={notes}
                    />
                  </S.InputWrapper> */}
                  <S.InputWrapper>
                    <Input
                      type="none"
                      textarea={true}
                      error={errors.notes}
                      onChange={setNotes}
                      placeholder="Anotação"
                      value={notes}
                    />
                  </S.InputWrapper>
                </S.ContentPrincipal>
                <S.DateTimeInfo>
                  <S.InfoArea>
                    <S.FieldLabel>Data</S.FieldLabel>
                    <S.InfoBox
                      activeOpacity={0.8}
                      onPress={() =>
                        setPickerConfig({
                          showing: true,
                          type: 'date',
                        })
                      }>
                      <S.DateString>
                        {`${String(date.getDate()).padStart(2, '0')}/${String(
                          date.getMonth() + 1,
                        ).padStart(2, '0')}/${String(date.getFullYear())}`}
                      </S.DateString>
                      <CalendarIcon />
                    </S.InfoBox>
                  </S.InfoArea>
                  <S.InfoArea>
                    <S.FieldLabel>Hora</S.FieldLabel>
                    <S.InfoBox
                      activeOpacity={0.8}
                      onPress={() =>
                        setPickerConfig({
                          showing: true,
                          type: 'hour',
                        })
                      }>
                      <S.DateString>
                        {`${String(date.getHours()).padStart(2, '0')}:${String(
                          date.getMinutes(),
                        ).padStart(2, '0')}`}
                      </S.DateString>
                      <ClockIcon />
                    </S.InfoBox>
                  </S.InfoArea>
                </S.DateTimeInfo>
              </S.Content>
              <S.BtnsArea>
                <Button
                  mode="cancel"
                  type="default"
                  action={handleClose}
                  title="Cancelar"
                />
                <Button
                  mode="confirm"
                  type="default"
                  action={handleSave}
                  title="Salvar"
                />
              </S.BtnsArea>
            </>
          )}
          {pickerConfig.showing && renders.picker()}
        </S.Main>
      </S.Box>
    </S.Bg>
  )
}

export default NewTalk
