import { ActivityType } from '../activity'

export type UserInfoRes =
  | {
      ok: true
      info: UserFStoreInfo
    }
  | {
      ok: false
    }

export type UserFStoreInfo = {
  publisher_id: string
  schedule: UserSchedule
  current_report: {
    hours: number
    publications: number
    revisits: number
    studies: number
    videos: number
  }
  email: string
  name: string
  pioneer: boolean
  territories: Territory[]
}

type UserSchedule = {
  puntuals: Puntuals
  weekly: {
    '0': ScheduleItem[]
    '1': ScheduleItem[]
    '2': ScheduleItem[]
    '3': ScheduleItem[]
    '4': ScheduleItem[]
    '5': ScheduleItem[]
    '6': ScheduleItem[]
  }
}

type Puntuals = {
  date: string
  activities: ScheduleItem[]
}[]

type ScheduleItem = ActivityType

type Territory = {
  id: string
  name: string
}
