import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Home from '~/pages/Home'
import MobxDemo from '~/pages/MobxDemo'
import TodoBasic from '~/pages/MobxDemo/TodoBasic'
import TodoMobx from '~/pages/MobxDemo/TodoMobx'
import Swiper from '~/pages/Swiper'
import TabBar from '~/pages/TabBar'
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
        <Stack.Screen name="TodoBasic" component={TodoBasic} />
        <Stack.Screen name="TodoMobx" component={TodoMobx} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
