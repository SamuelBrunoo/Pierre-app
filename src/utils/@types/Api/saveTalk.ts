import { Coordenates } from '../maps'

export type SaveTalkProps = SaveNewPersonTalkProps | SaveRevisitTalkProps

export type SaveNewPersonTalkProps = {
  address: string
  date: Date
  neighborhood: string
  marker: Coordenates
  notes: string
  name: string
}

export type SaveRevisitTalkProps = {
  personId: string
  date: Date
  notes: string
  nextAbout: string
}

export type SaveTalkRes =
  | {
      ok: true
    }
  | {
      ok: false
      error: DescError
    }

type DescError = any
