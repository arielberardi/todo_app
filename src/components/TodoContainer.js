import React from "react"
import {v4 as uuidv4} from "uuid"

import TodosList from "./TodosList"
import TodoInput from "./TodoInput"

function TodoHeader(){
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em",
  }

  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>Simple Todo APP</h1>
      <p style={{ fontSize: "19px" }}>Please add to-dos item(s) through the input field</p>
    </header>
  )
}

class TodoContainer extends React.Component {
  state = {
    todos: [
      { id: uuidv4(), title: "Setup development", completed: true },
      { id: uuidv4(), title: "Develop website and add content", completed: false },
      { id: uuidv4(), title: "Deploy to live server", completed: false }
    ]
  }

  handleCheckTodo = (id) => {

    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  handleDeleteTodo = (id) => {

    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.id !== id
      })
    })
  }

  handleNewTodo = (title) => {
    console.log("new todo: ", title)

    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render(){
    return (
      <div>
        <TodoHeader />
        <TodoInput handleNewTodo={this.handleNewTodo} />
        <TodosList 
          todos={this.state.todos} 
          handleCheckTodo={this.handleCheckTodo}
          handleDeleteTodo={this.handleDeleteTodo}
        />
      </div>
    )
  }
}

export default TodoContainer
