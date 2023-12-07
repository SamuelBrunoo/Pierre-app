import styled from 'styled-components/native'

export const El = styled.TouchableOpacity`
  background-color: #434343;
  border-radius: 6px;
  padding: 10px;
`

export const Top = styled.View``

export const Date = styled.Text`
  font-size: 14px;
  font-weight: 500;
`

export const Notes = styled.Text`
  font-size: 14px;
  font-weight: 300;
`

export const Hour = styled.Text`
  text-align: right;
  font-size: 12px;
  font-weight: 300;
  color: #AFAFAF;
`


export const expanded = {
  paddingTop: 10,
  gap: 10
}