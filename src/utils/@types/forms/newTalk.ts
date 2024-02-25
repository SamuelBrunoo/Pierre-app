export type FieldsErrors = {
  address: FieldError
  name: FieldError
  territory: FieldError
  map: FieldError
  notes: FieldError
  nextAbout: FieldError
}

export type FieldError = {
  has: boolean
  message: string
}
