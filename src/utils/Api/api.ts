import { Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import { LoginRes } from '../types/Api/login'
import { verifySignInError } from './auxiliars'
import { GetAddressRes } from '../types/Api/mapAdress'

const baseMapsUrl = 'https://maps.googleapis.com/maps/api/geocode/json'
const mapsApiKey = 'AIzaSyCmnvjnpmx8Ab_WC07MSuqnwTVI4nPAUxs'

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

const getAddress = async (coords: { latitude: number, longitude: number }): Promise<GetAddressRes> => {
  const res = await fetch(
    `${baseMapsUrl}?latlng=${coords.latitude},${coords.longitude}&key=${mapsApiKey}`
  )

  return await res.json() as GetAddressRes
}


export default ({
  login,
  getAddress
})