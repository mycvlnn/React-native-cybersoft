import React, {useRef, useState} from 'react'
import {Alert, FlatList, StyleSheet, View} from 'react-native'

import Text from 'components/Base/Text'
import CategoryList from './Components/CategoryList'
import {categories} from 'data/categories'
import {Colors} from 'constants/Colors'
import {foodListData} from 'data/foodList'
import FoodItem from './Components/FoodItem'
import BackToTop from 'components/BackToTop/BackToTop'

const Home = () => {
  const [categoryId, setCategoryId] = useState<string>(categories[0].id)

  const flatlistRef = useRef<FlatList>(null)

  const listFood = foodListData.filter(food =>
    food.categoryIds.includes(categoryId)
  )

  const selectCategoryHandler = (id: string) => {
    setCategoryId(id)
  }

  const backToTopHandler = () => {
    flatlistRef.current?.scrollToOffset({
      animated: true,
      offset: 0
    })
  }

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.textBox}>
          <Text style={styles.text}>Main Categories</Text>
        </View>
        <CategoryList idCategory={categoryId} onPress={selectCategoryHandler} />
      </View>
    )
  }

  const renderBackToTop = () => {
    return listFood.length > 2 ? <BackToTop onPress={backToTopHandler} /> : null
  }

  return (
    <View style={styles.rootContainer}>
      <View>
        <FlatList
          ref={flatlistRef}
          data={listFood}
          renderItem={({item}) => {
            return <FoodItem {...item} />
          }}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderBackToTop()}
        />
      </View>
    </View>
  )
}
export default Home

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.gray100
  },
  header: {
    marginBottom: 26
  },
  textBox: {
    maxWidth: 160,
    marginLeft: 20
  },
  text: {
    fontSize: 30,
    marginBottom: 28,
    marginTop: 40,
    fontWeight: '700'
  }
})
