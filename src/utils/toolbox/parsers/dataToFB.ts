import { SaveTalkProps } from '../../types/Api/saveTalk'
import { RevisitFStore } from '../../types/_ministery/revisit'

export const dataToFB = (
  userId: string,
  talk: SaveTalkProps,
): RevisitFStore => {
  let formatedData: RevisitFStore = {
    address: talk.address,
    last_date: talk.date.getTime(),
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
        date: talk.date.getTime(),
        notes: talk.notes,
      },
    ],
  }

  return formatedData
}
