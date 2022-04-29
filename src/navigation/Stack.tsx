import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import BottomTab from './BottomTab'

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}

export default MainStack
