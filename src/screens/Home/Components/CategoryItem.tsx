import React from 'react'
import Icon from 'components/Base/Icons/Icon'
import Text from 'components/Base/Text'
import {Colors} from 'constants/Colors'
import {Icons} from 'constants/Icons'
import {View} from 'react-native'

const CategoryItem = () => {
  return (
    <View
      style={{
        width: 70,
        height: 110,
        alignItems: 'center',
        backgroundColor: Colors.primary,
        padding: 8,
        borderRadius: 35,
        shadowColor: '#ccc',
        shadowOffset: {
          width: 1,
          height: 1
        },
        shadowRadius: 4,
        shadowOpacity: 0.25,
        elevation: 4,
        marginHorizontal: 10
      }}>
      <View style={{borderRadius: 36, padding: 16, backgroundColor: '#fff'}}>
        <Icon size={24} src={Icons.hamburger} />
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 13,
          lineHeight: 20,
          color: '#fff'
        }}>
        Burgers
      </Text>
    </View>
  )
}

export default CategoryItem
