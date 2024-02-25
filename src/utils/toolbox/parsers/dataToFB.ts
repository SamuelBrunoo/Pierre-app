import { SaveNewPersonTalkProps, SaveRevisitTalkProps, SaveTalkProps } from '../../@types/Api/saveTalk'
import { TFSVisit, TRevisitFStore } from '../../@types/_ministery/revisit'


export const newTalkParser = (
  userId: string,
  talk: SaveNewPersonTalkProps,
): TRevisitFStore => {
  let formatedData: TRevisitFStore = {
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

export const revisitParser = (
  talk: SaveRevisitTalkProps,
): TFSVisit => {
  let formatedData: TFSVisit = {
    date: talk.date.getTime(),
    notes: talk.notes,
    nextAbout: talk.nextAbout
  }

  return formatedData
}


export default ({
  newTalkParser,
  revisitParser
})