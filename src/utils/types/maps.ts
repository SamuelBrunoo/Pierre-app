import { GeoPosition } from "react-native-geolocation-service"

// export type UserLocation = {
//   mocked: boolean;
//   timestamp: number;
//   provider: string;
//   coords: {
//     altitudeAccuracy: number
//     speed: number;
//     heading: number;
//     accuracy: number;
//     altitude: number;
//     longitude: number;
//     latitude: number;
//   }
// }

export interface UserLocation extends GeoPosition { }


export type Coordenates = {
  latitude: number;
  longitude: number;
}

export type CustomMarker = {
  latitude: number;
  longitude: number;
  title?: string;
}