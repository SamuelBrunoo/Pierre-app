import styled from 'styled-components/native'

export const Page = styled.ScrollView`
  flex: 1;
  padding-top: 24px;
  width: 100%;
`

export const LocationSection = styled.View`
  gap: 12px;
`

export const TerritoryName = styled.Text`
  color: ${({ theme }) => theme.colors.orange};
`

export const Address = styled.Text`
  color: ${({ theme }) => theme.colors.lightGrey};
`

export const Map = styled.View`
  background-color: ${({ theme }) => theme.background.cards};
  width: 100%;
  border-radius: 6px;
  aspect-ratio: 2.2;
`

export const Next = styled.View``

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.blackPiano};
  font-size: 20px;
  font-weight: 600;
`

export const NextSubject = styled.Text`
  color: ${({ theme }) => theme.colors.blackPiano};
  font-size: 14px;
  font-weight: 300;
`

export const History = styled.View`
  gap: 10px;
  flex-grow: 1;
  flex: 1;
`

export const ListContainer = styled.ScrollView`
  padding-bottom: 10px;
`
