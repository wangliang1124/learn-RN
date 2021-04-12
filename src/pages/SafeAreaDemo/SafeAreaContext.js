import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, Text } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

function Demo() {
  return (
    <SafeAreaView
      edges={['left', 'right']}
      style={{ flex: 1, justifyContent: 'space-between', backgroundColor: 'green' }}
    >
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <Text>This is top text.</Text>
        <Text>This is bottom text.</Text>
      </View>
    </SafeAreaView>
  )
}

const Tab = createBottomTabNavigator()

export default function SafeAreaContextDemo() {
  return (
    <Tab.Navigator initialRouteName="Analytics">
      <Tab.Screen name="Analytics" component={Demo} />
      <Tab.Screen name="Profile" component={Demo} />
    </Tab.Navigator>
  )
}
