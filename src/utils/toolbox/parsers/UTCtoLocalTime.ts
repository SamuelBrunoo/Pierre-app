export const utcToLocalTime = (date: Date) => {
  const userTimeOffset = new Date().getTimezoneOffset()
  const newDate = date
  newDate.setTime(date.getTime() + userTimeOffset * 60 * 1000 * -1)
  return new Date(newDate)
}
