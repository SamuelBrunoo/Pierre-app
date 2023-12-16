import React, { useEffect, useState } from 'react'
import * as S from './styles'
import useStore from '../../../store'
import TalkItem from '../../../components/TalkItem'
import { TRevisitFStore } from '../../../utils/@types/_ministery/revisit'
import { useNavigation } from '@react-navigation/native'
import { HomeProps } from '../../../navigators/Main'
import DateHourPicker from '../../../components/DateHourPicker'
import Button from '../../../components/Button'
import ActivityLogCard from '../../../components/ActivityLogCard'
import { ActivityLog } from '../../../utils/@types/components/ActivityLogCard'

const falseData = [
  {
    id: 1,
    type: 1,
    hourStart: new Date(),
    hourEnd: new Date(),
    partner: 'Keila',
  },
  {
    id: 2,
    type: 2,
    hourStart: new Date(),
    hourEnd: new Date(),
    partner: 'Keila',
  },
  {
    id: 3,
    type: 1,
    hourStart: new Date(),
    hourEnd: new Date(),
    partner: 'Keila',
  },
  {
    id: 4,
    type: 3,
    hourStart: new Date(),
    hourEnd: new Date(),
    partner: 'Keila',
  },
  {
    id: 5,
    type: 3,
    hourStart: new Date(),
    hourEnd: new Date(),
  },
  {
    id: 6,
    type: 4,
    hourStart: new Date(),
    hourEnd: new Date(),
  },
  {
    id: 7,
    type: 4,
    hourStart: new Date(),
    hourEnd: new Date(),
  },
  {
    id: 8,
    type: 2,
    hourStart: new Date(),
    hourEnd: new Date(),
  },
  {
    id: 9,
    type: 2,
    hourStart: new Date(),
    hourEnd: new Date(),
  },
]

const NoteTalk = () => {
  const user = useStore(store => store.user)
  const [showingCat, setShowingCat] = useState<1 | 2 | 3>(2)
  const [list, setList] = useState<ActivityLog[]>(falseData)
  const [date, setDate] = useState<Date>(new Date())

  const pageNavigation = useNavigation<HomeProps>()
  const openRevisit = (revInfo: TRevisitFStore) => {
    // pageNavigation.navigate('')
  }

  useEffect(() => {
    // const filtered = user?.revisits.filter(r => r.stage === showingCat) ?? []
    // setList(filtered)
  }, [showingCat, user])

  useEffect(() => {
    setDate(new Date())
  }, [])

  return (
    <S.Page
      contentContainerStyle={{
        justifyContent: 'flex-start',
        flex: 1,
      }}>
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

        <S.ActivitiesList
          contentContainerStyle={{
            rowGap: 6,
            paddingTop: 10,
          }}>
          <S.InfoTitle>Note talk</S.InfoTitle>
          {list.map((item, k) => (
            <ActivityLogCard key={k} info={item} deleteAct={() => null} />
          ))}
        </S.ActivitiesList>
        <S.ButtonsArea>
          <Button
            type={'circle'}
            icon='add'
            action={() => {}}
          />
          <S.BtnsRow>
            <Button
              type={'default'}
              action={() => {}}
              title="Cancelar"
              mode="cancel"
            />
            <Button
              type={'default'}
              action={() => {}}
              title="Salvar"
              mode="confirm"
            />
          </S.BtnsRow>
        </S.ButtonsArea>
      </S.Container>
    </S.Page>
  )
}

export default NoteTalk
