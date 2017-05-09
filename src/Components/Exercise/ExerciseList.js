import React, { Component } from 'react';
import { Table } from 'reactstrap';
import ExerciseRow from './ExerciseRow';
import ExerciseFilter from './ExerciseFilter';
import ExerciseSelect from './ExerciseSelect';
var Loader = require('react-loader');
import axios from 'axios';




class ExerciseList extends Component {
	constructor(){
		super();
		this.state = {
			exercises:[],
			loaded: false,
			filterText: '',
			primaryMuscle: ''

		}
		this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
		this.handleSelectTextInput = this.handleSelectTextInput.bind(this);
	}

	handleFilterTextInput(filterText) {
		this.setState({
			filterText: filterText
		})
	}

	handleSelectTextInput(primaryMuscle) {
		this.setState({
			primaryMuscle: primaryMuscle
		})
	}

	getExercises(){
    const self = this;
    axios.get('http://fitnessremoted7.dev/api/rest/views/exercise.json')
    .then(function(response) {
    	 self.setState({exercises: response.data, loaded: true}, function(){
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

  	var rows = [];
  	var exerciseList = this.state;
  	this.state.exercises.forEach(function(row){
  		//console.log(row.primary_muscle);
  		if (
  			(exerciseList.filterText !='') &&
  		  (row.title.toLowerCase().indexOf(exerciseList.filterText.toLowerCase()) === -1) ||
  		  (row.primary_muscle.indexOf(exerciseList.primaryMuscle) === -1)
  		 ) {
  			return;
  		}
  	 rows.push( <ExerciseRow exercises={row} key={row.uuid} />);
  	});

  	return(
  		<div className="content exercise-list container">
  		<Loader loaded={this.state.loaded}>
    		<h1>Exercises</h1>
    		<ExerciseFilter
    		  filterText={this.state.filterText}
    		  onFilterTextInput={this.handleFilterTextInput}
    		/>
    		<ExerciseSelect muscles={this.state.exercises} onSelectTextInput={this.handleSelectTextInput}/>
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
	     			{/*{this.state.exercises.map(exercise =>
         			  <ExerciseRow exercises={exercise} key={exercise.uuid} />
       			)}*/}
       			{rows}
	     	  	</tbody>
	     	</Table>
	     	</Loader>
     	</div>
  	)
  }
}

export default ExerciseList;
