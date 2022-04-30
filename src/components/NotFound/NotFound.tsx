import Text from 'components/Base/Text'
import {Colors} from 'constants/Colors'
import React from 'react'
import {StyleSheet, View} from 'react-native'

interface IProps {
  title: string
}

const NotFound: React.FC<IProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  )
}

export default React.memo(NotFound)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: Colors.backgroundButton
  }
})
