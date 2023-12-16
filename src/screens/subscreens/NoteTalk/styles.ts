import styled from 'styled-components/native'

export const Page = styled.ScrollView`
  flex: 1;
`

export const Container = styled.View`
  row-gap: 10px;
  padding: 20px 24px 60px;
  row-gap: 20px;
  flex: 1;
`

export const DateHourArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const InfoTitle = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blackPiano};
`

export const ActivitiesList = styled.ScrollView`
  flex: 1;
  margin: 20px 24px 12px 10px;
`

export const ButtonsArea = styled.View`
  align-items: center;
  gap: 36px;
`

export const BtnsRow = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 12px;
`
