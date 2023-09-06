import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const { shadowStyle } = StyleSheet.create({
  shadowStyle: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.05,
    elevation: 4,
  }
})


export const Container = styled.View`
  margin-bottom: 16px;
  row-gap: 4px;
`

export const AreaLabel = styled.Text`
  font-size: 12px;
  color: rgb(175, 175, 175);
  margin-left: 10px;
`

export const MapWrapper = styled.TouchableOpacity`
  background-color: rgb(41, 41, 41);
  justify-content: center;
  align-items: center;
  aspect-ratio: 1.82;
  border-radius: 4px;
`

export const AdressLabel = styled.Text`
  font-size: 12px;
  color: rgb(175, 175, 175);
`