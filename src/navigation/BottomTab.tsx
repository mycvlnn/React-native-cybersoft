import React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from 'screens/Home'
import {Colors} from 'constants/Colors'
import {FontFamily, FontSize} from 'constants/Fonts'
import IconButton from 'components/Base/Icons/IconButton'
import {Icons} from 'constants/Icons'
import Icon from 'components/Base/Icons/Icon'
import {RootStackParamList} from './type'

const Tab = createBottomTabNavigator<RootStackParamList>()

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          backgroundColor: Colors.backgroundButton,
          paddingVertical: 10,
          paddingHorizontal: 40,
          borderRadius: 20,
          overflow: 'hidden',
          fontFamily: FontFamily.primary,
          fontWeight: 'bold',
          fontSize: FontSize.normal
        },
        headerLeftContainerStyle: {
          paddingLeft: 20
        },
        headerRightContainerStyle: {
          paddingRight: 20
        },
        headerLeft: () => <IconButton src={Icons.location} size={22} />,
        headerRight: () => <IconButton src={Icons.shoppingBasket} size={22} />,
        tabBarActiveTintColor: Colors.primary,
        tabBarShowLabel: false,
        headerStyle: {
          height: 80
        },
        headerShadowVisible: false
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '745 LincoIn PI',
          tabBarIcon: ({color}) => (
            <Icon color={color} src={Icons.cutlery} size={24} />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          title: 'Search Dish',
          tabBarIcon: ({color}) => (
            <Icon color={color} src={Icons.search} size={24} />
          )
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Home}
        options={{
          title: 'Favorite',
          tabBarIcon: ({color}) => (
            <Icon color={color} src={Icons.like} size={24} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          title: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon color={color} src={Icons.user} size={24} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTab
