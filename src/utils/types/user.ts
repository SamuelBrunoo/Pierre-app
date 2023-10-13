import { UserFStoreInfo } from './Api/getUserInfo'

export interface UserInfo extends UserFStoreInfo {
  logged: boolean
}

export type AuthUser = {
  logged: boolean
  email: string
  id: string
}
