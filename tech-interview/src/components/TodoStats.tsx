// TODO: Implement this component and wire it into App.tsx
//
// It should read from the Zustand store and display:
//   - Total number of todos
//   - Number completed
//
// Stretch goal: add a "Clear completed" button that removes all completed todos.
// You will need to add that action to the store first.

import { useTodoStore } from '../store/useTodoStore'

export function TodoStats() {
  const todos = useTodoStore((state) => state.todos)

  // Your implementation here...

  return (
    <div className="todo-stats">
      {/* render stats */}
    </div>
  )
}
