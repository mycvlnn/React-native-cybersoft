import React from 'react'
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native'
import {dataAvatar} from '../../../models'

const AvatarLists: React.FC = () => {
  const renderAvaterLists = () => {
    return dataAvatar.map(({name, image}) => (
      <View key={name} style={styles.itemAvater}>
        <Image source={image} style={styles.image} />
        <Text style={styles.text}>{name}</Text>
      </View>
    ))
  }

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {renderAvaterLists()}
      </ScrollView>
    </View>
  )
}

export default React.memo(AvatarLists)

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8
  },
  itemAvater: {alignItems: 'center', marginHorizontal: 8},
  image: {width: 60, height: 60, borderRadius: 60},
  text: {
    fontWeight: 'bold',
    color: 'black'
  }
})
