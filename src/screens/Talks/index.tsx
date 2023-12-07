import React, { useEffect, useState } from 'react'
import * as S from './styles'
import useStore from '../../store'
import { ArrowThin } from '../../utils/imports/icons'
import TalkItem from '../../components/TalkItem'
import { TRevisitFStore } from '../../utils/@types/_ministery/revisit'
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs'
import { TabsProps, TabsRoutes } from '../../navigators/Main'
import TalkView from '../subscreens/TalkView'
import { useNavigation } from '@react-navigation/native'
import { AppNavProps } from '../../navigators/App'
import { TTerritory } from '../../utils/@types/_ministery/territory'

type TalksScreenProps = {
  navigation: BottomTabNavigationProp<TabsRoutes>
  route: {
    params: {
      single?: boolean | undefined
      data?: TRevisitFStore | null
    }
  }
}

type TOrderBy = 'recent' | 'old' | 'name'
const LOrderBy = [
  { label: 'Mais recente', value: 'recent' },
  { label: 'Mais antigo', value: 'old' },
  { label: 'Nome', value: 'name' },
]

const TalksScreen = ({ navigation, route }: TalksScreenProps) => {
  const appNavigation = useNavigation<AppNavProps>()

  const user = useStore(store => store.user)
  const [singleInfo, setSingleInfo] = useState<TRevisitFStore | null>(null)

  // Filters
  const [territories, setTerritories] = useState<{
    selected: TTerritory | undefined
    list: TTerritory[]
  }>({ selected: undefined, list: [] })
  const [orderBy, setOrderBy] = useState<TOrderBy>('recent')
  const [showingCat, setShowingCat] = useState<0 | 1 | 2>(1)
  const [list, setList] = useState<TRevisitFStore[]>([])

  const [regDdShow, setRegDdShow] = useState(false)
  const [ordDdShow, setOrdDdShow] = useState(false)

  const openRevisit = (revInfo: TRevisitFStore) => {
    setSingleInfo(revInfo)
    console.log(revInfo.person_name)
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
    if (user) {
      console.log(user.territories)
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

  useEffect(() => {
    if (route.params) {
      const { single, data } = route.params
      if (single && data) openRevisit(data)
    }
  }, [route])

  return (
    <S.Page
      contentContainerStyle={{
        justifyContent: 'flex-start',
        flex: 1,
      }}>
      {singleInfo && (
        <TalkView rev={singleInfo} closeView={handleCloseSingle} />
      )}
      <S.Container>
        <S.CategoriesTabs>
          <S.Category
            activeOpacity={1}
            active={showingCat === 0}
            onPress={() => setShowingCat(0)}>
            <S.CatName>1ª conversa</S.CatName>
          </S.Category>
          <S.Category
            activeOpacity={1}
            active={showingCat === 1}
            onPress={() => setShowingCat(1)}>
            <S.CatName>Revisita</S.CatName>
          </S.Category>
          <S.Category
            activeOpacity={1}
            active={showingCat === 2}
            onPress={() => setShowingCat(2)}>
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
            <S.Selected>{territories.selected?.name ?? ''}</S.Selected>
            <S.Dropdown visible={regDdShow}>
              <S.DropDownContent>
                {territories.list.map((t, k) => (
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
                {LOrderBy.map((o, k) => (
                  <S.DropDownItem key={k}>
                    <S.DDIText>{o.label}</S.DDIText>
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

export default TalksScreen
