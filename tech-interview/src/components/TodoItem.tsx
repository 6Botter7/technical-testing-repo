import { useTodoStore } from '../store/useTodoStore'
import type { Todo } from '../store/useTodoStore'

interface Props {
  todo: Todo
}

export function TodoItem({ todo }: Props) {
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const deleteTodo = useTodoStore((state) => state.deleteTodo)

  return (
    <li className={`todo-item${todo.completed ? ' completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        aria-label={`Mark "${todo.text}" as ${todo.completed ? 'active' : 'completed'}`}
      />
      <span>{todo.text}</span>
      <button
        className="delete"
        onClick={() => deleteTodo(todo.id)}
        aria-label={`Delete "${todo.text}"`}
      >
        ✕
      </button>
    </li>
  )
}
