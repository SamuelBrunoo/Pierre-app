import { TRevisitFStore } from '../_ministery/revisit'
import { TUserSchedule } from '../_ministery/schedule'
import { TTerritory } from '../_ministery/territory'
import { FSUser } from './firestore'

export interface LocalUserInfo extends FSUser {
  logged: boolean
  id: string
  revisits: TRevisitFStore[]
}
