import styled from 'styled-components/native'
import { FieldError } from "../../utils/@types/forms/newTalk"

export const Wrapper = styled.View`
  position: relative;
`

export const InputArea = styled.View`
  gap: 3px;
`

export const SelectArea = styled.TouchableOpacity<{ hasError: boolean; }>`
  border-width: 1px;
  background-color: ${({ theme }) => theme.background.whiteLight};
  border-color: ${({ theme, hasError }) => hasError ? theme.colors.red : 'transparent'};
  border-radius: 4px;
  height: 48px;
  justify-content: center;
  padding-left: 10px;
  margin-bottom: -7px;
`

export const Choosed = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.blackPiano};

`

export const Placeholder = styled.Text<{ error: FieldError }>`
  position: absolute;
  left: 10px;
  z-index: 2;
  top: -17px;
  font-size: 12px;
  color: ${({ theme, error }) => error.has ?
    theme.colors.red :
    theme.colors.orange
  };
`

export const IconArea = styled.View`
  position: absolute;
  top: 0px;
  right: 0;
  height: 100%;
  justify-content: center;
  padding: 0 10px;
`

export const ErrorMessage = styled.Text`
  color: ${({ theme }) => theme.colors.red};
  font-size: 10px;
`

export const OptionsArea = styled.ScrollView<{ showing: boolean; }>`
  background-color: ${({ theme }) => theme.background.whiteLight};
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

export const OptionLabel = styled.Text`
  color: ${({ theme }) => theme.colors.blackPiano};
`