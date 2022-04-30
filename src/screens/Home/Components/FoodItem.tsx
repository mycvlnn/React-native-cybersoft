import React from 'react'
import Icon from 'components/Base/Icons/Icon'
import Text from 'components/Base/Text'
import {Colors} from 'constants/Colors'
import {Icons} from 'constants/Icons'
import {categories} from 'data/categories'
import Food from 'models/Food'
import {ImageBackground, Pressable, StyleSheet, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from 'navigation/type'

type FoodItemNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'DetailFood'
>
const FoodItem: React.FC<Food> = ({
  name,
  image,
  deliveryTime,
  price,
  star,
  categoryIds,
  id
}) => {
  const navigation = useNavigation<FoodItemNavigationProp>()

  const goToFoodDetail = () => {
    navigation.navigate('DetailFood', {id})
  }

  const categoriesFiltered = categories.filter(category =>
    categoryIds.includes(category.id)
  )

  const renderCategories = () => {
    return categoriesFiltered.map(category => {
      return (
        <View key={category.id} style={styles.category}>
          <Text>{category.name}</Text>
        </View>
      )
    })
  }

  return (
    <Pressable onPress={goToFoodDetail} style={styles.container}>
      <View style={styles.boxImage}>
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.time}>
            <Text style={styles.timeNum}>{deliveryTime} min</Text>
          </View>
        </ImageBackground>
      </View>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.summaryContainer}>
        <View style={styles.star}>
          <Icon src={Icons.star} size={16} color={Colors.primary} />
          <Text style={styles.starNum}>{star}</Text>
        </View>
        {renderCategories()}
        <View style={styles.price}>
          <Text>${price}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default FoodItem

const styles = StyleSheet.create({
  container: {marginHorizontal: 20, marginBottom: 28},
  boxImage: {borderRadius: 30, overflow: 'hidden', elevation: 5},
  image: {width: '100%', aspectRatio: 2},
  time: {
    backgroundColor: '#fff',
    width: 120,
    height: 50,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'center',
    borderTopRightRadius: 30
  },
  timeNum: {textAlign: 'center', fontWeight: 'bold', color: 'black'},
  name: {
    marginTop: 14,
    marginBottom: 6,
    fontWeight: '700',
    color: 'black',
    fontSize: 26
  },
  summaryContainer: {flexDirection: 'row'},
  star: {marginRight: 8, flexDirection: 'row', alignItems: 'center'},
  starNum: {marginLeft: 6},
  category: {marginLeft: 6},
  price: {
    marginLeft: 8
  }
})
