import React, { useState } from "react"

const TodoInput = props => {
  const [title, setTitle] = useState("")

  const onChange = e => {
    setTitle(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    
    props.handleNewTodo(title)
    setTitle("")   
  }

  return (
    <form onSubmit={onSubmit} className="form-container">
      <input
        name="title"
        type="text" 
        className="input-text"
        placeholder="Add Todo..." 
        value={title} 
        onChange={onChange}
      />
      <input type="submit" className="input-submit" value="Submit"/>
    </form>
  )
}

export default TodoInput