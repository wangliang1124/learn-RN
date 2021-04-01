import CheckBox from '@react-native-community/checkbox'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { v4 as uuidv4 } from 'uuid'
import { getRandomColor } from '~/utils'

class TodoBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      todos: [],
    }
  }

  componentDidMount() {
    this.loadTodos()
  }

  // Fetches all Todos from the server.
  loadTodos = () => {
    this.isLoading = true
    this.fetchTodos().then((fetchedTodos) => {
      this.setState({ isLoading: false, todos: fetchedTodos })
    })
  }

  fetchTodos() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            task: 'task1',
            completed: true,
            backgroundColor: '#fff',
          },
        ])
      }, 1000)
    })
  }

  createTodo = () => {
    const { todos } = this.state
    const todo = new Todo()
    todos.push(todo)

    this.setState({
      todos: todos,
    })
  }

  updateTodo = (id) => {
    const { todos } = this.state

    this.setState({
      todos: todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    })
  }

  // A Todo was somehow deleted, clean it from the client memory.
  removeTodo = (id) => {
    const { todos } = this.state
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    })
  }

  render() {
    // const { isLoading, todos, createTodo } = TodoStore
    const { isLoading, todos } = this.state
    console.log('-- render  todos-----', todos)
    return (
      <View style={{ marginTop: 20, backgroundColor: '#fff' }}>
        {isLoading && <Text style={{ padding: 10, textAlign: 'center' }}>Loading...</Text>}
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            updateTodo={() => this.updateTodo(todo.id)}
            removeTodo={() => this.removeTodo(todo.id)}
            key={todo.id}
          ></TodoItem>
        ))}
        <Button onPress={this.createTodo} title="Add Todo"></Button>
      </View>
    )
  }
}

// function TodoItem({ todo, updateTodo, removeTodo }) {
//   console.log('---- render TodoItem ------')
//   const [todo, setTodo] = useState(todo)
//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 8,
//         backgroundColor: todo.backgroundColor,
//       }}
//       key={todo.id}
//     >
//       <Text>{todo.task}</Text>
//       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//         <CheckBox
//           onChange={() => updateTodo(todo.id)}
//           value={todo.completed}
//           boxType={'square'}
//           style={{ width: 20, height: 20, marginRight: 20 }}
//         />
//         <Button title="Delete" onPress={() => removeTodo(todo)} color="red" />
//       </View>
//     </View>
//   )
// }

class TodoItem extends React.Component {
  shouldComponentUpdate(nexProps, nextState) {
    return nexProps.todo !== this.props.todo
  }

  render() {
    console.log('---- render TodoItem ------')
    const { todo, updateTodo, removeTodo } = this.props
    return (
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
    )
  }
}

export default TodoBasic

class Todo {
  id = null // Unique id of this Todo, immutable.
  task = ''
  completed = false
  backgroundColor = '#fff'

  constructor(id = uuidv4()) {
    this.id = id
    this.task = 'Tast ' + Math.random().toString(16).slice(2)
    this.completed = false
    this.backgroundColor = getRandomColor()
  }
}
