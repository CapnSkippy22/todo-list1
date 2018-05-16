import React, { Component } from 'react'

class TodoEntry extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        {this.props.todo}
      </div>
    )
  }
}

export default TodoEntry;