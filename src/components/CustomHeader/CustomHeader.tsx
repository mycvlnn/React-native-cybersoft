import Text from 'components/Base/Text'
import {Colors} from 'constants/Colors'
import React from 'react'
import {StyleSheet, View} from 'react-native'

const CustomHeader: React.FC<any> = ({children}) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  box: {
    backgroundColor: Colors.backgroundButton,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})
