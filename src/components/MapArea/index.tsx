import React from 'react'
import * as S from './styles'
import { LocationIcon } from '../../utils/imports/icons'
import { Image } from 'react-native'
import { AdressInfo } from '../../utils/@types/Api/mapAdress'


type Props = {
  mapExibitionToggler: () => void;
  snapUrl: string | null;
  address: string | null;
}

const MapArea = ({ mapExibitionToggler, snapUrl, address }: Props) => {


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
                height: '100%',
                marginVertical: -5
              }}
            />
            :
            <LocationIcon width={36} height={36} />}
        </S.MapWrapper>
        <S.AdressLabel>{address}</S.AdressLabel>
      </S.Container>
    </>
  )

}


export default MapArea