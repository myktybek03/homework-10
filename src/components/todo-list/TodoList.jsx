import React, { useContext } from "react"
import TodoItem from "../todo-item/TodoItem"
import { TodoListContext } from "../../store/TodoProvider"

const TodoList = () => {
  const [state] = useContext(TodoListContext)
  return (
    <div>
      {state.todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} state={state} />
      })}
    </div>
  )
}

export default TodoList
