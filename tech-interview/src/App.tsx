import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import './App.css'

function App() {
  return (
    <main className="app">
      <h1>Todo</h1>
      <TodoInput />
      <TodoList />
    </main>
  )
}

export default App
