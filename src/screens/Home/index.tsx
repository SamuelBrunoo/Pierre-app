import React from 'react'
import { Text } from 'react-native'
import * as S from './styles'
import useStore from '../../store'
import HomeAgendaItem from '../../components/HomeAgendaItem'


const HomeScreen = () => {

  const user = useStore(store => store.user)

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
  ]

  return (
    <S.Page
      contentInsetAdjustmentBehavior="scrollableAxes"
      contentContainerStyle={{
        backgroundColor: 'rgba(35, 35, 35, 1)',
        flex: 1,
        justifyContent: 'flex-start',
      }}>
      <S.Container>
        <S.PageHead>
          <S.Welcome>
            <S.Hi>Boa tarde,</S.Hi>
            <S.UserName>{user.name}</S.UserName>
          </S.Welcome>
        </S.PageHead>

        <S.TodayAgenda>
          <S.AgendaTitle>Programação (5)</S.AgendaTitle>
          <S.AgendaList>
            {events.map((ev, k) => <HomeAgendaItem key={k} event={ev} />)}
          </S.AgendaList>
        </S.TodayAgenda>
      </S.Container>
    </S.Page>
  )

}


export default HomeScreen