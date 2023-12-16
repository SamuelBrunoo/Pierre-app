import styled from 'styled-components/native'

export const Btn = styled.TouchableOpacity`
  align-items: center;
  row-gap: 6px;
`

export const IconArea = styled.View`
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50px;
  background-color: rgba(23, 23, 23, 1);
`

export const Title = styled.Text`
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.blackPiano};
  text-align: center;
`
