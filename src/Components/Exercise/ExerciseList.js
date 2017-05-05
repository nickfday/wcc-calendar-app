import React, { Component } from 'react';
import $ from 'jquery';
import { Table } from 'reactstrap';
import ExerciseRow from './ExerciseRow';
var Spinner = require('react-spinkit');



class ExerciseList extends Component {
	constructor(){
		super();
		this.state = {
			exercises:[]
		}
	}

	getExercises(){
    $.ajax({
      url: 'http://fitnessremoted7.dev/api/rest/views/exercise.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({exercises: data}, function(){
          //console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

	componentWillMount(){
    this.getExercises();
  }

  componentDidMount(){
    this.getExercises();
  }

  render() {

  	return(
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
	     			{this.state.exercises.map(exercise =>
         			<ExerciseRow exercises={exercise} key={exercise.uuid} />
       			)}
	     	  	</tbody>
	     	</Table>
     	</div>
  	)
  }
}

export default ExerciseList;
