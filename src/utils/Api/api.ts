import { Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { LoginRes } from '../@types/Api/login'
import { verifySignInError } from './auxiliars'
import { GetAddressRes } from '../@types/Api/mapAdress'
import {
  SaveNewPersonTalkProps,
  SaveRevisitTalkProps,
  SaveTalkProps,
  SaveTalkRes,
} from '../@types/Api/saveTalk'
import { Coordenates } from '../@types/maps'
import { UserInfoRes } from '../@types/Api/getUserInfo'
import { DayRevisit, TRevisitFStore } from '../@types/_ministery/revisit'
import { FSUser } from '../@types/_user/firestore'
import dataToFB from '../toolbox/parsers/dataToFB'

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
  let revisits: TRevisitFStore[] = []

  await firestore()
    .collection('talks')
    .where('publisher_id', '==', userId as string)
    .get()
    .then(res =>
      res.docs.forEach(r => {
        const data = {
          ...(r.data() as TRevisitFStore),
          id: r.id,
        }
        revisits.push(data)
      }),
    )

  if (user.exists) {
    const data = {
      ...(user.data() as FSUser),
      id: userId,
      revisits,
      logged: true,
    }

    ret = {
      ok: true,
      info: data,
    }
  }

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

const updateTalk = async (): Promise<{ ok: boolean }> => {
  const result = {
    ok: true,
  }

  return result
}

const saveTalk = async (
  userId: string,
  talk: SaveNewPersonTalkProps,
): Promise<SaveTalkRes> => {
  let result: SaveTalkRes = {
    ok: true,
  }

  const d = dataToFB.newTalkParser(userId, talk)

  try {
    await firestore()
      .collection('talks')
      .add(d)
      .catch(() => {
        result = {
          ok: false,
          error: 'Oops.. Falha ao atualizar. Tente novamente mais tarde.',
        }
      })
  } catch (error) {}

  return result
}

const saveRevisit = async (
  userId: string,
  talk: SaveRevisitTalkProps,
): Promise<SaveTalkRes> => {
  let result: SaveTalkRes = {
    ok: true,
  }

  const d = dataToFB.revisitParser(talk)

  try {
    await firestore()
      .collection('talks')
      .doc(talk.personId)
      .set(
        (fbTalk: TRevisitFStore) => ({
          stage: fbTalk.stage + 1,
          visits: {
            ...fbTalk.visits,
            d,
          },
        }),
        {
          merge: true,
        },
      )
      .catch(() => {
        result = {
          ok: false,
          error: 'Oops.. Falha ao atualizar. Tente novamente mais tarde.',
        }
      })
  } catch (error) {}

  return result
}

export default {
  login,
  register,
  getUserInfo,
  getAddress,
  saveTalk,
  saveRevisit,
  updateTalk,
  updateT: (userId: string) => null,
}
