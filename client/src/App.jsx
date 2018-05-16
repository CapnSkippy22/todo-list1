import React, { Component } from 'react'

import TodoListForm from './TodoListForm.jsx'
import TodoList from './TodoList.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: ''
    }
  }

  addTodo(e) {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.todo],
      todo: ''
    })
    console.log(this.state.todos);
  }

  handleInput(e) {
    this.setState({
      todo: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <div>
          <TodoListForm addTodo={this.addTodo.bind(this)} handleInput={this.handleInput.bind(this)} />
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    )
  }
}

export default App;