import React, { Component } from 'react';
import { Table } from 'reactstrap';
import CalendarRow from './CalendarRow';
import CalendarFilter from './CalendarFilter';
import CalendarSelect from './CalendarSelect';
var Loader = require('react-loader');
import axios from 'axios';
import $ from 'jquery';
import FetchApi from '../FetchApi';

class CalendarList extends Component {
  constructor(props){
    super(props);
    this.state = {
      exercises: [],
      loaded: false,
      titleText: '',
      addressText: '',
      primaryMuscle: ''
      //col: ''
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleAddressTextInput = this.handleAddressTextInput.bind(this);

    this.handleSelectTextInput = this.handleSelectTextInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSort = this.handleSort.bind(this);
    }

  handleFilterTextInput(titleText) {
    this.setState({
      titleText: titleText
    });
  }

  handleAddressTextInput(addressText) {
    this.setState({
      addressText: addressText
    });
  }

  //  handleAddressTextInput(filterText) {
  //   this.setState({
  //     addressText: addressText
  //   });
  // }

  handleSelectTextInput(primaryMuscle) {
    this.setState({
      primaryMuscle: primaryMuscle
    });
  }
  // RESET STATE FUNCTION
  handleReset(event) {
    event.preventDefault();
    this.setState({
      titleText: '',
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
      	//console.log(response);
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
        (exerciseList.titleText !=='') &&
        (row.title.toLowerCase().indexOf(exerciseList.titleText.toLowerCase()) === -1)
       ) {
        return;
      }

      if (
        (exerciseList.addressText !=='') &&
        (row.location.toLowerCase().indexOf(exerciseList.addressText.toLowerCase()) === -1)
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
      rows.push( <CalendarRow exercises={row} key={row.u} />);
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

      {/*Filters */}
        <div className="">
          <form id="exerciseForm" className="calendar-form">

          <div class="row">
            <div className="form-group col-sm-4">
              <CalendarFilter
              filterText={this.state.titleText}
              onFilterTextInput={this.handleFilterTextInput}
              placeholder='Search for keyword'
              />
             </div>

            <div className="form-group col-sm-4">
            <CalendarFilter
              addressText={this.state.addressText}
              onFilterTextInput={this.handleAddressTextInput}
              placeholder='Search by address'
            />
            </div>

            <div className="form-group col-sm-2">
              <label className="sr-only" for="exampleInputEmail3">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Start Date"/>
            </div>

            <div className="form-group col-sm-2">
              <label className="sr-only" for="exampleInputEmail3">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail3" placeholder="End Date"/>
            </div>

          </div>

          <div class="row">

            <div className="form-group col-sm-4">
              <label className="sr-only" for="exampleInputEmail3">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Event Type"/>
            </div>
            <div className="form-group col-sm-4">
              <label className="sr-only" for="exampleInputEmail3">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Who it's for"/>
            </div>

          </div>



           {/*<div className="col-sm-3">
             <CalendarSelect muscles={this.state.exercises} onSelectTextInput={this.handleSelectTextInput}/>
           </div>
           <div className="col-sm-2">
             <button onClick={this.handleReset} className="btn btn-primary">Reset</button>
           </div> */}


           </form>
        </div>


        		<FetchApi fetchUrl='http://alphawcc.dev/api/calendar/views/calendar_json.json'/>
            {rows}

        </Loader>
      </div>
    );
  }
}

export default CalendarList;
