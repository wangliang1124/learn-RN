import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default class SafeAreaDemo extends Component {
  render() {
    return (
      <SafeAreaView edges={['bottom', 'left', 'right']} style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: '#1F9AFF' }}>
          <Text style={styles.text}>
            test test test test test test test test test test test test test test test test test test test test test
            test test test test test
          </Text>
          <Text style={styles.text}>
            test test test test test test test test test test test test test test test test test test test test test
            test test test test test
          </Text>
          <Text style={styles.text}>
            test test test test test test test test test test test test test test test test test test test test test
            test test test test test
          </Text>
          <Text style={styles.text}>
            test test test test test test test test test test test test test test test test test test test test test
            test test test test test
          </Text>
          <Text style={styles.text}>
            test test test test test test test test test test test test test test test test test test test test test
            test test test test test
          </Text>
          <Text style={styles.text}>
            test test test test test test test test test test test test test test test test test test test test test
            test test test test test
          </Text>
          <Text style={styles.text}>
            test test test test test test test test test test test test test test test test test test test test test
            test test test test test
          </Text>
          <Text style={styles.text}>
            test test test test test test test test test test test test test test test test test test test test test
            test test test test test
          </Text>
          <Text style={styles.text}>
            test test test test test test test test test test test test test test test test test test test test test
            test test test test test
          </Text>
          <Text style={styles.text}>
            test test test test test test test test test test test test test test test test test test test test test
            test test test test test
          </Text>
          <Text style={styles.text}>
            test test test test test test test test test test test test test test test test test test test test test
            test test test test test
          </Text>
          <Text style={styles.text}>
            test test test test test test test test test test test test test test test test test test test test test
            test test test test test
          </Text>
          <Text style={styles.text}>
            test test test test test test test test test test test test test test test test test test test test test
            test test test test test
          </Text>
          <Text style={styles.text}>
            test test test test test test test test test test test test test test test test test test test test test
            test test test test test
          </Text>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  text: { fontSize: 18, color: '#fff' },
})
