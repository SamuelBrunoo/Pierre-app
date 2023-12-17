import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const CheckBoxArea = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`

export const CheckBox = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background.whiteLight};
  justify-content: center;
  align-items: center;
`

export const CheckLabel = styled.Text`
font-weight: 300;
  color: ${({ theme }) => theme.colors.blackPiano};
`

const styles = StyleSheet.create({
  inputArea: {
    position: 'relative',
    gap: 3,
  },
  input: {
    borderWidth: 1,
    backgroundColor: 'rgba(41, 41, 41, 1)',
    borderColor: 'transparent',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.05,
    elevation: 4,
    borderRadius: 4,
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 9,
    color: 'rgba(255, 255, 255, 1)',
  },
  placeholder: {
    position: 'absolute',
    left: 10,
    color: 'rgba(175, 175, 175, 1)',
    zIndex: 2,
  },
  errorMessage: {
    color: 'rgba(193, 14, 14, 1)',
    fontSize: 10,
  },
})

export default styles
