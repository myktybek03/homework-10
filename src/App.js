import React, { useEffect, useContext } from "react"
import Header from "./components/header/Header"
import TodoForm from "./components/todo-form/TodoForm"
import TodoList from "./components/todo-list/TodoList"
import { TodoListContext } from "./store/TodoProvider"
import "./App.css"

const App = () => {
  const [state] = useContext(TodoListContext)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos))
  }, [state.todos])
  return (
    <div className="App">
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default App
