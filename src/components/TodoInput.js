import React from "react"

class TodoInput extends React.Component{

  state = {
    title: ""
  }

  onChange = e => {
    this.setState({
      title: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    
    this.props.handleNewTodo(this.state.title)
    
    this.setState({
      title: ""
    })
  }

  render(){
    return(
      <form onSubmit={this.onSubmit} className="form-container">
        <input
          name="title"
          type="text" 
          className="input-text"
          placeholder="Add Todo..." 
          value={this.state.title} 
          onChange={this.onChange}
        />
        <input type="submit" className="input-submit" value="Submit"/>
      </form>
    )
  }
}

export default TodoInput