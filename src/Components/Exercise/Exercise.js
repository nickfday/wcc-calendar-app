import React, { Component } from 'react';
import { Table } from 'reactstrap';

import ExerciseItem from './ExerciseItem';

class Exercise extends Component {
  render() {
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        return (
          <ExerciseItem key={todo.title} todo={todo} />
        );
      });
    }
    return (
    	<div className="content exercise-list container">
    	<h1>Exercises</h1>

     	<Table responsive>
     	<thead>
           <tr>
             <th>Image</th>
             <th>Name</th>
             <th>Primary Muscle</th>
             <th>Secondary Muscles</th>
             <th>Equipment</th>
           </tr>
         </thead>
         <tbody>
     			{todoItems}
     	  	</tbody>
     	</Table>

     	</div>
    );
  }
}

Exercise.propTypes = {
  todos: React.PropTypes.array
}

export default Exercise;