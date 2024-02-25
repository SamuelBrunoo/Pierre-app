import { StyleSheet } from "react-native"
import theme from "../../assets/styles/themes"


const styles = StyleSheet.create({
  inputArea: {
    position: 'relative',
    gap: 3
  },
  input: {
    borderWidth: 1,
    backgroundColor: theme.background.whiteLight,
    borderColor: 'transparent',
    ...theme.shadows.default,
    borderRadius: 4,
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 9,
    color: theme.colors.blackPiano,
  },
  placeholder: {
    position: 'absolute',
    left: 10,
    color: theme.colors.orange,
    zIndex: 2,
  },
  errorMessage: {
    color: theme.colors.red,
    fontSize: 10
  }
})


export default styles