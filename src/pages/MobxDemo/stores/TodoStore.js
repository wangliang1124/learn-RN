import { makeAutoObservable, runInAction, reaction, action, observable } from 'mobx'
import { v4 as uuidv4 } from 'uuid'
import { getRandomColor } from '~/utils'

export class TodoStore {
  //   authorStore
  //   transportLayer
  todos = []
  isLoading = true

  constructor() {
    makeAutoObservable(this)
    // this.authorStore = authorStore // Store that can resolve authors.
    // this.transportLayer = transportLayer // Thing that can make server requests.
    // this.transportLayer.onReceiveTodoUpdate((updatedTodo) => this.updateTodoFromServer(updatedTodo))
    this.loadTodos()
  }

  // Fetches all Todos from the server.
  loadTodos() {
    this.isLoading = true
    this.fetchTodos().then((fetchedTodos) => {
      runInAction(() => {
        fetchedTodos.forEach((json) => this.updateTodoFromServer(json))
        this.isLoading = false
      })
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
          },
        ])
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
  }

  // Creates a fresh Todo on the client and the server.
  createTodo = () => {
    const todo = new Todo(this)
    this.todos.push(todo)
    return todo
  }

  updateTodo = (id) => {
    const todo = this.todos.find((todo) => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  }

  // A Todo was somehow deleted, clean it from the client memory.
  removeTodo = (todo) => {
    this.todos.splice(this.todos.indexOf(todo), 1)
    todo.dispose()
  }
}

export class Todo {
  id = null // Unique id of this Todo, immutable.
  task = ''
  completed = false
  store = null
  //   author = null // Reference to an Author object (from the authorStore).
  //   autoSave = true // Indicator for submitting changes in this Todo to the server.
  saveHandler = null // Disposer of the side effect auto-saving this Todo (dispose).
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

    this.saveHandler = reaction(
      () => this.asJson, // Observe everything that is used in the JSON.
      (json) => {
        this.store.updateTodoFromServer(json)
        // If autoSave is true, send JSON to the server.
        // if (this.autoSave) {
        //   this.store.transportLayer.saveTodo(json)
        // }
      }
    )
    console.log('---this.saveHandler ---', this.saveHandler)
  }

  // Remove this Todo from the client and the server.
  delete() {
    // this.store.transportLayer.deleteTodo(this.id)
    this.store.removeTodo(this)
  }

  get asJson() {
    return {
      id: this.id,
      task: this.task,
      completed: this.completed,
    }
  }

  // Update this Todo with information from the server.
  updateFromJson(json) {
    // this.autoSave = false // Prevent sending of our changes back to the server.
    this.completed = json.completed
    this.task = json.task
    // this.author = this.store.authorStore.resolveAuthor(json.authorId)
    // this.autoSave = true
  }

  handleComplete = () => {
    console.log('--handleComplete---', this.saveHandler)
    this.completed = true
    this.saveHandler && this.saveHandler()
  }

  // Clean up the observer.
  dispose() {
    this.saveHandler()
  }
}
