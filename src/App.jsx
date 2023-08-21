import { useEffect, useState } from 'react'
import './styles.css'
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';

export default function App() {
  //check local storage to get value, if not there default to empty array
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []

    return JSON.parse(localValue)
  })

  // Any time the todos change call this function to store inside of local storage
  useEffect(()=> {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])
  function addTodo(title) {
    //update the state of the todos array
    setTodos(currentTodos => {
      return [...currentTodos, {id: crypto.randomUUID(), title, completed: false}
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id == id) {
          return {...todo, completed} 
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  return (
    <>
    <NewTodoForm onSubmit={addTodo}/>
    <h1>ToDo List</h1>
    <TodoList todos = {todos} toggleTodo = {toggleTodo} 
      deleteTodo={deleteTodo}/>
    </>

  )
}