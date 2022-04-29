import React from 'react'
import {Image, ImageStyle, Pressable} from 'react-native'

interface IProps {
  src: any
  style?: ImageStyle
  size?: number
  color?: string
}

const IconButton: React.FC<IProps> = ({src, size = 16, style, color}) => {
  return (
    <Image
      source={src}
      style={[{width: size, height: size, tintColor: color}, style]}
    />
  )
}
export default React.memo(IconButton)
