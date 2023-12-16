import styled from 'styled-components/native'



export const El = styled.TouchableOpacity`
  padding: 8px 18px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const BtnText = styled.Text`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 16px;
`