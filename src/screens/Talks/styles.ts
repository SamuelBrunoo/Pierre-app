import styled from "styled-components/native"


export const Page = styled.ScrollView``

export const Container = styled.View`
  row-gap: 10px;
  padding-right: 24px;
  padding-left: 24px;
  justify-content:  flex-start;
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

export const Category = styled.TouchableOpacity<{ active: boolean; }>`
  flex: 1;
  opacity: ${({ active }) => active ? 1 : 0.6};
`

export const CatName = styled.Text`
  color:#FFF;
  text-align: center;
`

export const Filters = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const DropdownArea = styled.View``

export const DropTop = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  opacity: .6;
`

export const Dropdown = styled.View``

export const DropName = styled.Text`
  font-size: 12px;
  color: #FFF;
`

export const Selected = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #FFF;
`

export const TalksList = styled.ScrollView`
  flex: 1;
  margin: 20px 24px 12px 10px;
`
