import React, { Component } from 'react'
import { StyleSheet, StatusBar, View, Button } from 'react-native'

class Home extends Component {
  render() {
    const {
      navigation: { navigate },
    } = this.props

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" />
        <View style={styles.gridWrapper}>
          {this.props.routes?.map(({ title, routeName }, index) => {
            return (
              <Button
                onPress={() => {
                  navigate(routeName)
                }}
                title={title}
                key={routeName}
              ></Button>
            )
          })}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  gridWrapper: { flex: 1, flexDirection: 'column' },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: '#1A1A1A',
    fontSize: 14,
  },
})

export default Home
