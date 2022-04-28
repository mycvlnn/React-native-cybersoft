import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'screens/Home';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleStyle: {
            backgroundColor: '#f0eff2',
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 18,
            overflow: 'hidden',
            fontSize: 16,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
