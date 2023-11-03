import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import Animated, { SlideInDown } from 'react-native-reanimated'
import { BlurView } from '@react-native-community/blur'


type Props = {
  visible:boolean
  children:any
}

const Dropdown = ({visible, children}:Props) => {

  const [show, setShow] = useState(false)

  // const expandDrop = Animated

  useEffect(() => {
    console.log("show state = ", visible)
    setShow(visible)
  }, [visible])

  return (
    <>
      <View
        // blurType='light'
        // blurAmount={10}
        // reducedTransparencyFallbackColor="white"
        style={{
          display: show ? 'flex' : 'none',
          position: 'absolute',
          width: '150%',
          backgroundColor: 'rgba(90, 90, 90, .6)',
          top: 38,
          borderRadius: 4,
          paddingVertical: 4,
          paddingHorizontal: 8,
          height: 140,
          overflow: 'hidden',
          zIndex: 4,
          elevation:6
        }}>
        {children}
      </View>
    </>
  )
}

export default Dropdown
