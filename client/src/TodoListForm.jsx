import React, { Component } from 'react'

class TodoListForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.props.addTodo(e)}>
          Add a todo: <input type="text" onKeyUp={(e) => this.props.handleInput(e)} />
        </form>
      </div>
    )
  }
}

export default TodoListForm;