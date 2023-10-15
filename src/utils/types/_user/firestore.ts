import { UserSchedule } from '../_ministery/schedule'
import { Territory } from '../_ministery/territory'

export type FSUser = {
  name: string
  email: string
  pioneer: boolean
  current_report: {
    hours: number
    publications: number
    revisits: number
    studies: number
    videos: number
  }
  schedule: UserSchedule
  territories: Territory[]
}
