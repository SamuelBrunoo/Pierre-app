import styled from "styled-components/native"


export const Page = styled.ScrollView`
  background-color: ${({ theme }) => theme.background.default};
`

export const Content = styled.View`
  gap:132px;
  padding: 24px;
  align-items: stretch;
`

export const PageTitle = styled.Text`
  font-size:128px;
  font-weight:700;
  color:#AFAFAF;
  text-align:center;
`

export const InputsArea = styled.View`
  display: flex;
  flex-direction: column;
  height: auto;
  row-gap:30px;
`

export const FormArea = styled.View`
  row-gap: 40px;
`

export const ButtonArea = styled.View`
  row-gap: 10px;
  align-items: center;
`

export const ForgotPassBtn = styled.TouchableOpacity`
  padding: 8px 24px;
  border-radius: 6px;
  width:60%;
  align-items: center;
  opacity: 0.6;
`

export const ForgotPassTxt = styled.Text`
  font-weight:300;
  color: ${({theme}) => theme.colors.lightGrey};
`

export const ActionBtn = styled.TouchableHighlight`
  background-color: transparent;
  width:60%;
  padding: 8px 24px;
  align-self: center;
  border-radius: 6px;
  align-items: center;
  background-color: ${({theme}) => theme.colors.orange};
`

export const BtnText = styled.Text`
  font-size: 24px;
  font-weight:700;
  color: #FFF;
`
