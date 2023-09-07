import { GeoPosition } from "react-native-geolocation-service"


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