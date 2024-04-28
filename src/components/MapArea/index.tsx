import React from 'react'
import * as S from './styles'
import { LocationIcon, LocationRedIcon } from '../../utils/imports/icons'
import { Image } from 'react-native'
import theme from '../../assets/styles/themes'
import { FieldError } from '../../utils/@types/forms/newTalk'

type Props = {
  mapExibitionToggler: () => void
  snapUrl: string | null
  address?: string | null
  error?: FieldError
}

const MapArea = ({ mapExibitionToggler, snapUrl, address, error }: Props) => {
  return (
    <>
      <S.Container>
        <S.AreaLabel error={error?.has ?? false}>Localização</S.AreaLabel>
        <S.MapWrapper
          style={theme.shadows.default}
          activeOpacity={0.8}
          onPress={mapExibitionToggler}
          error={error?.has ?? false}>
          {snapUrl ? (
            <Image
              source={{ uri: snapUrl }}
              style={{
                width: '100%',
                height: '100%',
                marginVertical: -5,
              }}
            />
          ) : !error?.has ?? false ? (
            <LocationIcon width={36} height={36} />
          ) : (
            <LocationRedIcon width={36} height={36} />
          )}
        </S.MapWrapper>
        <S.AdressLabel
          error={error?.has ?? false}
          style={{ opacity: error?.has ?? false ? 1 : 0 }}>
          {error?.has ?? false ? error?.message : address ?? ''}
        </S.AdressLabel>
      </S.Container>
    </>
  )
}

export default MapArea
