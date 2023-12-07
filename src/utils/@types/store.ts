import { TRevisitFStore } from './_ministery/revisit'
import { TUserSchedule } from './_ministery/schedule'
import { TTerritory } from './_ministery/territory'
import { LocalUserInfo } from './_user/local'

export interface StoreInterface {
  user: null | LocalUserInfo
  talks: TRevisitFStore[]
  schedule: TUserSchedule
  territories: TTerritory[]
  User: {
    storeInfo: (userInfo: LocalUserInfo) => void
    signout: () => void
  }
}

export type Setter = (
  partial:
    | StoreInterface
    | Partial<StoreInterface>
    | ((state: StoreInterface) => StoreInterface | Partial<StoreInterface>),
  replace?: boolean | undefined,
) => void
