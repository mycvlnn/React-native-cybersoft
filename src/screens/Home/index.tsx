import Icon from 'components/Base/Icons/Icon'
import Text from 'components/Base/Text'
import {Colors} from 'constants/Colors'
import {Icons} from 'constants/Icons'
import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import CategoryItem from './Components/CategoryItem'

const Home = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.textBox}>
        <Text style={styles.text}>Main Categories</Text>
      </View>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 10
          }}>
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </ScrollView>
      </View>
    </View>
  )
}
export default Home

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  textBox: {
    maxWidth: 160,
    marginLeft: 20
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 28
  }
})
