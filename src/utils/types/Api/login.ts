import { UserInfo } from "../user";

export type LoginRes = {
  ok: true;
  userInfo: UserInfo;
} | {
  ok: false;
  error: FieldError
}

type FieldError = {
  name: 'email' | 'password';
  message: string;
}