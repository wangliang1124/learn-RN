import React, { Component } from 'react'
import { StyleSheet, StatusBar, TouchableHighlight, View, Text } from 'react-native'

class Home extends Component {
  static navigationOptions = {
    title: '首页',
  }

  constructor(props) {
    super(props)
    const d = []
    for (let i = 0; i < 30; i++) {
      d[i] = `DAY ${i + 1}`
    }
    this.days = d
  }

  render() {
    const {
      navigation: { navigate },
    } = this.props

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" />
        <View style={styles.gridWrapper}>
          {this.days.map((item, index) => {
            return (
              <TouchableHighlight
                underlayColor="#e6e6e6"
                activeOpacity={1}
                style={styles.grid}
                onPress={() => {
                  navigate(`Day${index + 1}`)
                }}
                key={item}
              >
                <View style={styles.item}>
                  <Text style={styles.itemText}>{item}</Text>
                </View>
              </TouchableHighlight>
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
  gridWrapper: { flex: 1, flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' },
  grid: {
    // flex: 1,
    width: 100,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    backgroundColor: '#eee',
  },
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