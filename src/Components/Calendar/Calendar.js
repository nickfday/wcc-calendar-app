import React, { Component } from 'react';
import { Table } from 'reactstrap';
import CalendarRow from './CalendarRow';
import Filter from './Filter/Filter';
import TextBox from './Filter/TextBox';
import CalendarSelect from './CalendarSelect';
var Loader = require('react-loader');
import axios from 'axios';
import $ from 'jquery';
import FetchApi from '../FetchApi';
import CalendarList from './CalendarList';

//import { DateField } from 'react-date-picker';
//import 'react-date-picker/index.css';

class Calendar extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: [],
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
    this.state.events.sort(function(a, b){
      if(a[col] < b[col]) return -1;
      if(a[col] > b[col]) return 1;
      return 0;
    });
    this.setState({
      events: this.state.events
    });
  }

  getEvents(){
    const self = this;
    axios.get('http://alphawcc.dev/api/calendar/views/calendar_json.json')
    .then(function(response) {
      self.setState({events: response.data, loaded: true}, function(){
        //console.log(response);
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }


  componentWillMount(){
    this.getEvents();
  }

  componentDidMount(){
    this.getEvents();
  }


  render() {

    return(
      <div className="content exercise-list container">
      <Loader loaded={this.state.loaded}>
        <div className="sp-head row">
            <a href="/" class="go-up icon-arrow-left"></a>
            <h1>Events</h1>
        </div>

      <Filter
      calenderState={this.state}
      onFilterTextInput={this.handleFilterTextInput}
      onAddressTextInput={this.handleAddressTextInput}/>

      <CalendarList events={this.state} />

    </Loader>
  </div>
    );
  }
}

export default Calendar;
