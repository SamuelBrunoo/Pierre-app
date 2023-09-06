import styled from 'styled-components/native'


export const Bg = styled.View`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 30px 24px 60px;
  flex: 1;
`

/* MapView */
export const Box = styled.View`
  background-color: rgb(29, 29, 29);
  flex: 1;
  border-radius: 4px;
  padding: 30px 24px;
  row-gap: 20px;
`

export const MapViewWrapper = styled.View`
  width: 100%;
  height: 400px;
  background-color: rgb(41, 41, 41);
  border-radius: 4px;
  overflow: hidden;
`

export const ConfirmBtn = styled.TouchableOpacity`
  background-color: rgb(54, 54, 54);
  padding: 10px;
  align-self: center;
`

export const ConfirmBtnTxt = styled.Text``

/* Component */
export const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #FFF;
  text-align: center;
`

export const Content = styled.ScrollView`
  margin-top: 20px;
  row-gap: 20px;
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

export const DateTimeInfo = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`

export const InfoArea = styled.View`
  align-items: baseline;
`

export const FieldLabel = styled.Text`
  position: absolute;
  left: 10px;
  z-index: 2;
  top: -17px;
  font-size: 12px;
  color: 'rgba(175, 175, 175, 1)';
`

export const InfoBox = styled.TouchableOpacity`
  background-color: 'rgba(41, 41, 41, 1)';
  border-radius: 4px;
  width: fit-content;
  height: 48px;
  padding: 0 10px;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`

export const DateString = styled.Text`
  font-weight: 300;
`
