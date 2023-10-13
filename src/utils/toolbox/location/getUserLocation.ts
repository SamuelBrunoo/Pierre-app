import {
  Alert,
  Linking,
  PermissionsAndroid,
} from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import { UserLocation } from '../../types/maps'


const getPermission = async () => {
  const granted = await PermissionsAndroid.request(
    'android.permission.ACCESS_FINE_LOCATION',
    {
      title: 'Acesso à localização',
      message: 'Posso acessar seus dados de localização?',
      buttonNegative: 'Não',
      buttonPositive: 'Claro',
    }
  )

  if (granted === 'denied' || granted === 'never_ask_again') {
    Alert.alert(
      'Precisamos da sua localização..',
      'Para um melhor proveito do sistema é necessário saber sua localização',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Abrir configurações', onPress: () => Linking.openSettings() },
      ],
    );
  }
}

export const getUserLocation = async (): Promise<UserLocation> => {

  const hasPermission = await PermissionsAndroid.check('android.permission.ACCESS_FINE_LOCATION')

  if (!hasPermission) getPermission().then(getUserLocation)


  let userGeo: UserLocation = {
    mocked: false,
    timestamp: 0,
    provider: undefined,
    coords: {
      altitudeAccuracy: 0,
      speed: 0,
      heading: 0,
      accuracy: 0,
      altitude: 0,
      longitude: 0,
      latitude: 0
    }
  }

  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      pos => {
        resolve(pos)
      },
      () => {
        reject(userGeo)
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        accuracy: {
          android: 'high',
          ios: 'nearestTenMeters'
        }
      }
    )
  })

  return userGeo ?? null
}