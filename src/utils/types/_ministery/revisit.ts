import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

export type DayRevisit = {
  personName: string
  location: string
  lastVisitDate: string
  id: string
}

export type RevisitFStore = {
  address: string
  last_date: FirebaseFirestoreTypes.Timestamp
  location: FirebaseFirestoreTypes.GeoPoint
  neighborhood: string
  observations: string
  person_name: string
  publisher_id: string
  stage: number
  visits: any[]
}
