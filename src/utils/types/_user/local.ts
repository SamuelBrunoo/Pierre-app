import { RevisitFStore } from '../_ministery/revisit'
import { UserSchedule } from '../_ministery/schedule'
import { Territory } from '../_ministery/territory'
import { FSUser } from './firestore'

export interface LocalUserInfo extends FSUser {
  logged: boolean
  id: string
  dayRevisits: RevisitFStore[]
}
