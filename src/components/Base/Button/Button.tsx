import {Colors} from 'constants/Colors'
import React from 'react'
import {Pressable, StyleSheet, TextStyle, View} from 'react-native'
import Text from '../Text'

interface IProps {
  children: any
  textColor?: string
  backgroundColor?: string
  fontSize?: number
  style?: TextStyle
  onPress?: () => void
  fontWeight?: '600' | '700' | '800' | 'bold'
}

const Button: React.FC<IProps> = ({
  children,
  textColor = '#000',
  backgroundColor = Colors.primary,
  onPress,
  style,
  fontSize,
  fontWeight
}) => {
  return (
    <View style={style}>
      <Pressable
        android_ripple={{
          color: '#fff'
        }}
        onPress={onPress}
        style={[{backgroundColor}, styles.btn]}>
        <Text style={[{color: textColor, fontSize, fontWeight}]}>
          {children}
        </Text>
      </Pressable>
    </View>
  )
}

export default React.memo(Button)

const styles = StyleSheet.create({
  btn: {
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 16
  }
})
