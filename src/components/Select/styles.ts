import styled from 'styled-components/native'
import { FieldError } from "../../utils/types/forms/newTalk"
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


export const Wrapper = styled.View`
  position: relative;
`

export const InputArea = styled.View`
  gap: 3px;
`

export const SelectArea = styled.View<{ hasError: boolean; }>`
  border-width: 1px;
  background-color: 'rgba(41, 41, 41, 1)';
  border-color: ${({ hasError }) => hasError ? 'rgba(193, 14, 14, 1)' : 'transparent'};
  border-radius: 4px;
  height: 48px;
  justify-content: center;
  padding-left: 10px;
  margin-bottom: -7px;
`

export const Choosed = styled.Text`
  font-size: 14px;
  color: 'rgba(255, 255, 255, 1)';

`

export const Placeholder = styled.Text<{ error: FieldError }>`
  position: absolute;
  left: 10px;
  z-index: 2;
  top: -17px;
  font-size: 12px;
  color: ${({ error }) => error.has ?
    'rgba(193, 14, 14, 1)' :
    'rgba(175, 175, 175, 1)'
  };
`

export const IconArea = styled.TouchableOpacity`
  position: absolute;
  top: 0px;
  right: 0;
  height: 100%;
  justify-content: center;
  padding: 0 10px;
`

export const ErrorMessage = styled.Text`
  color: 'rgba(193, 14, 14, 1)';
  font-size: 10px;
`

export const OptionsArea = styled.ScrollView<{ showing: boolean; }>`
  background-color: 'rgba(41, 41, 41, 1)';
  display: ${({ showing }) => showing ? 'flex' : 'none'};
  position: absolute;
  z-index: 3;
  top: 80%;
  width: 100%;
  border-radius: 4px;
  max-height: 224px;
  padding: 8px 0;
`

export const Option = styled.TouchableOpacity`
  padding: 4px 0;
`

export const OptionLabel = styled.Text``