import 'styled-components/native'
import { ITheme } from './themes'

interface IPalette {
  main: string
  contrastText: string
}

declare module 'styled-components/native' {
  export interface DefaultTheme extends ITheme {}
}
