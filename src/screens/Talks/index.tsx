import React, { useEffect, useState } from 'react'
import * as S from './styles'
import useStore from '../../store'
import { ArrowThin } from '../../utils/imports/icons'
import TalkItem from '../../components/TalkItem'
import { TRevisitFStore } from '../../utils/@types/_ministery/revisit'
import TalkView from '../subscreens/TalkView'
import { useNavigation } from '@react-navigation/native'
import { AppNavProps } from '../../navigators/App'
import { TTerritory } from '../../utils/@types/_ministery/territory'
import { TalksProps } from '../../navigators/Main'

type TOrderBy = {
  label: string
  value: 'recent' | 'old' | 'name'
}

type TTerrState = {
  selected: TTerritory | undefined
  list: TTerritory[]
}

const LOrderBy: TOrderBy[] = [
  { label: 'Mais recente', value: 'recent' },
  { label: 'Mais antigo', value: 'old' },
  { label: 'Nome', value: 'name' },
]

const TalksScreen = () => {
  const appNavigation = useNavigation<AppNavProps>()
  const talksNavigation = useNavigation<TalksProps>()

  const user = useStore(store => store.user)
  const [singleInfo, setSingleInfo] = useState<TRevisitFStore | null>(null)

  // Filters
  const [territories, setTerritories] = useState<TTerrState>({ selected: undefined, list: [] })
  const [orderBy, setOrderBy] = useState<TOrderBy>(LOrderBy[0])
  const [showingCat, setShowingCat] = useState<0 | 1 | 2>(0)
  const [list, setList] = useState<TRevisitFStore[]>([])

  const [regDdShow, setRegDdShow] = useState(false)
  const [ordDdShow, setOrdDdShow] = useState(false)

  const openRevisit = (revInfo: TRevisitFStore) => {
    talksNavigation.navigate("talkView", { rev: revInfo })
  }

  const handleCloseSingle = () => {
    setSingleInfo(null)
    appNavigation.setOptions({
      headerTitle: 'Pessoas contatadas',
      headerLeft: () => null,
      headerBackVisible: false,
    })
  }

  useEffect(() => {
    console.log(JSON.stringify(list))
  }, [list])

  useEffect(() => {
    if (user) {
      // user.revisits.forEach(r => console.log(r.neighborhood))
      const filtered = user.revisits.filter(r => r.stage === showingCat)
      setList(filtered)
    }
  }, [showingCat, user])

  useEffect(() => {
    handleCloseSingle()

    // territories
    setTerritories({
      selected: user?.territories[0] ?? undefined,
      list: user?.territories ?? [],
    })
  }, [user?.territories])

  return (
    <S.Page
      nestedScrollEnabled={true}
      contentContainerStyle={{
        justifyContent: 'flex-start',
        flex: 1,
      }}>
      <S.Container>
        <S.CategoriesTabs>
          <S.Category
            activeOpacity={1}
            active={showingCat === 0}
            onPress={() => setShowingCat(0)}>
            <S.CatName active={showingCat === 0}>1ª conversa</S.CatName>
          </S.Category>
          <S.Category
            activeOpacity={1}
            active={showingCat === 1}
            onPress={() => setShowingCat(1)}>
            <S.CatName active={showingCat === 1}>Revisita</S.CatName>
          </S.Category>
          <S.Category
            activeOpacity={1}
            active={showingCat === 2}
            onPress={() => setShowingCat(2)}>
            <S.CatName active={showingCat === 2}>Estudo</S.CatName>
          </S.Category>
        </S.CategoriesTabs>
        <S.Filters>
          <S.DropdownArea>
            <S.DropTop
              activeOpacity={1}
              onPress={() => setRegDdShow(!regDdShow)}>
                <S.SelectTitle>
                  <S.DropName>Região</S.DropName>
                  <ArrowThin />
                </S.SelectTitle>
              <S.Selected>{territories.selected?.name ?? ''}</S.Selected>
            </S.DropTop>
            <S.Dropdown visible={regDdShow}>
              <S.DropDownContent>
                {territories.list.map((t, k) => (
                  <S.DropDownItem key={k}
                    onPress={() => {
                      setRegDdShow(false)
                      setTerritories({
                        ...territories,
                        selected: t
                      })
                    }}
                    activeOpacity={1}
                  >
                    <S.DDIText >{t.name}</S.DDIText>
                  </S.DropDownItem>
                ))}
              </S.DropDownContent>
            </S.Dropdown>
          </S.DropdownArea>
          <S.DropdownArea right={true}>
            <S.DropTop
              activeOpacity={0.8}
              onPress={() => setOrdDdShow(!ordDdShow)}>
                <S.SelectTitle>
                  <S.DropName>Ordenar por</S.DropName>
                  <ArrowThin />
                </S.SelectTitle>
              <S.Selected>{orderBy.label}</S.Selected>
            </S.DropTop>
            <S.Dropdown visible={ordDdShow} right={true}>
              <S.DropDownContent>
                {LOrderBy.map((o, k) => (
                  <S.DropDownItem key={k}
                    onPress={() => {
                      setOrdDdShow(false)
                      setOrderBy(o)
                    }}
                    activeOpacity={1}
                  >
                    <S.DDIText >{o.label}</S.DDIText>
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
          paddingVertical: 10,
        }}>
        {list.map((item, k) => (
          <TalkItem key={k} talk={item} onSelect={openRevisit} />
        ))}
      </S.TalksList>
    </S.Page>
  )
}

export default TalksScreen
