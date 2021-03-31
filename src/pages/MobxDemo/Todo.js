import CheckBox from '@react-native-community/checkbox'
import { observer } from 'mobx-react'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { getRandomColor } from '../../utils'
import { TodoStore } from './store/TodoStore'

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.store = new TodoStore()
  }

  render() {
    const { isLoading, todos, createTodo, updateTodo, removeTodo } = this.store
    console.log('--todos-----', todos)
    return (
      <View style={{ marginTop: 20, backgroundColor: '#fff' }}>
        {isLoading && <Text style={{ padding: 10, textAlign: 'center' }}>Loading...</Text>}
        {todos.map((todo) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 8,
              backgroundColor: todo.backgroundColor,
            }}
            key={todo.id}
          >
            <Text>{todo.task}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CheckBox
                onChange={() => updateTodo(todo.id)}
                value={todo.completed}
                boxType={'square'}
                style={{ width: 20, height: 20, marginRight: 20 }}
              />
              <Button title="Delete" onPress={() => removeTodo(todo)} color="red" />
            </View>
          </View>
        ))}
        <Button onPress={createTodo} title="Add Todo"></Button>
      </View>
    )
  }
}

export default observer(Todo)
