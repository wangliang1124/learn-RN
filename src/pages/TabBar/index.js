/**
 * twitter entrance animation
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { Component } from 'react'
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Facebook from './Facebook'
import Settings from './Setting'
import TwitterEntrance from './TwitterEntrance'
import TwitterFlow from './TwitterFlow'

Icon.loadFont()
const Tab = createBottomTabNavigator()

class TwitterTab extends Component {
  state = { show: true }

  hideEntrance() {
    this.setState({
      show: false,
    })
  }

  render() {
    if (this.state.show) {
      return <TwitterEntrance hideThis={() => this.hideEntrance()} />
    } else {
      return (
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: '#e91e63',
            scrollEnabled: true,
          }}
        >
          <Tab.Screen
            name="Home"
            component={TwitterFlow}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
            }}
          />
          <Tab.Screen
            name="Facebook"
            options={{
              tabBarIcon: ({ color, size }) => <Icon name="facebook" color={color} size={size} />,
            }}
            component={Facebook}
          />
          <Tab.Screen
            name="私信"
            options={{
              tabBarIcon: ({ color, size }) => <Icon name="email" color={color} size={size} />,
            }}
            component={Settings}
          />
          <Tab.Screen
            name="我"
            options={{
              tabBarIcon: ({ color, size }) => <Icon name="account-box" color={color} size={size} />,
            }}
            component={Settings}
          />
        </Tab.Navigator>
      )
    }
  }
}

export default TwitterTab
