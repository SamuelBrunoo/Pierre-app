import { ActivityType } from './activity'

export type UserSchedule = {
  puntuals: Puntuals
  weekly: {
    '0': ActivityType[]
    '1': ActivityType[]
    '2': ActivityType[]
    '3': ActivityType[]
    '4': ActivityType[]
    '5': ActivityType[]
    '6': ActivityType[]
  }
}

type Puntuals = {
  date: string
  activities: ActivityType[]
}[]
