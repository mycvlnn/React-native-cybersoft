import React, { ReactNode } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const App = (): ReactNode => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center'
  },
  text:{
    textAlign:'center', 
    fontSize: 16,
    fontWeight: 'bold', 
    color: 'black'
  }
})
