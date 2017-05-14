import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class ExerciseRow extends Component {
  render() {
  	 const exercises = this.props.exercises;
  	 const exerciseURL = exercises.uuid.replace(/\s+/g, '-').toLowerCase();

    return (
    	<div>
    		 <Link to={{
              pathname: `/exercise/${exerciseURL}`,
              state: { exercise: exercises}
            }}>{exercises.title}</Link>
    	</div>

    );
  }
}

ExerciseRow.propTypes = {
  todo: PropTypes.object
}

export default ExerciseRow;