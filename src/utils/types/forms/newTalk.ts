export type FieldsErrors = {
  name: FieldError;
  territory: FieldError;
  notes: FieldError;
}

export type FieldError = {
  has: boolean;
  message: string;
}