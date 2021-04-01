import React from 'react'
import { Button, ScrollView, StyleSheet, View } from 'react-native'

import Timer from './Timer'

export default function ({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View style={styles.listItem}>
        <Button onPress={() => navigation.navigate('TodoBasic')} title="Todo Demo (React State)"></Button>
      </View>
      <View style={styles.listItem}>
        <Button onPress={() => navigation.navigate('TodoMobx')} title="Todo Demo (Mobx)"></Button>
      </View>
      <View style={styles.listItem}>
        <Timer />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  listItem: { justifyContent: 'center', marginTop: 8, backgroundColor: '#fff' },
})
