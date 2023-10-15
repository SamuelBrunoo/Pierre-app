import { Coordenates } from '../maps'

export type SaveTalkProps = {
  address: string
  date: Date
  neighborhood: string
  marker: Coordenates
  notes: string
  name: string
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
