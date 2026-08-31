import { useTodoStore } from '../store/useTodoStore'
import type { Filter } from '../store/useTodoStore'
import { TodoItem } from './TodoItem'

const FILTERS: Filter[] = ['all', 'active', 'completed']

export function TodoList() {
  const todos = useTodoStore((state) => state.todos)
  const filter = useTodoStore((state) => state.filter)
  const setFilter = useTodoStore((state) => state.setFilter)

  const visible = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const remaining = todos.filter((t) => !t.completed).length

  return (
    <section className="todo-list">
      <ul>
        {visible.length === 0 ? (
          <li className="empty">Nothing here yet.</li>
        ) : (
          visible.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </ul>

      {todos.length > 0 && (
        <footer className="todo-footer">
          <span>{remaining} item{remaining !== 1 ? 's' : ''} left</span>
          <div className="filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={filter === f ? 'active' : ''}
                onClick={() => setFilter(f)}
              >
                {f[0].toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </footer>
      )}
    </section>
  )
}
