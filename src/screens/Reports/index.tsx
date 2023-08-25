import React from 'react'
import * as S from './styles'
import useStore from '../../store'
import HomeAgendaItem from '../../components/HomeAgendaItem'

import { icons } from '../../utils/imports'
import HomeRevisitItem from '../../components/HomeRevisitItem'
import { ArrowThin } from '../../utils/imports/icons'
import TalkItem from '../../components/TalkItem'


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



const ReportsScreen = () => {

  const user = useStore(store => store.user)

  return (
    <S.Page
      contentContainerStyle={{
        justifyContent: 'flex-start',
        flex: 1,
      }}
    >
      <S.Container>
        <S.CategoriesTabs>
          <S.Category activeOpacity={1} active={false}>
            <S.CatName>1ª conversa</S.CatName>
          </S.Category>
          <S.Category activeOpacity={1} active={true}>
            <S.CatName>Revisita</S.CatName>
          </S.Category>
          <S.Category activeOpacity={1} active={false}>
            <S.CatName>Estudo</S.CatName>
          </S.Category>
        </S.CategoriesTabs>
        <S.Filters>
          <S.DropdownArea>
            <S.DropTop activeOpacity={1}>
              <S.DropName>Região</S.DropName>
              <ArrowThin />
              <S.Dropdown></S.Dropdown>
            </S.DropTop>
            <S.Selected>Antônio Carlos</S.Selected>
          </S.DropdownArea>
          <S.DropdownArea>
            <S.DropTop activeOpacity={1}>
              <S.DropName>Ordernar por</S.DropName>
              <ArrowThin />
              <S.Dropdown></S.Dropdown>
            </S.DropTop>
            <S.Selected>Mais recente</S.Selected>
          </S.DropdownArea>
        </S.Filters>
      </S.Container>
      <S.TalksList
        contentContainerStyle={{
          rowGap: 12,
          paddingTop: 10,
        }}>
        <TalkItem />
        <TalkItem />
        <TalkItem />
        <TalkItem />
        <TalkItem />
        <TalkItem />
        <TalkItem />
        <TalkItem />
        <TalkItem />
        <TalkItem />
        <TalkItem />
        <TalkItem />
        <TalkItem />
        <TalkItem />
      </S.TalksList>
    </S.Page>
  )

}


export default ReportsScreen