import React, { Fragment } from 'react'
import * as S from '../styles'
import MapView, { LongPressEvent, Marker } from 'react-native-maps'
import { Coordenates, CustomMarker } from '../../../../utils/types/maps'


type Props = {
  mapViewRef: React.MutableRefObject<MapView | null>;
  userVisibility: boolean;
  mapCoord: Coordenates;
  setMapCoord: React.Dispatch<React.SetStateAction<Coordenates>>;
  handlePressMap: (e: LongPressEvent) => void;
  marker: CustomMarker | null;
}

const MapViewFragment = ({
  mapViewRef,
  userVisibility,
  mapCoord,
  setMapCoord,
  handlePressMap,
  marker
}: Props) => {


  return (
    <S.MapViewWrapper>
      <Fragment>
        <MapView
          ref={mapViewRef}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgb(41, 41, 41)'
          }}
          showsUserLocation={userVisibility}
          initialRegion={{
            latitude: mapCoord.latitude,
            longitude: mapCoord.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          // customMapStyle={customStyle}
          onRegionChange={(region) => {
            setMapCoord({
              latitude: region.latitude,
              longitude: region.longitude,
            })
          }}
          onLongPress={e => handlePressMap(e)}
        >
          {marker &&
            <Marker
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.title}
            />
          }
        </MapView>
      </Fragment>
    </S.MapViewWrapper>
  )

}


export default MapViewFragment