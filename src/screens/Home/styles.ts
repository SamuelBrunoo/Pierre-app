import styled from "styled-components/native"


export const Page = styled.ScrollView``

export const Container = styled.View`
  row-gap: 10px;
  padding-right: 24px;
  padding-left: 24px;
  justify-content:  flex-start;
  row-gap: 40px;
`

export const PageHead = styled.View`
  padding-top: 30px;
`

export const Welcome = styled.View``

export const Hi = styled.Text`
  font-weight: 300;
  font-size:  20px;
  color: #AFAFAF;
`

export const UserName = styled.Text`
  font-weight: 700;
  font-size:  20px;
  color: #AFAFAF;
`

export const TodayAgenda = styled.View`
  row-gap: 20px;
`

export const AgendaTitle = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: #FFF;
`

export const AgendaList = styled.ScrollView`
  row-gap: 10px;
  max-height: 110px;
  overflow-y: scroll;
  padding-right: 20px;
`

export const Shortcuts = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #1E1E1E;
  gap: 24px;
`

export const Shortcut = styled.TouchableOpacity`
  color: #FFF;
  align-items: center;
  row-gap: 6px;
`

export const ScIconArea = styled.View`
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50px;
  background-color: #232323;
`

export const ScName = styled.Text`
  font-size: 12px;
  font-weight: 300;
  color: #FFF;
  text-align: center;
`

export const InfoResume = styled.View`
  row-gap: 14px;
`

export const TopBlock = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const InfoTitle = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: #FFF;
`

export const Seemore = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 6px;
  opacity: .6;
`

export const SeeMoreText = styled.Text`
  font-size: 14px;
  color: #FFF;
`

export const ReportList = styled.View`
  padding-right:20px;
  padding-left:20px;
  row-gap: 6px;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const TableLabel = styled.Text`
  font-size: 16px;
  color: #FFF;
`

export const TableValue = styled.Text`
  font-size:16px;
  font-weight: 300;
  color: #AFAFAF;
`

export const RevisitsList = styled.ScrollView`
  row-gap: 10px;
  max-height: 180px;
  overflow-y: scroll;
  padding-right: 20px;
`