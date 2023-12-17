import styled from 'styled-components/native'


export const Container = styled.View`
  margin-bottom: 16px;
  row-gap: 4px;
`

export const AreaLabel = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.orange};
  margin-left: 10px;
`

export const MapWrapper = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.background.cards};
  justify-content: center;
  align-items: center;
  aspect-ratio: 1.82;
  border-radius: 4px;
`

export const AdressLabel = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.lightGrey};
`