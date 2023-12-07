export type FieldsErrors = {
  email: FieldError;
  password: FieldError;
}

export type FieldError = {
  has: boolean;
  message: string;
};