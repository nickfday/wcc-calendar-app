import React, { Component } from 'react';
import { Link } from "react-router";
import { Table } from 'reactstrap';

class ExerciseNewSummary extends Component {
	render() {

		// Map through cars and return linked cars
         // Get data from route props
        const exercises = this.props.route.data;
        console.log(exercises);
        // Map through cars and return linked cars
        const exerciseNode = exercises.map((exercise) => {
            return (
            	<tr>
            	<td><img src={exercise.image} /></td>
            		<td>
					     		<Link
                    to={"/Exercises/"+exercise.id}
                    key={exercise.id}>
                    {exercise.name}
                	</Link>
                </td>
                <td>{exercise.primaryMuscle}</td>
                <td>{exercise.secondaryMuscle}</td>
                <td>{exercise.equipment}</td>
              </tr>
            )
        });

		return (
			<div className="content exercise-list container">
				<h1>Exercises</h1>
				<table className="table table-condensed table-bordered table-striped">
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
					 { exerciseNode }
					 {/*<ExerciseNewRow />*/}
					 		{/*<tr>
								<td><img src={exercises.image_path} alt="" /></td>
								<td><Link to={`/exercise/${exercises.uuid}`}
										className="item">
										{exercises.title}
										</Link>
								</td>
							<td>{exercises.primary_muscle}</td>
							<td>{exercises.secondary_muscle}</td>
							<td>{exercises.equipment}</td>
							</tr>*/}
					  </tbody>
					     	</table>
					     	</div>
            )
	}
}

export default ExerciseNewSummary;


