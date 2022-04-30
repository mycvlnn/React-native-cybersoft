import React from 'react'
import {Pressable, StyleSheet, View} from 'react-native'

import Text from 'components/Base/Text'

interface IProps {
  onPress?: () => void
}

const BackToTop: React.FC<IProps> = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>You are at the bottom of the page</Text>
      <Pressable onPress={onPress}>
        <Text style={styles.text}>Back to top</Text>
      </Pressable>
    </View>
  )
}

export default React.memo(BackToTop)

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 50
  },
  description: {
    textAlign: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 12,
    textAlign: 'center'
  }
})
