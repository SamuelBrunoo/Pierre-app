import { SaveTalkProps } from '../../types/Api/saveTalk'
import { RevisitFStore } from '../../types/_ministery/revisit'

export const dataToFB = (
  userId: string,
  talk: SaveTalkProps,
): RevisitFStore => {
  const getTimestampObj = (d: Date) => {
    const obj = {
      seconds: d.getSeconds(),
      nanoseconds: d.getMilliseconds() * 1000000,
    }
    return obj
  }

  let formatedData: RevisitFStore = {
    address: talk.address,
    last_date: getTimestampObj(talk.date),
    location: {
      latitude: talk.marker.latitude,
      longitude: talk.marker.longitude,
    },
    neighborhood: talk.neighborhood,
    observations: talk.notes,
    person_name: talk.name,
    publisher_id: userId,
    stage: 0,
    visits: [
      {
        date: getTimestampObj(talk.date),
        notes: talk.notes,
      },
    ],
  }

  return formatedData
}
