import React, { Component } from 'react';
import { Link } from "react-router";


class ExerciseItem extends Component {
  render() {
    return (
    	<tr>
    		<td><img src={this.props.todo.image_path} alt="" /></td>
    		<td><Link to={`/${this.props.todo.uuid}`}>{this.props.todo.title}</Link></td>
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