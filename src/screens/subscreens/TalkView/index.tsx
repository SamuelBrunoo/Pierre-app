import React, { useEffect } from 'react'
import * as S from './styles'
import { Dimensions, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  TFSVisit,
  TRevisitFStore,
} from '../../../utils/@types/_ministery/revisit'
import { AppNavProps } from '../../../navigators/App'
import LeftBack from '../../../components/Header/LeftBack'
import RevisitVisit from '../../../components/RevisitVisit'

type Props = {
  rev: TRevisitFStore | null | undefined
  closeView: () => void
}

const TalkView = ({ rev, closeView }: Props) => {
  const navigation = useNavigation<AppNavProps>()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: rev?.person_name ?? '',
      headerLeft: () => <LeftBack backFn={closeView} />,
    })
  }, [])

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
          {rev?.address ?? 'Localização não definida'}
        </S.TerritoryName>
        <S.Map></S.Map>
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
