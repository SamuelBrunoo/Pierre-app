import { Dimensions, ImageBackground } from 'react-native'
import styled from 'styled-components/native'

export const Page = styled.ScrollView`
  position: absolute;
  padding-top: 24px;
  z-index: 2;
  width: 100%;
  height: 100%;
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
  background-color: #434343;
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
`

export const ListContainer = styled.ScrollView`
`
