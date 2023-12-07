import { DayRevisit, TRevisitFStore } from "../_ministery/revisit"

export type HomeRevisitItemProps = {
  info: TRevisitFStore
  openRevisit: (revisit: TRevisitFStore) => void
}