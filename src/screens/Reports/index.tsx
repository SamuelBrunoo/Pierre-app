import React from 'react'
import * as S from './styles'
import useStore from '../../store'
import HomeAgendaItem from '../../components/HomeAgendaItem'

import { icons } from '../../utils/imports'
import HomeRevisitItem from '../../components/HomeRevisitItem'
import { ArrowThin } from '../../utils/imports/icons'
import TalkItem from '../../components/TalkItem'
import Calendar from '../../components/Calendar'


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

const months = [
  {
    active: false,
    name: 'Setembro',
  },
  {
    active: false,
    name: 'Outubro',
  },
  {
    active: false,
    name: 'Novembro',
  },
  {
    active: true,
    name: 'Dezembro',
  },
  {
    active: false,
    name: 'Janeiro',
  },
  {
    active: false,
    name: 'Fevereiro',
  },
  {
    active: false,
    name: 'Março',
  },
  {
    active: false,
    name: 'Abril',
  },
  {
    active: false,
    name: 'Maio',
  },
  {
    active: false,
    name: 'Junho',
  },
  {
    active: false,
    name: 'Julho',
  },
  {
    active: false,
    name: 'Agosto',
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
        <S.Annual>
          <S.ReportTitle>Anual</S.ReportTitle>
          <S.AnnualReport>
            <S.AnnualReportItem>
              <S.ARILabel>Horas</S.ARILabel>
              <S.ARIValue>50</S.ARIValue>
            </S.AnnualReportItem>
            <S.AnnualReportItem>
              <S.ARILabel>Revistas</S.ARILabel>
              <S.ARIValue>50</S.ARIValue>
            </S.AnnualReportItem>
            <S.AnnualReportItem>
              <S.ARILabel>Publicações</S.ARILabel>
              <S.ARIValue>50</S.ARIValue>
            </S.AnnualReportItem>
            <S.AnnualReportItem>
              <S.ARILabel>Vídeos</S.ARILabel>
              <S.ARIValue>50</S.ARIValue>
            </S.AnnualReportItem>
            <S.AnnualReportItem>
              <S.ARILabel>Estudos</S.ARILabel>
              <S.ARIValue>50</S.ARIValue>
            </S.AnnualReportItem>
            <S.AnnualReportItem>
              <S.ARILabel>Estudos totais</S.ARILabel>
              <S.ARIValue>50</S.ARIValue>
            </S.AnnualReportItem>
          </S.AnnualReport >
        </S.Annual >
      </S.Container >
      <S.MonthsSelect horizontal={true}>
        <S.MonthsContainer>
          {months.map((m, k) => (
            <S.MonthItem key={k} active={m.active} activeOpacity={1}>
              <S.MonthName>{m.name}</S.MonthName>
            </S.MonthItem>
          ))}
        </S.MonthsContainer>
      </S.MonthsSelect>
      <S.Container>
        <Calendar />
      </S.Container>
    </S.Page >
  )

}


export default ReportsScreen