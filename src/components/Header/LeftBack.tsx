import React from 'react'
import { TouchableOpacity } from 'react-native'
import { BackBlackIcon } from '../../utils/imports/icons'
import { useNavigation } from '@react-navigation/native'

type Props = {
  backFn?: () => void
}

const LeftBack = ({ backFn }: Props) => {
  const navigation = useNavigation()

  const handleBack = () => {
    if (backFn) {
      backFn()
    }
    else if (navigation.canGoBack()) navigation.goBack()
  }

  return (
    <TouchableOpacity
      onPress={handleBack}
      style={{
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}>
      <BackBlackIcon />
    </TouchableOpacity>
  )
}

export default LeftBack
