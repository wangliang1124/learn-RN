import { observer } from 'mobx-react'
import React from 'react'
import { Button, Text, View } from 'react-native'
import TimerStore from './stores/TimerStore'

const myTimer = new TimerStore()
// Update the 'Seconds passed: X' text every second.
setInterval(() => {
  myTimer.increase()
}, 1000)

// Build a "user interface" that uses the observable state.
const TimerView = observer(({ timer }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 16, textAlign: 'center' }}>{`Seconds passed: ${timer.secondsPassed}`}</Text>
      <Button onPress={() => timer.reset()} title="Reset" />
    </View>
  )
})

const Timer = () => <TimerView timer={myTimer}></TimerView>

export default Timer
