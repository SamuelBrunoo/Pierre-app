export type ActivityLogCardProps = {
  info: ActivityLog
  deleteAct: (log: ActivityLog) => void
}

export type ActivityLog = {
  type: any
  hourStart: Date
  hourEnd: Date
  partner?: string
  id?: any
}
