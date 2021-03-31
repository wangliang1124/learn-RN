import CheckBox from '@react-native-community/checkbox'
import { observer } from 'mobx-react'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { getRandomColor } from '../../../utils'
import { TodoStore } from './TodoStore'

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.store = new TodoStore()
  }

  render() {
    const { isLoading, todos, createTodo } = this.store
    return (
      <View style={{ marginTop: 20, backgroundColor: '#fff' }}>
        {isLoading && <Text style={{ padding: 10, textAlign: 'center' }}>Loading...</Text>}
        {todos.map((todo) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              backgroundColor: getRandomColor(),
            }}
            key={todo.id}
          >
            <Text>{todo.task}</Text>
            <Text>{todo.completed}</Text>
            <CheckBox value={todo.completed} boxType={'square'} style={{ width: 20, height: 20 }} />
          </View>
        ))}
        <Button onPress={createTodo} title="Add Todo"></Button>
      </View>
    )
  }
}

export default observer(Todo)
