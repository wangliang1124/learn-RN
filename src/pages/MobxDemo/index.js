import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react'
import React from 'react'
import { Button, Text } from 'react-native'
import Todo from './store/Todo'

// Model the application state.
class Timer {
  secondsPassed = 0

  constructor() {
    makeAutoObservable(this)
  }

  increase() {
    this.secondsPassed += 1
  }

  reset() {
    this.secondsPassed = 0
  }
}

const myTimer = new Timer()

// Build a "user interface" that uses the observable state.
const TimerView = observer(({ timer }) => {
  return (
    <>
      <Button onPress={() => timer.reset()} title="Reset" />
      <Text style={{ textAlign: 'center' }}>{`Seconds passed: ${timer.secondsPassed}`}</Text>
    </>
  )
})

export default function () {
  return (
    <>
      <TimerView timer={myTimer} />
      <Todo></Todo>
    </>
  )
}

// Update the 'Seconds passed: X' text every second.
setInterval(() => {
  myTimer.increase()
}, 1000)
