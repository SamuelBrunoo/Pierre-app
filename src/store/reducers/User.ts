import { Setter } from '../../utils/@types/store'
import { LocalUserInfo } from '../../utils/@types/_user/local'
import {
  storage,
  getStorageData,
  setStorageData,
  clearAllStorageData,
} from '../mmkv'

export default (set: Setter) => {
  return {
    storeInfo: (userInfo: LocalUserInfo) => {
      setStorageData('user', userInfo)

      return set(state => ({
        ...state,
        user: userInfo,
      }))
    },
    signout: () => {
      clearAllStorageData()
      return set(state => ({
        ...state,
        user: null,
      }))
    },
  }
}
