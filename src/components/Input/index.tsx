import React, { useEffect, useRef, useState } from 'react'
import {
  View,
  TextInput,
  Animated,
} from 'react-native'
import s from './styles'
import { FieldError } from '../../utils/@types/loginForm';
import styles from './styles';


type Props = {
  type: "none" | "name" | "emailAddress" | "password";
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error: FieldError;
  textarea?: boolean;
}


const Input = ({ type, placeholder, value, onChange, error, textarea }: Props): JSX.Element => {

  const topAnim = useRef(new Animated.Value(14)).current
  const fontAnim = useRef(new Animated.Value(14)).current
  const errOpacity = useRef(new Animated.Value(0)).current
  const [isFocused, setIsFocused] = useState(false)

  const animProp = (from: 'focus' | 'blur') => {
    from === 'focus' ?
      Animated.parallel([
        Animated.timing(topAnim, { toValue: -17, duration: 200, useNativeDriver: false }),
        Animated.timing(fontAnim, { toValue: 12, duration: 200, useNativeDriver: false })
      ]).start()
      :
      (value.trim() === '') ?
        Animated.parallel([
          Animated.timing(topAnim, { toValue: 14, duration: 200, useNativeDriver: false }),
          Animated.timing(fontAnim, { toValue: 14, duration: 200, useNativeDriver: false })
        ]).start()
        :
        null

    setIsFocused(!isFocused)
  }

  useEffect(() => {
    if (error.has) {
      Animated
        .timing(errOpacity, { toValue: 1, duration: 500, useNativeDriver: false })
        .start()
    } else {
      if (Number(errOpacity) !== 0) {
        Animated.timing(errOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }).start()
      }
    }
  }, [error])


  return (
    <View style={s.inputArea}>
      <Animated.Text style={{
        ...s.placeholder,
        top: topAnim,
        fontSize: fontAnim,
        color: error.has ? styles.errorMessage.color : s.placeholder.color
      }}>
        {placeholder}
      </Animated.Text>
      <TextInput
        textContentType={type}
        secureTextEntry={type === 'password'}
        style={{
          ...s.input,
          borderColor: error.has ? styles.errorMessage.color : 'transparent',
          height: textarea ? 110 : 'auto',
          textAlignVertical: 'top'
        }}
        multiline={textarea ?? false}
        onFocus={() => animProp('focus')}
        onBlur={() => animProp('blur')}
        placeholderTextColor={s.placeholder.color}
        selectionColor={'rgba(255, 255, 255, .4)'}
        value={value}
        onChangeText={onChange}
      />
      <Animated.Text style={{ ...styles.errorMessage, opacity: errOpacity }}>{error.message}</Animated.Text>
    </View>
  )

}


export default Input