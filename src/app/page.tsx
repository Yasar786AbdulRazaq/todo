'use client'

import { useState } from 'react'

type Todo = {
  id: number
  text: string
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [text, setText] = useState('')

  const addTodo = () => {
    if (text.trim() === '') return
    const newTodo = { id: Date.now(), text }
    setTodos([...todos, newTodo])
    setText('')
  }

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <main className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 Todo App</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 border px-2 py-1 rounded"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a task..."
        />
        <button
          className="bg-blue-600 text-white px-4 py-1 rounded"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center border-b pb-1">
            <span>{todo.text}</span>
            <button
              className="text-red-500"
              onClick={() => removeTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}
