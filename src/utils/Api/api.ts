import { Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import { LoginRes } from '../types/Api/login'
import { verifySignInError } from './auxiliars'

const login = async (email: string, pass: string): Promise<LoginRes> => {

  let result: LoginRes = await auth()
    .signInWithEmailAndPassword(email, pass)
    .then(({ user }): LoginRes => ({
      ok: true,
      userInfo: {
        name: user.displayName || 'Visitante',
        email: user.email as string,
        id: user.uid,
        logged: true
      }
    }))
    .catch(async (signInErr): Promise<LoginRes> => {
      const resume = verifySignInError(signInErr.code)


      if (resume.userExists) {
        return {
          ok: false,
          error: { name: resume.field, message: resume.message }
        }
      } else {
        const newUser = await register(email, pass)
        return newUser
      }
    })

  return result
}

const register = async (email: string, pass: string): Promise<LoginRes> => {
  let result: LoginRes = {
    ok: true,
    userInfo: {
      name: '',
      email: '',
      id: '',
      logged: false
    }
  }

  await auth()
    .createUserWithEmailAndPassword(email, pass)
    .then(({ user }) => result = {
      ok: true,
      userInfo: {
        name: user.displayName || 'Visitante',
        email: user.email as string,
        id: user.uid,
        logged: true
      }
    })
    .catch((signUpErr) => {
      const resume = verifySignInError(signUpErr.code) as
        {
          userExists: true;
          field: 'email' | 'password';
          message: string;
        }

      Alert.alert(JSON.stringify(resume))

      result = {
        ok: false,
        error: { name: resume.field, message: resume.message }
      }
    })

  return result
}


export default ({
  login
})