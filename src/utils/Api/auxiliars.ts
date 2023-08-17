type PossibleErrors =
  'auth/invalid-email' |
  'auth/invalid-password' |
  'auth/wrong-password' |
  'auth/user-not-found' |
  'auth/email-already-exists' |
  'auth/weak-password'

type ParsedError =
  { userExists: false; } |
  { userExists: true; field: 'email' | 'password'; message: string; }


export const verifySignInError = (error: PossibleErrors) => {
  let parsedError: ParsedError = { userExists: false }

  switch (error) {
    case "auth/invalid-email":
      parsedError = errorsList["auth/invalid-email"]
      break
    case "auth/wrong-password":
      parsedError = errorsList["auth/wrong-password"]
      break
    case "auth/invalid-password":
      parsedError = errorsList["auth/invalid-password"]
      break
    case "auth/email-already-exists":
      parsedError = errorsList["auth/email-already-exists"]
      break
    case "auth/weak-password":
      parsedError = errorsList["auth/weak-password"]
      break
    case "auth/user-not-found":
      parsedError = errorsList["auth/user-not-found"]
      break
  }

  return parsedError
}


const errorsList: {
  'auth/invalid-email': ParsedError;
  'auth/wrong-password': ParsedError;
  'auth/invalid-password': ParsedError;
  'auth/user-not-found': ParsedError;
  'auth/email-already-exists': ParsedError;
  'auth/weak-password': ParsedError;
} = {
  "auth/invalid-email": {
    userExists: true,
    field: 'email',
    message: 'Digite um email válido'
  },
  "auth/wrong-password": {
    userExists: true,
    field: 'password',
    message: 'Senha incorreta'
  },
  "auth/invalid-password": {
    userExists: true,
    field: 'password',
    message: 'Digite uma senha de pelo menos 6 caracteres'
  },
  "auth/user-not-found": {
    userExists: false
  },
  "auth/email-already-exists": {
    userExists: true,
    field: 'email',
    message: 'Este email já está em uso'
  },
  "auth/weak-password": {
    userExists: true,
    field: 'password',
    message: 'Digite uma senha com pelo menos 6 caracteres'
  },
}