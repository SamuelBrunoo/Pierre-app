import styled from 'styled-components/native'

export const Page = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.background.default};
`

export const Container = styled.View`
  row-gap: 10px;
  padding-right: 20px;
  padding-left: 20px;
  justify-content: flex-start;
  row-gap: 40px;
`

export const PageHead = styled.View`
  padding-top: 30px;
  margin: 0 4px;
`

export const Welcome = styled.View``

export const Hi = styled.Text`
  font-weight: 300;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.blackPiano};
`

export const UserName = styled.Text`
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.orange};
`

export const TodayAgenda = styled.View`
  row-gap: 20px;
  overflow: visible;
  margin: 0 4px;
`

export const AgendaTitle = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blackPiano};
`

export const AgendaList = styled.ScrollView`
  row-gap: 10px;
  max-height: 110px;
  overflow-y: scroll;
  overflow-x: visible;
  padding-right: 15px;
`

export const Shortcuts = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  gap: 48px;
`

export const Shortcut = styled.TouchableOpacity`
  align-items: center;
  row-gap: 6px;
`

export const ScIconArea = styled.View`
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50px;
  background-color: rgba(23, 23, 23, 1);
`

export const ScName = styled.Text`
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.blackPiano};
  text-align: center;
`

export const InfoResume = styled.View<{ complete?: boolean }>`
  row-gap: 14px;
  margin: 0 4px;
  ${({ complete }) => (complete ? 'flex: 1;' : '')}
`

export const TopBlock = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const InfoTitle = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blackPiano};
`

export const Seemore = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 6px;
  opacity: 0.6;
`

export const SeeMoreText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.lightGrey};
`

export const ReportList = styled.View`
  padding-right: 20px;
  padding-left: 20px;
  row-gap: 6px;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const TableLabel = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.lightGrey};
`

export const TableValue = styled.Text`
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.orange};
`

export const RevisitsList = styled.ScrollView`
  row-gap: 10px;
  /* max-height: 180px; */
  max-height: 264px;
  overflow-y: scroll;
  padding-right: 16px;
`
