import React, { useState } from 'react'
import * as S from './styles'
import Input from '../../components/Input'
import { useNavigation } from '@react-navigation/native'
import Api from '../../utils/Api'
import { Alert } from 'react-native'
import { FieldsErrors } from '../../utils/types/loginForm'
import useStore from '../../store'


const LoginScreen = () => {

  const navigation = useNavigation<any>()
  const User = useStore(state => state.User)

  const [email, setEmail] = useState('samuelmc983@gmail.com')
  const [pass, setPass] = useState('12345678')
  const [errors, setErrors] = useState<FieldsErrors>({
    email: { has: false, message: '' },
    password: { has: false, message: '' },
  })

  const handleLogin = async () => {

    if (email.trim() !== '' && pass.trim() !== '') {
      const proccess = await Api.login(email, pass)

      if (proccess.ok === true) {
        User.storeInfo(proccess.userInfo)
        navigation.navigate('Main', { screen: 'Home' })
      }
      else {
        let wrongFields = { ...errors }
        wrongFields[proccess.error.name] =
          { has: true, message: proccess.error.message }
        setErrors(wrongFields)
      }

    } else {
      Alert.alert("Preencha todos os campos")
    }

  }

  const handleEmail = (t: string) => {
    if (errors.email.has) setErrors(
      { ...errors, email: { ...errors.email, has: false } }
    )
    setEmail(t)
  }

  const handlePass = (t: string) => {
    if (errors.password.has) setErrors(
      { ...errors, password: { ...errors.password, has: false } }
    )
    setPass(t)
  }


  return (
    <S.Page
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        backgroundColor: 'rgba(35, 35, 35, 1)',
        padding: 24,
        flex: 1,
        justifyContent: 'center'
      }}>
      <S.Content>
        <S.PageTitle>R</S.PageTitle>
        <S.FormArea>
          <S.InputsArea>
            <Input
              type={'emailAddress'}
              placeholder='E-mail'
              value={email}
              onChange={handleEmail}
              error={errors.email}
            />
            <Input
              type={'password'}
              placeholder='Senha'
              value={pass}
              onChange={handlePass}
              error={errors.password}
            />
          </S.InputsArea>
          <S.ButtonArea>
            <S.ActionBtn onPress={handleLogin} activeOpacity={.8}>
              <S.BtnText>Entrar</S.BtnText>
            </S.ActionBtn>
            <S.ForgotPassBtn onPress={() => null} activeOpacity={.8}>
              <S.ForgotPassTxt>Esqueci minha senha</S.ForgotPassTxt>
            </S.ForgotPassBtn>
          </S.ButtonArea>
        </S.FormArea>
      </S.Content>
    </S.Page>
  )

}


export default LoginScreen