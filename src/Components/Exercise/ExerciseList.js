import React, { Component } from 'react';
import { Table } from 'reactstrap';
import ExerciseRow from './ExerciseRow';
import ExerciseFilter from './ExerciseFilter';
import ExerciseSelect from './ExerciseSelect';
var Loader = require('react-loader');
import axios from 'axios';
import $ from 'jquery';

class ExerciseList extends Component {
  constructor(props){
    super(props);
    this.state = {
      exercises:[],
      loaded: false,
      filterText: '',
      primaryMuscle: ''
      //col: ''
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleSelectTextInput = this.handleSelectTextInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSort = this.handleSort.bind(this);
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
  // RESET STATE FUNCTION
  handleReset(event) {
    event.preventDefault();
    this.setState({
      filterText: '',
      primaryMuscle: 'Any Primary Muscle'
    });
    $('.primaryMuscleSelect').val('Any Primary Muscle').change();
  }

  handleSort(col) {
    this.state.exercises.sort(function(a, b){
      if(a[col] < b[col]) return -1;
      if(a[col] > b[col]) return 1;
      return 0;
    });
    this.setState({
      exercises: this.state.exercises
    });
  }

  getExercises(){
    const self = this;
    axios.get('http://alphawcc.dev/api/calendar/views/calendar_json.json')
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
    let rows = [];
    let emptyText = [];
    let exerciseList = this.state;
    const noResultsText = "No results - please adjust filters";

    this.state.exercises.forEach(function(row){
      //Search filter condition
      if (
        (exerciseList.filterText !=='') &&
        (row.title.toLowerCase().indexOf(exerciseList.filterText.toLowerCase()) === -1)
       ) {
        return;
      }
      //Primary Muscle condition
      // if (
      //   (exerciseList.title !== 'Any Primary Muscle') &&
      //   (row.title.indexOf(exerciseList.title))) {
      //   return;
      // }

      //Show rows
      rows.push( <ExerciseRow exercises={row} key={row.title} />);
    });
    // at loop end
   if (rows.length === 0) {
    console.log('no results');
    rows.push(<p key={'no results'}>{noResultsText}</p>);
   }

    return(
      <div className="content exercise-list container">
      <Loader loaded={this.state.loaded}>
        <div className="sp-head row">
            <a href="/" class="go-up icon-arrow-left"></a>
            <h1>Events</h1>
        </div>
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
             <button onClick={this.handleReset} className="btn btn-primary">Reset</button>
           </div>
           </form>
        </div>

            {rows}

        </Loader>
      </div>
    );
  }
}

export default ExerciseList;
