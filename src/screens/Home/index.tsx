import React from 'react'
import * as S from './styles'
import useStore from '../../store'
import HomeAgendaItem from '../../components/HomeAgendaItem'

import { icons } from '../../utils/imports'


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



const HomeScreen = () => {

  const user = useStore(store => store.user)

  return (
    <S.Page
      contentInsetAdjustmentBehavior="scrollableAxes"
      contentContainerStyle={{
        backgroundColor: 'rgba(35, 35, 35, 1)',
        flex: 1,
        justifyContent: 'flex-start',
        rowGap: 30
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
          <S.AgendaList
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
        <S.Shortcut>
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
    </S.Page>
  )

}


export default HomeScreen