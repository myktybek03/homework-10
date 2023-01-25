import React, { useContext, useState } from "react"
import EditForm from "./EditForm"
import styled from "styled-components"
import { TodoListContext } from "../../store/TodoProvider"

const TodoItem = ({ todo }) => {
  const [state, dispatch] = useContext(TodoListContext)
  const [isVisible, setIsVisible] = useState(false)
  const deleteTodoHandler = (id) => {
    dispatch({ type: "DELETE", payload: id })
  }

  const completedTodoHandler = (id) => {
    dispatch({ type: "COMPLETE", payload: id })
  }

  const toggleHander = () => {
    setIsVisible(true)
  }
  return (
    <div>
      {isVisible ? (
        <EditForm setIsVisible={setIsVisible} todo={todo} />
      ) : (
        <Ul>
          <Li>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "",
              }}
            >
              {todo.title}
            </span>
            <Button onClick={() => deleteTodoHandler(todo.id)}>Delete</Button>
            <Button onClick={() => completedTodoHandler(todo.id)}>
              completed
            </Button>
            <Button onClick={toggleHander}>Edit</Button>
          </Li>
        </Ul>
      )}
    </div>
  )
}

export default TodoItem

const Ul = styled.ul`
  width: 850px;
  margin: 0 auto;
  background: #3399ff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`

const Li = styled.li`
  background: #cce5ff;
  color: darkblue;
  margin: 5px;
  list-style: none;
  display: grid;
  justify-content: center;
  gap: 17px;
  grid-template-columns: 1fr 100px 100px 100px;
`

const Button = styled.button`
  background-color: #68a0d9;
  border: none;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 2px rgb(0, 0, 0);
  cursor: pointer;
`
