import React from 'react'
import * as S from './styles'
import { PlusIcon, ViewBigIcon } from '../../utils/imports/icons'
import Calendar from '../../components/Calendar'


const ScheduleScreen = () => {


  return (
    <S.Page
      contentContainerStyle={{
        justifyContent: 'space-between',
        gap: 20,
        flex: 1,
        paddingBottom: 60
      }}
    >
      <S.Container>
        <Calendar />
        <S.Legends>
          <S.Legend>
            <S.LegendColor color={'orange'} />
            <S.LegendLabel>Arranjos fixos</S.LegendLabel>
          </S.Legend>
          <S.Legend>
            <S.LegendColor color={'purple'} />
            <S.LegendLabel>Arranjos pontuais</S.LegendLabel>
          </S.Legend>
        </S.Legends>
        <S.Line />
        <S.Resume>
          <S.ResumeTitle>Programação mensal</S.ResumeTitle>
          <S.MonthlyHours>
            <S.MHLabel>Horas</S.MHLabel>
            <S.MHValue>50</S.MHValue>
          </S.MonthlyHours >
          <S.MonthlyCalcs>
            <S.Descriptions>
              <S.Category>
                <S.CatLabel>Ministério:</S.CatLabel>
                <S.CatValue>32</S.CatValue>
              </S.Category>
              <S.Category>
                <S.CatLabel>LDC:</S.CatLabel>
                <S.CatValue>18</S.CatValue>
              </S.Category>
            </S.Descriptions>
            <S.Arrengements>
              <S.ArrResume>
                <S.LegendColor color={'orange'} />
                <S.ArrLabel>32</S.ArrLabel>
              </S.ArrResume>
              <S.ArrResume>
                <S.LegendColor color={'purple'} />
                <S.ArrLabel>18</S.ArrLabel>
              </S.ArrResume>
            </S.Arrengements>
          </S.MonthlyCalcs>
        </S.Resume >
        <S.Resume>
          <S.ResumeTitle>Programação anual</S.ResumeTitle>
          <S.MonthlyHours>
            <S.MHLabel>Horas mínimas</S.MHLabel>
            <S.MHValue>600</S.MHValue>
          </S.MonthlyHours >
          <S.MonthlyCalcs>
            <S.Descriptions>
              <S.Category>
                <S.CatLabel>Ministério:</S.CatLabel>
                <S.CatValue>514</S.CatValue>
              </S.Category>
              <S.Category>
                <S.CatLabel>LDC:</S.CatLabel>
                <S.CatValue>86</S.CatValue>
              </S.Category>
            </S.Descriptions>
            <S.Arrengements>
              <S.ArrResume>
                <S.LegendColor color={'orange'} />
                <S.ArrLabel>580</S.ArrLabel>
              </S.ArrResume>
              <S.ArrResume>
                <S.LegendColor color={'purple'} />
                <S.ArrLabel>20</S.ArrLabel>
              </S.ArrResume>
            </S.Arrengements>
          </S.MonthlyCalcs>
        </S.Resume >
      </S.Container>
      <S.Container>
        <S.ButtonsArea>
          <S.Btn>
            <S.BtnIconArea>
              <ViewBigIcon />
            </S.BtnIconArea>
            <S.BtnName>Ver arranjos</S.BtnName>
          </S.Btn>
          <S.Btn>
            <S.BtnIconArea>
              <PlusIcon />
            </S.BtnIconArea>
            <S.BtnName>Adicionar arranjo</S.BtnName>
          </S.Btn>
        </S.ButtonsArea>
      </S.Container>
    </S.Page>
  )

}


export default ScheduleScreen