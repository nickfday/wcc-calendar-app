import React, { Component } from 'react';
import $ from 'jquery';
import Exercise from './Exercise';

class ExerciseSingle extends Component {
	render() {

		 // Car array
        const exercise = this.props.route.data;
        // Car Id from param
        const id = this.props.params.id;






		return (
			<div class="container content">
				<br/>
				<br/>
				<h1>Exercise Single</h1>

				<h1>{this.props.params.id}</h1>
				{id}

			</div>
		)
		}
}

export default ExerciseSingle;