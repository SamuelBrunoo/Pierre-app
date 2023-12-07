import { DayRevisit, TRevisitFStore } from '../_ministery/revisit'
import { FSUser } from '../_user/firestore'

export type UserInfoRes =
  | {
      ok: true
      info: Info
    }
  | {
      ok: false
    }

export interface Info extends FSUser {
  revisits: TRevisitFStore[]
  id: string
}
