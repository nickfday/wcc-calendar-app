import React, { Component } from 'react';
import { Table } from 'reactstrap';

class ExerciseItem extends Component {
	render() {
		return (
			<tbody>
				 <tr>
            <td><img src="http://fitnessremoted7.dev/sites/default/files/stock-photo-48646366-bodybuilder-performing-dips.jpg" alt="" /></td>
            <td>Bench Press</td>
            <td>Chest</td>
            <td>Triceps</td>
            <td>Beginner</td>
          </tr>
          <tr>
            <td><img src="http://fitnessremoted7.dev/sites/default/files/stock-photo-48646366-bodybuilder-performing-dips.jpg" alt="" /></td>
            <td>Bench Press</td>
            <td>Chest</td>
            <td>Triceps</td>
            <td>Beginner</td>
          </tr>
			</tbody>
			)
	}
}


class ExerciseList extends Component {

    render() {
    return (
    	<div className="content exercise-list">

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

       <ExerciseItem />

      </Table>
      </div>
    );

}
}



export default ExerciseList;