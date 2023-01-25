import React, { useContext } from "react"
import styled from "styled-components"
import { TodoListContext } from "../../store/TodoProvider"

const TodoForm = () => {
  const [state, dispatch] = useContext(TodoListContext)
  const submitHandler = (e) => {
    e.preventDefault()

    const newTodo = {
      title: state.inputValue,
      id: Date.now(),
      completed: false,
    }

    dispatch({ type: "ADD", payload: newTodo })
  }
  return (
    <form onSubmit={submitHandler}>
      <Input
        type="text"
        value={state.inputValue}
        onChange={(e) => dispatch({ type: "value", payload: e.target.value })}
      />
      <Button>Add todo</Button>
    </form>
  )
}

export default TodoForm

const Input = styled.input`
  width: 50%;
  padding: 12px 15px;
  margin: 8px 0;
  box-sizing: border-box;
  background-color: #3cbc8d;
  color: white;
  text-align: center;
`

const Button = styled.button`
  background-color: #68a0d9;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 2px rgb(0, 0, 0);
  cursor: pointer;
`
