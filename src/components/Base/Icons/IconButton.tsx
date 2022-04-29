import {Colors} from 'constants/Colors'
import React from 'react'
import {Image, ImageStyle, Pressable} from 'react-native'

interface IProps {
  src: any
  onPress?: () => void
  style?: ImageStyle
  size?: number
  color?: string
}

const IconButton: React.FC<IProps> = ({
  src,
  onPress,
  size = 16,
  style,
  color
}) => {
  return (
    <Pressable onPress={onPress}>
      <Image
        source={src}
        style={[{width: size, height: size, tintColor: color}, style]}
      />
    </Pressable>
  )
}
export default React.memo(IconButton)
