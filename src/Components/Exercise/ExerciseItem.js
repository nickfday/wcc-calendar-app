import React, { Component } from 'react';

class ExerciseItem extends Component {
  render() {
    return (
    	<tr>
    		<td><img src={this.props.todo.image_path} alt="" /></td>
    		<td>{this.props.todo.title}</td>
    		<td>{this.props.todo.primary_muscle}</td>
    		<td>{this.props.todo.secondary_muscle}</td>
    		<td>{this.props.todo.equipment}</td>
    	</tr>

    );
  }
}

ExerciseItem.propTypes = {
  todo: React.PropTypes.object
}

export default ExerciseItem;