import styled from 'styled-components/native'

export const InfoArea = styled.View`
  align-items: baseline;
`

export const FieldLabel = styled.Text`
  position: absolute;
  left: 10px;
  z-index: 2;
  top: -17px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.orange};
`

export const InfoBox = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.background.whiteLight};
  border-radius: 4px;
  width: fit-content;
  padding: 8px 12px;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`

export const DateString = styled.Text`
  font-weight: 300;
  color: ${({ theme }) => theme.colors.blackPiano};
`
