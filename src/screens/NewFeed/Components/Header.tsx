import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faCamera, faMarker} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faCamera} size={20} />
      <Text style={styles.text}>Feed</Text>
      <FontAwesomeIcon icon={faMarker} size={20} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 24
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  }
})
