import styled from 'styled-components/native'

export const El = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background.cards};
  padding: ${({ theme }) => theme.paddings.lineCard};
  border-radius: 6px;
  margin: 4px;
`

export const Left = styled.View``

export const PersonName = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blackPiano};
`

export const SmallerInfo = styled.Text`
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.lightGrey};
`

export const Date = styled.Text`
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.orange};
`

export const Right = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 24px;
`
