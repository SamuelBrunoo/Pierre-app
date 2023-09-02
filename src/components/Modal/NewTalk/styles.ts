import styled from 'styled-components/native'


export const Bg = styled.View`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 30px 24px 60px;
  flex: 1;
`

export const Box = styled.View`
  background-color: rgb(29, 29, 29);
  flex: 1;
  border-radius: 4px;
  padding: 30px 24px;
  row-gap: 20px;
`

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #FFF;
  text-align: center;
`

export const Content = styled.ScrollView`
  margin-top: 20px;
`

export const InputWrapper = styled.View`
  margin-top: 20px;
`

export const CheckBoxArea = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`

export const CheckBox = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: rgb(52, 52, 52);
  justify-content: center;
  align-items: center;
`

export const CheckLabel = styled.Text``
