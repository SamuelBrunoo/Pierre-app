import { UserInfo } from "./user"

export interface StoreInterface {
  user: UserInfo;
  User: {
    storeInfo: (userInfo: UserInfo) => void;
  }
}

export type Setter = (
  partial: StoreInterface | Partial<StoreInterface> | ((state: StoreInterface) => StoreInterface | Partial<StoreInterface>),
  replace?: boolean | undefined
) => void