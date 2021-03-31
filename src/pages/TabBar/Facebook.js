import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import Util from '~/utils'

import FacebookTabBar from './FacebookTabBar'

class Facebook extends Component {
  state = { show: true }

  hideEntrance() {
    this.setState({
      show: false,
    })
  }

  render() {
    return (
      <ScrollableTabView initialPage={0} renderTabBar={() => <FacebookTabBar />}>
        <ScrollView tabLabel="home-edit-outline" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Home</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="account-multiple" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Friends</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="chat" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Message</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="bell" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Notification</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="magnify" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Search</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="menu" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Other Menu</Text>
          </View>
        </ScrollView>
      </ScrollableTabView>
    )
  }
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    paddingTop: 30,
    borderBottomWidth: Util.pixel,
    borderBottomColor: '#ddd',
    paddingBottom: 5,
    backgroundColor: '#fff',
  },
  navLeft: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  navMid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navRight: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
})

export default Facebook
