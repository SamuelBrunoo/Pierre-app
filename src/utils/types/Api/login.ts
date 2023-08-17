export type LoginRes = {
  ok: true;
} | {
  ok: false;
  error: FieldError
}

type FieldError = {
  name: 'email' | 'password';
  message: string;
}