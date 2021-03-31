import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Swiper from './src/pages/Days/Swiper'
import Home from './src/pages/Home'
import MobxDemo from './src/pages/MobxDemo'
import TabBar from './src/pages/TabBar'

const Stack = createStackNavigator()

const routes = ['Swiper', 'TabBar', 'MobxDemo']

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">{(props) => <Home {...props} routes={routes} />}</Stack.Screen>
        <Stack.Screen name="Swiper" component={Swiper} />
        <Stack.Screen name="TabBar" component={TabBar} />
        <Stack.Screen name="MobxDemo" component={MobxDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
