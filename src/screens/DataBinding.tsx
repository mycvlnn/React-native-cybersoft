import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, Pressable} from 'react-native'

const DATA_ICONS = [
  {id: 1, src: require('../assets/icons/angry.png')},
  {id: 2, src: require('../assets/icons/care.png')},
  {id: 3, src: require('../assets/icons/haha.png')},
  {id: 4, src: require('../assets/icons/like.png')},
  {id: 5, src: require('../assets/icons/love.png')},
  {id: 6, src: require('../assets/icons/sad.png')}
]

const DataBinding: React.FC = () => {
  const [icon, setIcon] = useState(require('../assets/icons/angry.png'))

  const selectedIcon = (icon: any) => {
    setIcon(icon)
  }

  const renderIconLists = () => {
    return DATA_ICONS.map(({id, src}) => {
      return (
        <Pressable key={id} onPress={() => selectedIcon(src)}>
          <Image style={styles.icon} source={src} />
        </Pressable>
      )
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hôm nay bạn cảm thấy thế nào ? </Text>
      <Image style={styles.initIcon} source={icon} />
      <View style={styles.iconContainer}>{renderIconLists()}</View>
    </View>
  )
}

export default DataBinding
const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
    color: 'black'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  initIcon: {
    width: 150,
    height: 150
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 50
  },
  icon: {
    width: 50,
    height: 50,
    marginHorizontal: 4
  }
})
