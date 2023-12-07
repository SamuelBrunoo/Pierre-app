import { Setter } from '../../utils/@types/store'
import UserReducer from './User'

const useReducers = (set: Setter) => {
  return {
    User: UserReducer(set),
  }
}

export default useReducers
