import React, { useEffect, useState } from 'react'
import * as S from './styles'
import HomeAgendaItem from '../../components/HomeAgendaItem'

import { icons } from '../../utils/imports'
import HomeRevisitItem from '../../components/HomeRevisitItem'
import { useMMKVObject } from 'react-native-mmkv'
import { LocalUserInfo } from '../../utils/types/_user/local'
import ModalComponent from '../../components/Modal'
import Api from '../../utils/Api'
import { RefreshControl } from 'react-native'
import { padValue } from '../../utils/toolbox/parsers/padValue'
import { ActivityType } from '../../utils/types/_ministery/activity'
import { getDateString } from '../../utils/toolbox/parsers/date'
import { useNavigation } from '@react-navigation/native'
import { getStorageData } from '../../store/mmkv'

const HomeScreen = () => {
  const navigation = useNavigation<any>()

  const [user, setUserInfo] = useMMKVObject<LocalUserInfo>('user')

  const [modal, setModal] = useState({ showing: false, type: '' })
  const [isRefreshing, setIsRefreshing] = useState(false)

  const refreshInfo = async () => {
    setIsRefreshing(true)
    if (user) {
      await Api.getUserInfo(user.id).then(res => {
        if (res.ok) setUserInfo({ logged: true, ...res.info })
      })
    }
    setIsRefreshing(false)
  }

  const renderSchedule = () => {
    const today = new Date()
    const dateString = getDateString(today, 'usa')

    let actEls: ActivityType[] = []

    user?.schedule.weekly[(today.getDay() as 0, 1, 2, 3, 4, 5, 6)].forEach(a =>
      actEls.push(a),
    )

    user?.schedule.puntuals.forEach(p => {
      if (p.date === dateString) actEls = [...actEls, ...p.activities]
    })

    return actEls.map((a, k) => <HomeAgendaItem key={k} event={a} />)
  }

  const goTo = (route: string) => {
    navigation.navigate('Main', { screen: route })
  }

  useEffect(() => {
    getStorageData()
  }, [])

  return (
    <S.Page
      nestedScrollEnabled={true}
      contentContainerStyle={{
        justifyContent: 'flex-start',
        rowGap: 30,
        paddingBottom: 60,
      }}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={refreshInfo} />
      }>
      <ModalComponent
        visible={modal.showing}
        setModal={setModal}
        afterClose={refreshInfo}
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
          <S.AgendaTitle>
            Programação (
            {
              user?.schedule.weekly[
                (new Date().getDay() as 0, 1, 2, 3, 4, 5, 6)
              ].length
            }
            )
          </S.AgendaTitle>
          <S.AgendaList
            nestedScrollEnabled={true}
            contentContainerStyle={{
              rowGap: 10,
            }}>
            {renderSchedule()}
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
        <S.Shortcut
          onPress={() =>
            setModal({
              showing: true,
              type: 'newTalk',
            })
          }>
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
            <S.Seemore activeOpacity={1} onPress={() => goTo('Reports')}>
              <S.SeeMoreText>Ver mais</S.SeeMoreText>
              <icons.ArrowThick />
            </S.Seemore>
          </S.TopBlock>
          <S.ReportList>
            {user?.current_report && (
              <>
                <S.Row>
                  <S.TableLabel>Horas</S.TableLabel>
                  <S.TableValue>
                    {padValue(user.current_report.hours)}
                  </S.TableValue>
                </S.Row>
                <S.Row>
                  <S.TableLabel>Revisitas</S.TableLabel>
                  <S.TableValue>
                    {padValue(user.current_report.revisits)}
                  </S.TableValue>
                </S.Row>
                <S.Row>
                  <S.TableLabel>Estudos</S.TableLabel>
                  <S.TableValue>
                    {padValue(user.current_report.studies)}
                  </S.TableValue>
                </S.Row>
                <S.Row>
                  <S.TableLabel>Publicações</S.TableLabel>
                  <S.TableValue>
                    {padValue(user.current_report.publications)}
                  </S.TableValue>
                </S.Row>
                <S.Row>
                  <S.TableLabel>Vídeos</S.TableLabel>
                  <S.TableValue>
                    {padValue(user.current_report.videos)}
                  </S.TableValue>
                </S.Row>
              </>
            )}
          </S.ReportList>
        </S.InfoResume>

        <S.InfoResume>
          <S.TopBlock>
            <S.InfoTitle>Revisitas</S.InfoTitle>
            <S.Seemore activeOpacity={1} onPress={() => goTo('Talks')}>
              <S.SeeMoreText>Ver mais</S.SeeMoreText>
              <icons.ArrowThick />
            </S.Seemore>
          </S.TopBlock>
          <S.RevisitsList
            nestedScrollEnabled={true}
            contentContainerStyle={{ rowGap: 10 }}>
            {(user?.revisits ?? []).map((r, k) => (
              <HomeRevisitItem key={k} info={r} />
            ))}
          </S.RevisitsList>
        </S.InfoResume>
      </S.Container>
    </S.Page>
  )
}

export default HomeScreen
