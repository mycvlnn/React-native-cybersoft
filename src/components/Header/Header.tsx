import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const Header: React.FC<any> = ({children, ...rest}) => {
  console.log(rest)
  return (
    <View style={styles.box}>
      <Text>Burgers Story</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  box: {
    borderRadius: 16,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 16
  }
})
