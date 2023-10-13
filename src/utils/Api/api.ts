import { Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { LoginRes } from '../types/Api/login'
import { verifySignInError } from './auxiliars'
import { GetAddressRes } from '../types/Api/mapAdress'
import { SaveTalkRes } from '../types/Api/saveTalk'
import { Coordenates } from '../types/maps'
import { UserFStoreInfo, UserInfoRes } from '../types/Api/getUserInfo'

const baseMapsUrl = 'https://maps.googleapis.com/maps/api/geocode/json'
const mapsApiKey = 'AIzaSyCmnvjnpmx8Ab_WC07MSuqnwTVI4nPAUxs'

const login = async (email: string, pass: string): Promise<LoginRes> => {
  let result: LoginRes = await auth()
    .signInWithEmailAndPassword(email, pass)
    .then(
      ({ user }): LoginRes => ({
        ok: true,
        userInfo: {
          email: user.email as string,
          id: user.uid,
          logged: true,
        },
      }),
    )
    .catch(async (signInErr): Promise<LoginRes> => {
      const resume = verifySignInError(signInErr.code)

      if (resume.userExists) {
        return {
          ok: false,
          error: { name: resume.field, message: resume.message },
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
      email: '',
      id: '',
      logged: false,
    },
  }

  await auth()
    .createUserWithEmailAndPassword(email, pass)
    .then(
      ({ user }) =>
        (result = {
          ok: true,
          userInfo: {
            email: user.email as string,
            id: user.uid,
            logged: true,
          },
        }),
    )
    .catch(signUpErr => {
      const resume = verifySignInError(signUpErr.code) as {
        userExists: true
        field: 'email' | 'password'
        message: string
      }

      Alert.alert(JSON.stringify(resume))

      result = {
        ok: false,
        error: { name: resume.field, message: resume.message },
      }
    })

  return result
}

const getUserInfo = async (userId: string): Promise<UserInfoRes> => {
  let ret: UserInfoRes = {
    ok: false,
  }

  const user = await firestore().collection('users').doc(userId).get()

  ret = user.exists
    ? {
        ok: true,
        info: {
          ...(user.data() as UserFStoreInfo),
          publisher_id: user.id,
        },
      }
    : { ok: false }

  return ret
}

const updateT = (userId: string) => {
  const newSchedule = {
    puntuals: [
      {
        date: '2023-10-15',
        activities: [
          {
            type: 1,
            partner: 'Beltrano',
            final_hour: '16:00',
            initial_hour: '14:00',
            person_name: '',
            done: false,
          },
        ],
      },
    ],
    weekly: {
      '0': [
        {
          type: 1,
          partner: 'Beltrano',
          final_hour: '16:00',
          initial_hour: '14:00',
          person_name: '',
          done: false,
        },
      ],
      '1': [
        {
          type: 1,
          partner: 'Beltrano',
          final_hour: '16:00',
          initial_hour: '14:00',
          person_name: '',
          done: false,
        },
      ],
      '2': [
        {
          type: 1,
          partner: 'Beltrano',
          final_hour: '16:00',
          initial_hour: '14:00',
          person_name: '',
          done: false,
        },
      ],
      '3': [
        {
          type: 1,
          partner: 'Beltrano',
          final_hour: '16:00',
          initial_hour: '14:00',
          person_name: '',
          done: false,
        },
      ],
      '4': [
        {
          type: 1,
          partner: 'Beltrano',
          final_hour: '16:00',
          initial_hour: '14:00',
          person_name: '',
          done: false,
        },
      ],
      '5': [
        {
          type: 1,
          partner: 'Beltrano',
          final_hour: '16:00',
          initial_hour: '14:00',
          person_name: '',
          done: false,
        },
      ],
      '6': [
        {
          type: 1,
          partner: 'Beltrano',
          final_hour: '16:00',
          initial_hour: '14:00',
          person_name: '',
          done: false,
        },
      ],
    },
  }

  firestore().collection('users').doc(userId).update({
    schedule: newSchedule,
  })
}

const getAddress = async (coords: {
  latitude: number
  longitude: number
}): Promise<GetAddressRes> => {
  const res = await fetch(
    `${baseMapsUrl}?latlng=${coords.latitude},${coords.longitude}&key=${mapsApiKey}`,
  )

  return (await res.json()) as GetAddressRes
}

const saveTalk = async (
  name: string,
  notes: string,
  date: any,
  mapCoord: Coordenates,
  marker: Coordenates,
  address: string,
): Promise<SaveTalkRes> => {
  //
  let result: SaveTalkRes = {
    ok: true,
  }

  return result
}

export default {
  login,
  register,
  getUserInfo,
  getAddress,
  saveTalk,
  updateT: (userId: string) => null,
}
