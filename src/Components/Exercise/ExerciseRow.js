import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class ExerciseRow extends Component {
  render() {
  	 const exercises = this.props.exercises;

    return (
    	<tr>
    		<td><img src={exercises.image_path} alt="" /></td>
    		<td>
    		 <Link to={{
              pathname: `/exercise/${exercises.uuid}`,
              state: { exercise: exercises}
            }}>{exercises.title}</Link>
    		</td>
    		<td>{exercises.primary_muscle}</td>
    		<td>{exercises.secondary_muscle}</td>
    		<td>{exercises.equipment}</td>
    	</tr>

    );
  }
}

ExerciseRow.propTypes = {
  todo: React.PropTypes.object
}

export default ExerciseRow;