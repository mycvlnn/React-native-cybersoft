import React, {useLayoutEffect, useState} from 'react'
import Text from 'components/Base/Text'
import {Image, Pressable, StyleSheet, View} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from 'navigation/type'
import {foodListData} from 'data/foodList'
import {Colors} from 'constants/Colors'
import NotFound from 'components/NotFound/NotFound'
import Cart from './Components/Cart'

type Props = NativeStackScreenProps<RootStackParamList, 'DetailFood'>

const DetailFood: React.FC<Props> = ({route, navigation}) => {
  const [quantity, setQuantity] = useState<number>(1)
  const id = route.params.id

  const fooDetailData = foodListData.find(food => food.id === id)
  if (!fooDetailData) return <NotFound title="Food Not Found" />

  const {image, name, price, description} = fooDetailData
  const total = quantity * price

  useLayoutEffect(() => {
    navigation.setOptions({
      title: fooDetailData?.name
    })
  })

  const visibleMinusBtn = quantity === 1

  const quantityHandler = (num: number) => {
    if (visibleMinusBtn && num === -1) return
    setQuantity(prevQuantity => prevQuantity + num)
  }

  const orderHandler = () => {
    navigation.navigate('MapInfo')
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
          <View style={styles.quantity}>
            <Pressable
              onPress={() => quantityHandler(-1)}
              style={styles.btnControl}>
              <Text style={visibleMinusBtn && styles.disabled}>−</Text>
            </Pressable>
            <Text>{quantity}</Text>
            <Pressable
              onPress={() => quantityHandler(1)}
              style={styles.btnControl}>
              <Text>&#43;</Text>
            </Pressable>
          </View>
        </View>
        <Text style={styles.text}>
          {name} - ${price}
        </Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
      <Cart total={total} onOrder={orderHandler} />
    </View>
  )
}

export default React.memo(DetailFood)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgDetailColor,
    alignItems: 'center'
  },
  imageContainer: {
    width: '80%',
    aspectRatio: 1,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderRadius: 500,
    alignItems: 'center'
  },
  image: {width: '100%', height: '100%', borderRadius: 500},
  quantity: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 4
  },
  btnControl: {
    paddingHorizontal: 30,
    fontSize: 20
  },
  content: {
    margin: 46,
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
    marginBottom: 10
  },
  desc: {
    textAlign: 'center',
    fontWeight: '600'
  },
  disabled: {
    color: '#ccc'
  }
})
