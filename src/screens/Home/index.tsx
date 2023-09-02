import React, { useState } from 'react'
import * as S from './styles'
import HomeAgendaItem from '../../components/HomeAgendaItem'

import { icons } from '../../utils/imports'
import HomeRevisitItem from '../../components/HomeRevisitItem'
import { useMMKVObject } from 'react-native-mmkv'
import { UserInfo } from '../../utils/types/user'
import ModalComponent from '../../components/Modal'


const events = [
  {
    name: 'Carrinho com Beltrana',
    time: '14:00 - 16:00',
    done: true,
  },
  {
    name: 'Estudo',
    time: '18:00 - 19:00',
    done: true,
    studentName: 'Marcinha'
  },
  {
    name: 'Carrinho com Beltrana',
    time: '14:00 - 16:00',
    done: true,
  },
  {
    name: 'Carrinho com Beltrana',
    time: '14:00 - 16:00',
    done: true,
  },
]

const revisits = [
  {
    personName: 'Jurema da Silva',
    location: 'Canudos',
    lastVisitDate: '23/08/2023',
    id: 1,
  },
  {
    personName: 'Fulaneide',
    location: 'Vila Doze',
    lastVisitDate: '22/08/2023',
    id: 2,
  },
  {
    personName: 'Barcileide',
    location: 'Rio Farias',
    lastVisitDate: '22/08/2023',
    id: 3,
  },
  {
    personName: 'Cleitu',
    location: 'Coca-Cola',
    lastVisitDate: '19/08/2023',
    id: 4,
  },
]



const HomeScreen = () => {

  const [user] = useMMKVObject<UserInfo>('user')

  const [modal, setModal] = useState({
    showing: false,
    type: ''
  })

  return (
    <S.Page
      nestedScrollEnabled={true}
      contentContainerStyle={{
        justifyContent: 'flex-start',
        rowGap: 30,
        paddingBottom: 60
      }}>
      <ModalComponent
        visible={modal.showing}
        setModal={setModal}
        type={'newTalk'}
      />
      <S.Container>
        <S.PageHead>
          <S.Welcome>
            <S.Hi>Boa tarde,</S.Hi>
            <S.UserName>{user?.name}</S.UserName>
          </S.Welcome>
        </S.PageHead>

        <S.TodayAgenda>
          <S.AgendaTitle>Programação (5)</S.AgendaTitle>
          <S.AgendaList
            nestedScrollEnabled={true}
            contentContainerStyle={{
              rowGap: 10
            }}>
            {events.map((ev, k) => <HomeAgendaItem key={k} event={ev} />)}
          </S.AgendaList>
        </S.TodayAgenda>
      </S.Container>
      <S.Shortcuts>
        <S.Shortcut>
          <S.ScIconArea>
            <icons.ClockIcon />
          </S.ScIconArea>
          <S.ScName numberOfLines={1}>Registrar dia</S.ScName>
        </S.Shortcut>
        <S.Shortcut onPress={() => setModal({
          showing: true,
          type: 'newTalk'
        })}>
          <S.ScIconArea>
            <icons.PlusIcon />
          </S.ScIconArea>
          <S.ScName numberOfLines={1}>Anotar conversa</S.ScName>
        </S.Shortcut>
        <S.Shortcut>
          <S.ScIconArea>
            <icons.SendIcon />
          </S.ScIconArea>
          <S.ScName numberOfLines={1}>Enviar relatório</S.ScName>
        </S.Shortcut>
      </S.Shortcuts>
      <S.Container>
        <S.InfoResume>
          <S.TopBlock>
            <S.InfoTitle>Relatório atual</S.InfoTitle>
            <S.Seemore activeOpacity={1}>
              <S.SeeMoreText>Ver mais</S.SeeMoreText>
              <icons.ArrowThick />
            </S.Seemore>
          </S.TopBlock>
          <S.ReportList>
            <S.Row>
              <S.TableLabel>Horas</S.TableLabel>
              <S.TableValue>50</S.TableValue>
            </S.Row>
            <S.Row>
              <S.TableLabel>Revisitas</S.TableLabel>
              <S.TableValue>50</S.TableValue>
            </S.Row>
            <S.Row>
              <S.TableLabel>Estudos</S.TableLabel>
              <S.TableValue>50</S.TableValue>
            </S.Row>
            <S.Row>
              <S.TableLabel>Publicações</S.TableLabel>
              <S.TableValue>50</S.TableValue>
            </S.Row>
            <S.Row>
              <S.TableLabel>Vídeos</S.TableLabel>
              <S.TableValue>50</S.TableValue>
            </S.Row>
          </S.ReportList>
        </S.InfoResume>

        <S.InfoResume>
          <S.TopBlock>
            <S.InfoTitle>Revisitas</S.InfoTitle>
            <S.Seemore activeOpacity={1}>
              <S.SeeMoreText>Ver mais</S.SeeMoreText>
              <icons.ArrowThick />
            </S.Seemore>
          </S.TopBlock>
          <S.RevisitsList
            nestedScrollEnabled={true}
            contentContainerStyle={{ rowGap: 10 }}>
            {revisits.map((r, k) => <HomeRevisitItem key={k} info={r} />)}
          </S.RevisitsList>
        </S.InfoResume>
      </S.Container>
    </S.Page>
  )

}


export default HomeScreen