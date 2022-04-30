import React from 'react'

import Text from 'components/Base/Text'
import {View} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from 'navigation/type'

type NavigationScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MapInfo'
>

const MapInfo: React.FC<NavigationScreenProps> = () => {
  return (
    <View>
      <Text>Map information</Text>
    </View>
  )
}

export default MapInfo
