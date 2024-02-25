import styled from 'styled-components/native'

export const Page = styled.ScrollView`
  flex: 1;
`

export const Container = styled.View`
  row-gap: 10px;
  padding: 20px 24px;
  row-gap: 20px;
  /* flex: 1; */
`

export const DateHourArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const ActivitiesList = styled.ScrollView`
  flex: 1;
  margin: 20px 24px 12px 10px;
`

export const CategoriesTabs = styled.View`
  flex-direction: row;
`

export const Category = styled.TouchableOpacity<{ active: boolean }>`
  flex: 1;
  background-color: ${({ theme, active }) =>
    active ? theme.background.cards : 'transparent'};
  padding: 8px 0;
  border-radius: 4px;
`

export const CatName = styled.Text<{ active: boolean }>`
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme, active }) =>
    active ? theme.colors.blackPiano : theme.colors.lightGrey};
`

export const Filters = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const DropdownArea = styled.View<{ right?: boolean }>`
  flex-direction: row;
  position: relative;
  flex: 1;
  justify-content: ${({ right }) => (right ? 'flex-end' : 'flex-start')};
`

export const DropTop = styled.TouchableOpacity<{ right?: boolean }>`
  align-items: right;
  flex-direction: column;
`

export const SelectTitle = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 9px;
`

export const DropName = styled.Text`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 12px;
`

export const Selected = styled.Text`
  color: ${({ theme }) => theme.colors.blackPiano};
  font-weight: 700;
`

export const Dropdown = styled.View<{ visible: boolean; right?: boolean }>`
  position: absolute;
  top: 100%;
  margin-top: 6px;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
`

export const DropDownContent = styled.View`
  background-color: #fff;
  position: relative;
  border-radius: 6px;
`

export const DropDownItem = styled.TouchableOpacity`
  flex-grow: 1;
  flex-direction: row;
  padding: 4px 10px;
`

export const DDIText = styled.Text`
  color: #000;
`

export const TalksList = styled.ScrollView`
  flex: 1;
`