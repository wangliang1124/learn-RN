import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import Home from './pages/Home'
import MobxDemo from './pages/MobxDemo'
import TodoBasic from './pages/MobxDemo/TodoBasic'
import TodoMobx from './pages/MobxDemo/TodoMobx'
import PushNotificationOnlyIOS from './pages/PushNotifications'
import SafeAreaDemo from './pages/SafeAreaDemo'
import SafeAreaContextDemo from './pages/SafeAreaDemo/SafeAreaContext'
import StateManagement from './pages/StateManagement/Context'
import SimpleDemo from './pages/StateManagement/Context/SimpleDemo'
import SimpleDemoUsingHook from './pages/StateManagement/Context/SimpleDemoUsingHook'
import Swiper from './pages/Swiper'
import TabBar from './pages/TabBar'
import Header from './sharedComponents/Header'

const Stack = createStackNavigator()

const routes = [
  { title: 'Swiper', routeName: 'Swiper' },
  { title: 'TabBar', routeName: 'TabBar' },
  { title: 'Mobx Demo', routeName: 'MobxDemo' },
  { title: 'SafeArea Demo', routeName: 'SafeAreaDemo' },
  { title: 'SafeAreaContext Demo', routeName: 'SafeAreaContextDemo' },
  { title: 'PushNotification IOS', routeName: 'PushNotificationOnlyIOS' },
  { title: 'State Management', routeName: 'StateManagement' },
]

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">{(props) => <Home {...props} routes={routes} />}</Stack.Screen>
          <Stack.Screen name="Swiper" component={Swiper} />
          <Stack.Screen name="TabBar" component={TabBar} />
          <Stack.Screen name="MobxDemo" component={MobxDemo} />
          <Stack.Screen name="TodoBasic" component={TodoBasic} />
          <Stack.Screen name="TodoMobx" component={TodoMobx} />
          <Stack.Screen
            name="SafeAreaDemo"
            component={SafeAreaDemo}
            mode="modal"
            options={{
              //   headerShown: false,
              ...TransitionPresets.ModalSlideFromBottomIOS,
            }}
          />
          <Stack.Screen name="SafeAreaContextDemo" component={SafeAreaContextDemo} />
          <Stack.Screen name="PushNotificationOnlyIOS" component={PushNotificationOnlyIOS} />
          <Stack.Screen name="StateManagement" component={StateManagement} />
          <Stack.Screen name="SimpleDemo" component={SimpleDemo} />
          <Stack.Screen name="SimpleDemoUsingHook" component={SimpleDemoUsingHook} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
