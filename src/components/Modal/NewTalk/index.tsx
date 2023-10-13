import React, {useEffect, useRef, useState} from 'react'
import * as S from './styles'
import NetInfo from '@react-native-community/netinfo'
import Input from '../../Input'
import {FieldsErrors} from '../../../utils/types/forms/newTalk'
import Select from '../../Select'
import {
  CalendarIcon,
  CheckLightIcon,
  ClockIcon,
} from '../../../utils/imports/icons'
import DateHourPicker from '../../DateHourPicker'
import {Alert, Text, View} from 'react-native'
import MapArea from '../../MapArea'
import MapView, {LongPressEvent} from 'react-native-maps'
import Api from '../../../utils/Api'
import {AdressInfo} from '../../../utils/types/Api/mapAdress'
import {getUserLocation} from '../../../utils/toolbox/location/getUserLocation'
import {Coordenates, CustomMarker} from '../../../utils/types/maps'
import Button from '../../Button'
import MapViewFragment from './MapViewFragment'

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

const NewTalk = ({handleClose}: Props) => {
  const mapViewRef = useRef<MapView | null>(null)
  const [name, setName] = useState('')
  const [notes, setNotes] = useState('')
  const [date, setDate] = useState(new Date())
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
    name: {has: false, message: 'Digite ou escolha o nome da pessoa'},
    notes: {has: false, message: 'Por favor, faça uma anotação'},
    territory: {has: false, message: 'Digite o território'},
  })
  const [isNew, setIsNew] = useState(false)
  const [pickerConfig, setPickerConfig] = useState<{
    showing: boolean
    type: 'date' | 'hour'
  }>({showing: false, type: 'date'})

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
        const file = await mapEl.takeSnapshot({format: 'jpg', result: 'file'})
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
      {field: 'name', hasError: name.trim().length === 0},
      {field: 'notes', hasError: notes.trim().length === 0},
      {
        field: 'mapCoord',
        hasError: mapCoord.latitude === 0 || mapCoord.longitude === 0,
      },
      {
        field: 'marker',
        hasError: !marker || marker.latitude === 0 || marker.longitude === 0,
      },
      {field: 'address', hasError: !address || address.trim().length === 0},
    ]

    // verify if is new (then, if has location setted)
    return fields.some(i => i.hasError === true)
  }

  const handleSave = async () => {
    const hasConnection = await NetInfo.fetch().then(s => s.isConnected)

    const resumeInfo = {
      name,
      notes,
      date,
      mapCoord,
      marker,
      address,
      hasSnap: typeof snap === 'string',
    }

    // verificar se todos os valores estão preenchidos
    const hasErrors = verifyErrors()

    // verificar internet
    if (hasConnection) {
      if (!hasErrors) {
        // se sim, enviar para FB
        const save = await Api.saveTalk(
          // 2 props patterns (1 for new talk & 1 for existing talk)
          name,
          notes,
          date,
          mapCoord,
          marker ?? mapCoord,
          address as string,
          // talkId ???, notes, date,
        )
      } else {
      }
    } else {
      // senão, salvar local
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
        <DateHourPicker
          type={pickerConfig.type}
          date={date}
          onSet={pickerConfig.type === 'date' ? handleDate : handleTime}
        />
      )
    },
  }

  useEffect(() => {
    getUserLocation().then(({coords: userLocation}) => {
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
                        value={name}
                        onChange={setName}
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
                      />
                      <Select
                        options={territories}
                        value={name}
                        onChange={setName}
                        placeholder="Território"
                        error={errors.name}
                      />
                    </>
                  )}
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
                <Button type="cancel" fn={handleClose} text="Cancelar" />
                <Button type="confirm" fn={handleSave} text="Salvar" />
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
