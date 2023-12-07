import React, { useEffect, useState } from 'react'
import * as S from '../../Talks/styles'
import useStore from '../../../store'
import { ArrowThin } from '../../../utils/imports/icons'
import TalkItem from '../../../components/TalkItem'
import { TRevisitFStore } from '../../../utils/@types/_ministery/revisit'
import { NavigationProp, Route, useNavigation } from '@react-navigation/native'

const TalkPrincipal = () => {

  const user = useStore(store => store.user)
  const [showingCat, setShowingCat] = useState<1 | 2 | 3>(2)
  const [list, setList] = useState<any[]>([])

  const [regDdShow, setRegDdShow] = useState(false)
  const [ordDdShow, setOrdDdShow] = useState(false)

  const pageNavigation = useNavigation<any>()
  const openRevisit = (revInfo: TRevisitFStore) => {
    pageNavigation.navigate('Single', {
      rev: revInfo
    })
  }

  useEffect(() => {
    const filtered = user?.revisits.filter(r => r.stage === showingCat) ?? []
    setList(filtered)
  }, [showingCat, user])

  return (
    <S.Page
      contentContainerStyle={{
        justifyContent: 'flex-start',
        flex: 1,
      }}>
      <S.Container>
        <S.CategoriesTabs>
          <S.Category
            activeOpacity={1}
            active={showingCat === 1}
            onPress={() => setShowingCat(1)}>
            <S.CatName>1ª conversa</S.CatName>
          </S.Category>
          <S.Category
            activeOpacity={1}
            active={showingCat === 2}
            onPress={() => setShowingCat(2)}>
            <S.CatName>Revisita</S.CatName>
          </S.Category>
          <S.Category
            activeOpacity={1}
            active={showingCat === 3}
            onPress={() => setShowingCat(3)}>
            <S.CatName>Estudo</S.CatName>
          </S.Category>
        </S.CategoriesTabs>
        <S.Filters>
          <S.DropdownArea>
            <S.DropTop
              activeOpacity={1}
              onPress={() => setRegDdShow(!regDdShow)}>
              <S.DropName>Região</S.DropName>
              <ArrowThin />
            </S.DropTop>
            <S.Selected>Antônio Carlos</S.Selected>
            <S.Dropdown visible={regDdShow}>
              <S.DropDownContent>
                {user?.territories.map((t, k) => (
                  <S.DropDownItem key={k}>
                    <S.DDIText>{t.name}</S.DDIText>
                  </S.DropDownItem>
                ))}
              </S.DropDownContent>
            </S.Dropdown>
          </S.DropdownArea>
          <S.DropdownArea>
            <S.DropTop
              activeOpacity={0.8}
              onPress={() => setOrdDdShow(!ordDdShow)}>
              <S.DropName>Ordernar por</S.DropName>
              <ArrowThin />
            </S.DropTop>
            <S.Selected>Mais recente</S.Selected>
            <S.Dropdown visible={ordDdShow} right={true}>
              <S.DropDownContent>
                {user?.territories.map((t, k) => (
                  <S.DropDownItem key={k}>
                    <S.DDIText>{t.name}</S.DDIText>
                  </S.DropDownItem>
                ))}
              </S.DropDownContent>
            </S.Dropdown>
          </S.DropdownArea>
        </S.Filters>
      </S.Container>
      <S.TalksList
        contentContainerStyle={{
          rowGap: 12,
          paddingTop: 10,
        }}>
        {list.map((item, k) => (
          <TalkItem key={k} talk={item} onSelect={openRevisit} />
        ))}
      </S.TalksList>
    </S.Page>
  )
}

export default TalkPrincipal