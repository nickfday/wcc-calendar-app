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
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleSelectTextInput = this.handleSelectTextInput.bind(this);
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleSelectTextInput(primaryMuscle) {
    this.setState({
      primaryMuscle: primaryMuscle
    });
  }

  resetForm(event) {
    event.preventDefault();
    console.log('reset');
    //filterText = '';
    //document.getElementById("exerciseForm").reset();
  }

  getExercises(){
    const self = this;
    axios.get('http://fitnessremoted7.dev/api/rest/views/exercise.json')
    .then(function(response) {
      self.setState({exercises: response.data, loaded: true}, function(){
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }


  componentWillMount(){
    this.getExercises();
  }

  componentDidMount(){
    this.getExercises();
  }


  render() {
    var rows = [];
    var emptyText = [];
    var exerciseList = this.state;
    var noResultsText = "No results - please adjust filters";

    this.state.exercises.forEach(function(row){
      //Search filter condition
      if (
        (exerciseList.filterText !='') &&
        (row.title.toLowerCase().indexOf(exerciseList.filterText.toLowerCase()) === -1)
       ) {
  			return;
      }
      //Primary Muscle condition
      if (
        (exerciseList.primaryMuscle != 'Any Primary Muscle') &&
        (row.primary_muscle.indexOf(exerciseList.primaryMuscle))) {
        return;
      }

      //Show rows
      rows.push( <ExerciseRow exercises={row} key={row.uuid} />);
    });
    // at loop end
   if (rows.length === 0) {
   	console.log('no results');
   	rows.push(<p>{noResultsText}</p>);
   }


    return(
      <div className="content exercise-list container">
      <Loader loaded={this.state.loaded}>
        <h1>Exercises</h1>
        <div className="row">
          <form id="exerciseForm">
            <div className="col-sm-4">
              <ExerciseFilter
              filterText={this.state.filterText}
              onFilterTextInput={this.handleFilterTextInput}
              />
             </div>
           <div className="col-sm-3">
             <ExerciseSelect muscles={this.state.exercises} onSelectTextInput={this.handleSelectTextInput}/>
           </div>
           <div className="col-sm-2">
             <button onClick={this.resetForm} className="btn btn-primary">Reset</button>
           </div>
           </form>

        </div>

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
            {rows} {emptyText}
            </tbody>
        </Table>
        </Loader>
      </div>
    );
  }
}

export default ExerciseList;
