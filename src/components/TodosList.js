import React from "react"
import TodoItem from "./TodoItem"

const TodosList = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          handleCheckTodo={props.handleCheckTodo}
          handleDeleteTodo={props.handleDeleteTodo}
        />
      ))}
    </div>
  )
}

export default TodosList
