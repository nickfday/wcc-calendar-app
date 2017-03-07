import React, { Component } from 'react';
import { Table } from 'reactstrap';


class ExerciseList extends Component {

	constructor(){
		super();
		this.state = {
		  exercise: []
		}
	}

	 getExercise(){
    this.setState({exercise: [
      {
        title: 'Bench Press',
      }
    ]});
  }

	componentWillMount(){
    this.getExercise();
  }

  componentDidMount(){
  	this.getExercise();
  }

  render() {

  	let exerciseItems;

  	return (
  		<div>
  			HELLO from ExerciseList
  		</div>
  		)
  }

}



class Users extends Component {

    render() {
    return (
    	<div className="content exercise-list">
    	    	<ExerciseList />

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
      </Table>
      </div>
    );

}
}



export default Users;