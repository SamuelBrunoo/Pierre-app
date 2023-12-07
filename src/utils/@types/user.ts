import { UserFStoreInfo } from './Api/getUserInfo'
import { DayRevisit } from './dayRevisit'

export interface LocalUserInfo extends UserFStoreInfo {
  logged: boolean
  dayRevisits: DayRevisit[]
}

export type AuthUser = {
  logged: boolean
  email: string
  id: string
}
