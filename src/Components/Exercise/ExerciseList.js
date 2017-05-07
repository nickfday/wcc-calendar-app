import React, { Component } from 'react';
import { Table } from 'reactstrap';
import ExerciseRow from './ExerciseRow';
var Loader = require('react-loader');
import axios from 'axios';




class ExerciseList extends Component {
	constructor(){
		super();
		this.state = {
			exercises:[],
			loaded: false
		}
	}

	getExercises(){
    const self = this;
    axios.get('http://fitnessremoted7.dev/api/rest/views/exercise.json')
    .then(function(response) {
    	//console.log(`axios is ${this}`);
    	//console.log(data);
    	 self.setState({exercises: response.data, loaded: true}, function(){
          //console.log(this.state);
        });
    })
    .catch(function(error) {
    	console.log(error)
    })
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
  		<Loader loaded={this.state.loaded}>
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
	     	</Loader>
     	</div>
  	)
  }
}

export default ExerciseList;
