import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const Home = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>Home Page</Text>
    </View>
  )
}
export default Home

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold'
  }
})
