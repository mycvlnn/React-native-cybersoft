import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import BottomTab from './BottomTab'
import {RootStackParamList} from './type'
import DetailFood from 'screens/Detail/DetailFood'
import {Colors} from 'constants/Colors'
import CustomHeader from 'components/CustomHeader/CustomHeader'
import Icon from 'components/Base/Icons/Icon'
import {Icons} from 'constants/Icons'
import MapInfo from 'screens/MapInfo/MapInfo'

const Stack = createNativeStackNavigator<RootStackParamList>()

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailFood"
        component={DetailFood}
        options={{
          headerTitleAlign: 'center',
          headerTitle: ({children}) => <CustomHeader>{children}</CustomHeader>,
          headerRight: ({tintColor}) => (
            <Icon src={Icons.list} color={tintColor} size={20} />
          ),
          headerStyle: {
            backgroundColor: Colors.bgDetailColor
          },
          headerShadowVisible: false
        }}
      />
      <Stack.Screen name="MapInfo" component={MapInfo} />
    </Stack.Navigator>
  )
}

export default MainStack
