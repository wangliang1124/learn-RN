import AsyncStorage from '@react-native-async-storage/async-storage'
import { makeAutoObservable, runInAction, reaction, autorun, toJS } from 'mobx'
import { v4 as uuidv4 } from 'uuid'
import { getRandomColor } from '~/utils'
class TodoStore {
  todos = []
  isLoading = true

  constructor() {
    makeAutoObservable(this)
  }

  // Fetches all Todos from the server.
  loadTodos() {
    this.isLoading = true
    this.fetchTodos().then((fetchedTodos) => {
      runInAction(() => {
        fetchedTodos.forEach((json) => this.updateTodoFromServer(json))
        // this.todos = fetchedTodos
        this.isLoading = false
      })
    })
  }

  fetchTodos() {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const todolist = await AsyncStorage.getItem('todolist', (err, res) => {
          console.log('----res---', err, res)
        })
        console.log('---- fetchTodos todolist---', todolist)
        const todoList = JSON.parse(todolist) || [
          {
            id: 1,
            task: 'task1',
            completed: true,
            backgroundColor: '#fff',
          },
        ]
        resolve(todoList)
      }, 1000)
    })
  }

  // Update a Todo with information from the server. Guarantees a Todo only
  // exists once. Might either construct a new Todo, update an existing one,
  // or remove a Todo if it has been deleted on the server.
  updateTodoFromServer(json) {
    let todo = this.todos.find((todo) => todo.id === json.id)
    if (!todo) {
      todo = new Todo(this, json.id)
      this.todos.push(todo)
    }
    if (json.isDeleted) {
      this.removeTodo(todo)
    } else {
      todo.updateFromJson(json)
    }
    this.saveTodoList()
  }

  // Creates a fresh Todo
  createTodo = () => {
    const todo = new Todo(this)
    this.todos.push(todo)
    this.saveTodoList()
    return todo
  }

  updateTodo = (id) => {
    const todo = this.todos.find((todo) => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
    this.saveTodoList()
  }

  // A Todo was somehow deleted, clean it from the client memory.
  removeTodo = (todo) => {
    this.todos.splice(this.todos.indexOf(todo), 1)
    todo.dispose()
    this.saveTodoList()
  }

  saveTodoList = () => {
    console.log('----------- savaTodolist ------', toJS(this.todos))

    AsyncStorage.setItem('todolist', JSON.stringify(this.todos.map((todo) => todo.asJson)))
  }
}

export class Todo {
  id = null // Unique id of this Todo, immutable.
  task = ''
  completed = false
  store = null
  backgroundColor = '#fff'

  constructor(store, id = uuidv4()) {
    makeAutoObservable(this, {
      id: false,
      store: false,
      autoSave: false,
      saveHandler: false,
      dispose: false,
    })

    this.store = store
    this.id = id
    this.task = 'Tast ' + Math.random().toString(16).slice(2)
    this.backgroundColor = getRandomColor()

    // this.saveHandler = reaction(
    //   () => this.asJson, // Observe everything that is used in the JSON.
    //   (json) => {
    //     console.log('--- reaction ---', this.store, json)
    //     this.store.saveTodoList()
    //     // If autoSave is true, send JSON to the server.
    //     // if (this.autoSave) {
    //     //   this.store.transportLayer.saveTodo(json)
    //     // }
    //   }
    // )
  }

  // Remove this Todo from the client and the server.
  //   delete() {
  //     this.store.transportLayer.deleteTodo(this.id)
  //     this.store.removeTodo(this)
  //   }

  get asJson() {
    return {
      id: this.id,
      task: this.task,
      completed: this.completed,
      backgroundColor: this.backgroundColor,
    }
  }

  // Update this Todo with information from the server.
  updateFromJson(json) {
    // this.autoSave = false // Prevent sending of our changes back to the server.
    this.completed = json.completed
    this.task = json.task
    this.backgroundColor = json.backgroundColor
    // this.author = this.store.authorStore.resolveAuthor(json.authorId)
    // this.autoSave = true
  }

  // Clean up the observer.
  dispose() {
    // this.store.saveTodoList()
    // this.saveHandler()
  }
}

export default new TodoStore()
