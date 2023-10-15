import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'
import { Coordenates } from '../maps'

export type DayRevisit = {
  personName: string
  location: string
  lastVisitDate: string
  id: string
}

export type RevisitFStore = {
  address: string
  last_date: FBTimestamp
  location: Coordenates
  neighborhood: string
  observations: string
  person_name: string
  publisher_id: string
  stage: number
  visits: any[]
}

type FBTimestamp = {
  seconds: number
  nanoseconds: number
}