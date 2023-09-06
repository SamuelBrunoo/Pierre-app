import React from 'react'
import * as S from './styles'
import { LocationIcon } from '../../utils/imports/icons'
import { Image } from 'react-native'
import { AdressInfo } from '../../utils/types/Api/mapAdress'


type Props = {
  mapExibitionToggler: () => void;
  snapUrl: string | null;
  address: AdressInfo | null;
}

const MapArea = ({ mapExibitionToggler, snapUrl, address }: Props) => {

  const renderAddressText = () => {
    let resStr = ''
    if (address) {
      const info = address.address_components

      const streetId = info.findIndex(c => c.types.includes('route'))
      const numberId = info.findIndex(c => c.types.includes('street_number'))

      if (streetId > -1) resStr += info[streetId].long_name
      if (numberId > -1) resStr += `, nº ${info[numberId].long_name}`
      else resStr += ', sem nº'
    }

    return resStr
  }


  return (
    <>
      <S.Container>
        <S.AreaLabel>Endereço</S.AreaLabel>
        <S.MapWrapper
          style={S.shadowStyle}
          activeOpacity={.8}
          onPress={mapExibitionToggler}
        >
          {snapUrl ?
            <Image
              source={{ uri: snapUrl }}
              style={{
                width: '100%',
                height: '100%'
              }}
            />
            :
            <LocationIcon width={36} height={36} />}
        </S.MapWrapper>
        <S.AdressLabel>{
          address ? `${renderAddressText()}` : ''
        }</S.AdressLabel>
      </S.Container>
    </>
  )

}


export default MapArea