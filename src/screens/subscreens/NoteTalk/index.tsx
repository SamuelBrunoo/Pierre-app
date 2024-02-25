import React, { useEffect, useRef, useState } from 'react'
import * as S from './styles'
import NetInfo from '@react-native-community/netinfo'
import Input from '../../../components/Input'
import { FieldsErrors } from '../../../utils/@types/forms/newTalk'
import Select from '../../../components/Select'
import {
  CalendarIcon,
  CheckLightIcon,
  ClockIcon,
} from '../../../utils/imports/icons'
import DateHourPicker from '../../../components/DateHourPicker'
import { Alert, Text, View } from 'react-native'
import MapArea from '../../../components/MapArea'
import MapView, { LongPressEvent } from 'react-native-maps'
import Api from '../../../utils/Api'
import { AdressInfo } from '../../../utils/@types/Api/mapAdress'
import { getUserLocation } from '../../../utils/toolbox/location/getUserLocation'
import { Coordenates, CustomMarker } from '../../../utils/@types/maps'
import Button from '../../../components/Button'
import MapViewFragment from '../../../components/MapViewFragment'
import { useMMKV, useMMKVObject } from 'react-native-mmkv'
import { LocalUserInfo } from '../../../utils/@types/_user/local'
import { TTerritory } from '../../../utils/@types/_ministery/territory'
import Checkbox from '../../../components/Checkbox'
import ModalComponent from '../../../components/Modal'
import { SaveTalkProps } from '../../../utils/@types/Api/saveTalk'
import { useNavigation } from '@react-navigation/native'
import { HomeProps } from '../../../navigators/Main'

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

const NewTalk = () => {
  const navigation = useNavigation<HomeProps>()

  const [user, setUserInfo] = useMMKVObject<LocalUserInfo>('user')

  const [modal, setModal] = useState({ showing: false, type: 'saveLocation' })

  const mapViewRef = useRef<MapView | null>(null)

  // necessary data
  const [isNew, setIsNew] = useState(true)
  const [person, setPerson] = useState<{
    id: null | string
    name: string
  }>({
    id: null,
    name: '',
  })
  const [neighborhood, setNeighborhood] = useState<{
    id: string
    name: string
  }>(user?.territories[0] ?? { id: '', name: '' })
  const [notes, setNotes] = useState('')
  const [nextAbout, setNextAbout] = useState('')
  const [date, setDate] = useState((() => new Date())())
  const [mapCoord, setMapCoord] = useState<Coordenates>({
    latitude: 0,
    longitude: 0,
  })
  const [marker, setMarker] = useState<CustomMarker | null>(null)
  const [address, setAddress] = useState<string>('')

  const [snap, setSnap] = useState<string | null>(null)

  const [errors, setErrors] = useState<FieldsErrors>({
    address: {
      has: false,
      message: 'Digite o endereço ou ponto de referência',
    },
    name: { has: false, message: 'Digite ou escolha o nome da pessoa' },
    notes: { has: false, message: 'Por favor, faça uma anotação' },
    map: { has: false, message: 'Defina a localização' },
    territory: { has: false, message: 'Escolha o território' },
    nextAbout: { has: false, message: 'Digite o asunto da próxima visita' },
  })

  // Functions

  const handleClose = () => {
    //
  }

  const handleMapClick = () => {
    getUserLocation()
      .then(({ coords: userLocation }) => {
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
      .then(() => {
        setTimeout(() => {
          setModal({
            ...modal,
            showing: !modal.showing,
          })
        }, 500)
      })
  }

  const saveLocationData = (data: {
    snap: string | null
    marker: Coordenates
  }) => {
    setSnap(data.snap)
    setMarker(data.marker)
    setModal({ showing: false, type: modal.type })
  }

  const handleName = (p: string, id?: string) => {
    if (isNew) {
      setPerson({ id: null, name: p })
    } else {
      if (id) setPerson({ id, name: p })
    }
  }

  const verifyErrors = () => {
    let hasError: {
      has: boolean
      fields: { field: string; hasError: boolean }[]
    } = {
      has: false,
      fields: [],
    }

    if (isNew) {
      const fields = [
        { field: 'name', hasError: isNew && person.name.trim().length === 0 },
        // {
        //   field: 'map',
        //   hasError:
        //     isNew &&
        //     (!mapCoord || mapCoord.latitude === 0 || mapCoord.longitude === 0),
        // },
        { field: 'address', hasError: !address || address.trim().length === 0 },
        {
          field: 'territory',
          hasError: !neighborhood.id || neighborhood.id.trim().length === 0,
        },
        { field: 'notes', hasError: notes.trim().length === 0 },
        // {
        //   field: 'marker',
        //   hasError: !marker || marker.latitude === 0 || marker.longitude === 0,
        // },
        {
          field: 'nextAbout',
          hasError: !nextAbout || nextAbout.trim().length === 0,
        },
      ]

      if (fields.some(f => f.hasError)) {
        hasError = {
          has: true,
          fields: fields,
        }
      }
    } else {
      const fields = [
        { field: 'name', hasError: person.id?.trim().length === 0 },
        { field: 'notes', hasError: notes.trim().length === 0 },
        {
          field: 'nextAbout',
          hasError: !nextAbout || nextAbout.trim().length === 0,
        },
      ]

      if (fields.some(f => f.hasError)) {
        hasError = {
          has: true,
          fields: fields,
        }
      }
    }

    return hasError
  }

  const showErrors = (fields: { field: string; hasError: boolean }[]) => {
    let newObj = { ...errors }
    fields.forEach(f => {
      // @ts-ignore
      newObj[f.field] = { ...newObj[f.field], has: f.hasError }
    })
    setErrors(newObj)
  }

  const handleSave = async () => {
    const hasErrors = verifyErrors()
    const hasConnection = await NetInfo.fetch().then(s => s.isConnected)

    if (hasConnection) {
      if (!hasErrors.has) {
        let save = { ok: false }

        if (isNew) {
          //
          const data: SaveTalkProps = {
            address: address as string,
            date,
            neighborhood: neighborhood.id,
            marker: marker ?? mapCoord,
            name: person.name,
            notes,
          }

          save = await Api.saveTalk(user?.id as string, data)
        } else {
          //
          const data: SaveTalkProps = {
            personId: person.id as string,
            date,
            notes,
            nextAbout,
          }

          save = await Api.saveRevisit(user?.id as string, data)
        }

        if (save.ok) {
          navigation.pop()
          // save in local the returned parsed value?
        } else {
          Alert.alert(
            'Não foi possível salvar',
            'Será salvo como rascunho e você poderá terminar posteriormente.',
            [
              {
                text: 'Ok',
                onPress: () => {
                  navigation.pop()
                },
              },
            ],
          )
        }
      } else {
        showErrors(hasErrors.fields)
      }
    } else {
      // save in local
      // or use firebase off-line saving
    }
  }

  useEffect(() => {
    console.log('Errors', errors)
  }, [errors])

  return (
    <S.Page
      contentContainerStyle={{
        justifyContent: 'flex-start',
        flex: 1,
      }}>
      <ModalComponent
        visible={modal.showing}
        setModal={setModal}
        afterClose={() => {}}
        saveLocationData={saveLocationData}
        type={modal.type as 'saveLocation'}
        mapData={{
          mapCoord,
        }}
      />
      <S.Container>
        <S.DateHourArea>
          <DateHourPicker
            key={'hour'}
            fieldLabel={'Hora'}
            date={date}
            onSet={datetime => setDate(new Date(datetime))}
            type="hour"
          />
          <DateHourPicker
            key={'day'}
            fieldLabel={'Dia'}
            date={date}
            onSet={datetime => setDate(new Date(datetime))}
            type="date"
          />
        </S.DateHourArea>

        <S.Content
          contentContainerStyle={{
            rowGap: 10,
            paddingBottom: 20,
            justifyContent: 'space-between',
            flexGrow: 1,
          }}
          overScrollMode="never">
          <S.ContentPrincipal>
            <Checkbox
              isChecked={!isNew}
              onChange={() => setIsNew(!isNew)}
              text="Já contatada"
            />

            {/* who is */}
            <S.InputWrapper>
              {isNew ? (
                <Input
                  type="none"
                  value={person.name}
                  onChange={v => handleName(v)}
                  placeholder="Nome da pessoa"
                  error={errors.name}
                />
              ) : (
                <Select
                  options={persons}
                  value={persons[0]}
                  onChange={v => handleName(v.name, v.id)}
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
                  error={errors.map}
                />
                <Input
                  type="none"
                  value={address}
                  onChange={setAddress}
                  placeholder="Endereço"
                  error={errors.address}
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
                  error={errors.territory}
                  disabled={user?.territories && user.territories.length < 1}
                />
                {/* else show input disabled: 'Nenhum território cadastrado' */}
              </>
            )}

            {/* notes */}
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

            {/* next about */}
            <S.InputWrapper>
              <Input
                type="none"
                textarea={true}
                error={errors.nextAbout}
                onChange={setNextAbout}
                placeholder="Próximo assunto"
                value={nextAbout}
              />
            </S.InputWrapper>
          </S.ContentPrincipal>
        </S.Content>
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
            title="Salvar"
            action={handleSave}
          />
        </S.BtnsArea>
      </S.Container>
    </S.Page>
  )
}

export default NewTalk
