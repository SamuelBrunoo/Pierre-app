import { Setter } from "../../utils/types/store"
import { UserInfo } from "../../utils/types/user"


const UserReducer = (set: Setter) => {


  return {
    storeInfo: (userInfo: UserInfo) => set(state => ({
      ...state,
      user: {
        ...state.user,
        logged: true,
        email: userInfo.email,
        id: userInfo.id,
        name: userInfo.name
      }
    }))
  }

}


export default UserReducer