import styled from 'styled-components/native'


export const El = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  /* align-items: flex-start; */
  align-items: stretch;
  background-color: ${({ theme }) => theme.background.whiteLight};
  padding: 12px 14px;
  border-radius: 6px;
  margin: 0 24px 0 14px;
  height: 90px;
`

export const Left = styled.View`
  justify-content: space-between;
`

export const Names = styled.View``

export const PersonName = styled.Text`
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 700;
  margin-bottom: 0;
`

export const LocationName = styled.Text`
  color: ${({ theme }) => theme.colors.blackPiano};
  font-size: 12px;
`

export const LastDate = styled.Text`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 12px;
`

export const Right = styled.View`
  flex-direction: row;
  align-items: flex-start;
  gap: 6px;
`