import React, { Component } from 'react';
import ExerciseItem from './ExerciseItem';

class Exercise extends Component {
  render() {
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        //console.log(project);
        return (
          <ExerciseItem key={todo.title} todo={todo} />
        );
      });
    }
    return (
      <div className="Todos container">
        <h3>Todo List</h3>
        {todoItems}
      </div>
    );
  }
}

Exercise.propTypes = {
  todos: React.PropTypes.array
}

export default Exercise;