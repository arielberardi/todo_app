import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"

import TodosList from "./TodosList"
import TodoInput from "./TodoInput"
import TodoHeader from "./TodoHeader"

const TodoContainer = props => {
  const [todos, setTodos] = useState([])
  const [show, setShow] = useState(false)

  const handleCheckTodo = (id) => {

    setTodos(
      todos.map(todo => {
        if(todo.id == id) {
          todo.completed = !todo.completed
        }
        return todo 
      })
    )

    setShow(!show)
  }

  const handleDeleteTodo = (id) => {

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => 
        setTodos([
          ...todos.filter(todo => {
            return todo.id !== id
          })
        ])
      )
  }

  const handleNewTodo = (title) => {

    axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: title,
      completed: false,
    })    
    .then(response => 
      setTodos([...todos, response.data])
    )
  }

  // Equal to componentDidMount()
  useEffect( () => {
    console.log("test run")

    axios.get("https://jsonplaceholder.typicode.com/todos", {
        params: { _limit: 10 }
      })
      .then(response => setTodos(response.data))
  }, [])

  return (
    <div>
      <TodoHeader headerSpan={show} />
      <TodoInput handleNewTodo={handleNewTodo} />
      <TodosList 
        todos={todos} 
        handleCheckTodo={handleCheckTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  )
}

export default TodoContainer
