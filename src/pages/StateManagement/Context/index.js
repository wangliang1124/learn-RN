import React from 'react'
import { View, Button } from 'react-native'

const StateManagement = ({ navigation }) => {
  const push = (routeName) => {
    navigation.navigate(routeName)
  }
  return (
    <View>
      <Button
        title="Simple Demo"
        onPress={() => {
          push('SimpleDemo')
        }}
      ></Button>
      <Button
        title="Simple Demo Using Hook"
        onPress={() => {
          push('SimpleDemoUsingHook')
        }}
      ></Button>
      {/* <Button title="Simple Demo" onPress={() => {}}></Button> */}
    </View>
  )
}

export default StateManagement
