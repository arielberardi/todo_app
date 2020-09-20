import React from "react"
import TodoItem from "./TodoItem"

class TodosList extends React.Component {
  render(){
    return (
      <div>
        {this.props.todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            handleCheckTodo={this.props.handleCheckTodo}
            handleDeleteTodo={this.props.handleDeleteTodo}
          />
        ))}
      </div>
    )
  }
}

export default TodosList
