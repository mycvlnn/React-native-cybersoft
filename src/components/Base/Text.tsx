//Custom Text
import {FontSize} from 'constants/Fonts'
import React from 'react'
import {StyleSheet, Text as RNText, TextStyle} from 'react-native'

interface IProp {
  style?: TextStyle
}

const Text: React.FC<IProp> = ({children, style}) => {
  return <RNText style={[styles.text, style]}>{children}</RNText>
}

export default Text

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto-Bold',
    fontSize: FontSize.normal
  }
})
