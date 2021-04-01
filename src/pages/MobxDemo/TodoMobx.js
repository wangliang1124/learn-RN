import { observer } from 'mobx-react'
import React from 'react'
import { View, Text, Button } from 'react-native'
import TodoItem from './components/TodoItem'
import todoStore from './stores/todoStore'

class TodoMobx extends React.Component {
  componentDidMount() {
    todoStore.loadTodos()
  }

  componentWillUnmount() {
    // todoStore.savaTodolist()
  }

  render() {
    const { isLoading, todos, createTodo } = todoStore
    console.log('-- render  todos-----', todos)
    return (
      <View style={{ marginTop: 20, backgroundColor: '#fff' }}>
        {isLoading && <Text style={{ padding: 10, textAlign: 'center' }}>Loading...</Text>}
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id}></TodoItem>
        ))}
        <Button onPress={createTodo} title="Add Todo"></Button>
      </View>
    )
  }
}

export default observer(TodoMobx)
