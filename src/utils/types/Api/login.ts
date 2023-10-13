import { AuthUser } from "../user";

export type LoginRes = {
  ok: true;
  userInfo: AuthUser;
} | {
  ok: false;
  error: FieldError
}

type FieldError = {
  name: 'email' | 'password';
  message: string;
}