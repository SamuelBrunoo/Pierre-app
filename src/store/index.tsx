import { create } from 'zustand'

import useReducers from './reducers'
import { StoreInterface } from '../utils/@types/store'

const useStore = create<StoreInterface>(set => ({
  user: null,
  talks: [],
  schedule: {
    puntuals: [],
    weekly: { '0': [], '1': [], '2': [], '3': [], '4': [], '5': [], '6': [] },
  },
  territories: [],
  ...useReducers(set),
}))

export default useStore
