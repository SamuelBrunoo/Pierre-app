import styled from 'styled-components/native'



export const El = styled.TouchableOpacity`
  padding: 8px 18px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.orange};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const BtnText = styled.Text`
  color: #FFF;
  font-size: 16px;
`