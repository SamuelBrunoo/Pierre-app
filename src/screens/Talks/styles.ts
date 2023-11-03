import { ImageBackground } from 'react-native'
import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

export const Page = styled.ScrollView``

export const Container = styled.View`
  row-gap: 10px;
  padding-right: 24px;
  padding-left: 24px;
  justify-content: flex-start;
  row-gap: 20px;
`

export const CategoriesTabs = styled.View`
  background-color: rgba(34, 34, 34, 1);
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
`

export const Category = styled.TouchableOpacity<{ active: boolean }>`
  flex: 1;
  opacity: ${({ active }) => (active ? 1 : 0.6)};
`

export const CatName = styled.Text`
  color: #fff;
  text-align: center;
`

export const Filters = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const DropdownArea = styled.View`
  position: relative;
`

export const DropTop = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  opacity: 0.6;
`

export const Dropdown = styled.View<{ visible: boolean; right?: boolean }>`
  position: absolute;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  width: 150%;
  height: 140px;
  background-color: rgba(50, 50, 50, 1);
  top: 38px;
  ${({right}) => right ? 'right: 0px;' : ''}
  border-radius: 4px;
  filter: 'blur(100px)';
  z-index: 6;
  overflow: hidden;
`

export const DropDownContent = styled.View`
  display: grid;
`

export const DropDownItem = styled.TouchableOpacity`
  padding: 7px 8px;
`

export const DDIText = styled.Text`
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: #fff;
`

export const DropName = styled.Text`
  font-size: 12px;
  color: #fff;
`

export const Selected = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #fff;
`

export const TalksList = styled.ScrollView`
  flex: 1;
  margin: 20px 24px 12px 10px;
`
