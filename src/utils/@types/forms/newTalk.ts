export type FieldsErrors = {
  name: FieldError;
  territory: FieldError;
  notes: FieldError;
  nextAbout: FieldError;
}

export type FieldError = {
  has: boolean;
  message: string;
}