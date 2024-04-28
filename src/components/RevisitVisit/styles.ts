import styled from 'styled-components/native'

export const El = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.background.cards};
  border-radius: 6px;
  padding: 10px;
`

export const Top = styled.View``

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 14px;
  font-weight: 500;
`

export const Notes = styled.Text`
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.blackPiano};
  white-space: pre-line;
`

export const Hour = styled.Text`
  text-align: right;
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.orange};
`

export const Bottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Btns = styled.View`
  flex-direction: row;
  gap: 4px;
`

export const BottomBtn = styled.TouchableOpacity`
  padding: 0px 4px;
`

export const BtnText = styled.Text<{from: 'delete' | 'edit'}>`
  color: ${({from, theme}) => from === 'delete' ? theme.colors.red : theme.colors.lightGrey};
  padding: 2px 6px;
`



export const expanded = {
  gap: 10
}