import React, { Component } from 'react';

class ExerciseItem extends Component {
  render() {
    return (
      <ol className="Todo">
        <strong>{this.props.todo.title}</strong>
      </ol>
    );
  }
}

ExerciseItem.propTypes = {
  todo: React.PropTypes.object
}

export default ExerciseItem;