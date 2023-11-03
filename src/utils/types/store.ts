import { LocalUserInfo } from './_user/local'

export interface StoreInterface {
  user: null | LocalUserInfo
  User: {
    storeInfo: (userInfo: LocalUserInfo) => void
    hi:()=>void
  }
}

export type Setter = (
  partial:
    | StoreInterface
    | Partial<StoreInterface>
    | ((state: StoreInterface) => StoreInterface | Partial<StoreInterface>),
  replace?: boolean | undefined,
) => void
