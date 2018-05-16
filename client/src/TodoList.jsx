import React, { Component } from 'react'

import TodoEntry from './TodoEntry.jsx'

class TodoList extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>
        {this.props.todos.map((todo, index) => {
          <TodoEntry todo={todo} index={index} />
        })}
      </div>
    )
  }
}

export default TodoList;