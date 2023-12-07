import { AuthUser } from '../_user/auth'

export type LoginRes =
  | {
      ok: true
      userInfo: AuthUser
    }
  | {
      ok: false
      error: FieldError
    }

type FieldError = {
  name: 'email' | 'password'
  message: string
}
