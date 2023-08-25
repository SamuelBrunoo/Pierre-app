import styled from 'styled-components/native'


export const El = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-color: rgba(34, 34, 34, 1);
  padding: 12px 14px;
  border-radius: 6px;
  margin: 0 24px 0 14px;
`

export const Left = styled.View`
  gap: 2px;
`

export const PersonName = styled.Text`
  color: #FFF;
  font-weight: 700;
`

export const LastDate = styled.Text`
  color: #AFAFAF;
  font-size: 12px;
`

export const Right = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`

export const LocationName = styled.Text`
  color: #AFAFAF;
  font-size: 12px;
`