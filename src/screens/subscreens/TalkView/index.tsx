import React, { useEffect } from 'react'
import * as S from './styles'
import { Dimensions, Text } from 'react-native'
import { Route, useNavigation } from '@react-navigation/native'
import {
  TFSVisit,
  TRevisitFStore,
} from '../../../utils/@types/_ministery/revisit'
import { AppNavProps } from '../../../navigators/App'
import LeftBack from '../../../components/Header/LeftBack'
import RevisitVisit from '../../../components/RevisitVisit'

interface Props {
  route: Route<'talkView', {rev: TRevisitFStore}>
}

// const TalkView = ({ rev }: Props) => {
const TalkView = ({route}: Props) => {
  
  const navigation = useNavigation<AppNavProps>()
  const { rev } = route.params

  useEffect(() => {
    navigation.setOptions({
      headerTitle: rev?.person_name ?? '',
    })
  }, [rev])

  return (
    <S.Page
      nestedScrollEnabled={true}
      contentContainerStyle={{
        rowGap: 20,
        paddingRight: 24,
        paddingLeft: 24,
      }}>
      <S.LocationSection>
        <S.TerritoryName>
          {rev?.neighborhood ?? 'Localização não definida'}
        </S.TerritoryName>
        {!!rev.location.latitude && !!rev.location.longitude &&
          <S.Map></S.Map>
        }
        <S.Address>
          {rev?.address ?? 'Endereço não definido'}
        </S.Address>
      </S.LocationSection>
      <S.Next>
        <S.Title>Próxima conversa</S.Title>
        <S.NextSubject>Algum assunto</S.NextSubject>
      </S.Next>
      <S.History>
        <S.Title>Conversas</S.Title>
        <S.ListContainer
          contentContainerStyle={{
            rowGap: 8,
          }}>
          {rev?.visits.map((v, k) => (
            <RevisitVisit key={k} info={v} />
          ))}
        </S.ListContainer>
      </S.History>
    </S.Page>
  )
}

export default TalkView
