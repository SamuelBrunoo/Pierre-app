import { create } from "zustand"
import { combine } from "zustand/middleware"
import { UserInfo } from "../utils/types/user"

import useReducers from "./reducers"
import { StoreInterface } from "../utils/types/store"


const useStore = create<StoreInterface>(set => ({
  user: {
    logged: false,
    name: "",
    email: "",
    id: ""
  },
  ...useReducers(set),
}))


export default useStore