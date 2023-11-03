import { create } from 'zustand'

import useReducers from './reducers'
import { StoreInterface } from '../utils/types/store'

const useStore = create<StoreInterface>(set => ({
  user: null,
  ...useReducers(set),
}))

export default useStore
