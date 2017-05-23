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
      eventTypes: [],
      selectedEventTypes: '',
      loaded: false,
      titleText: '',
      addressText: '',
      primaryMuscle: '',
      eventType: '',
      audience: '',
      selectedAudienceTypes: '',
      //col: ''
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleAddressTextInput = this.handleAddressTextInput.bind(this);
    this.handleEventTypeInput = this.handleEventTypeInput.bind(this);
    this.handleSelectedEventTypes = this.handleSelectedEventTypes.bind(this);
    this.handleAudienceInput = this.handleAudienceInput.bind(this);
    this.handleSelectedAudienceTypes = this.handleSelectedAudienceTypes.bind(this);

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

  handleEventTypeInput(eventType) {
    this.setState({
      eventType: eventType
    });
  }

  handleSelectedEventTypes(selectedEventTypes) {
    this.setState({
      selectedEventTypes: selectedEventTypes
    });
  }

  handleSelectedAudienceTypes(selectedAudienceTypes) {
    this.setState({
      selectedAudienceTypes: selectedAudienceTypes
    });
  }

  handleAudienceInput(audience) {
    this.setState({
      audience: audience
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

  getEventTypes(){
    const self = this;
    axios.get('http://alphawcc.dev/api/calendar/taxonomy_term.json?parameters[vid]=11')
    .then(function(response) {
      self.setState({eventTypes: response.data, loaded: true}, function(){
        console.table(response.data);
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  getAudienceTypes(){
    const self = this;
    axios.get('http://alphawcc.dev/api/calendar/taxonomy_term.json?parameters[vid]=12')
    .then(function(response) {
      self.setState({audienceTypes: response.data, loaded: true}, function(){
        console.table(response.data);
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  // improve code
    // var muscles = [];
    // var newMuscles = [];
    // var newnewmuscles = [];
    // this.props.muscles.map(function(muscle, index){
    //   muscles.push(muscle.primary_muscle);
    // })
    // newMuscles = Array.from(new Set(muscles));
    // newMuscles.map(function(newmuscle, index){
    //   newnewmuscles.push(
    //     <option key={index}>{newmuscle}</option>
    //     );
    // });






  // componentWillMount(){
  //   this.getEvents();
  // }

  componentDidMount(){
    this.getEvents();
    this.getEventTypes();
    this.getAudienceTypes();
  }


  render() {

      var options = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' }
      ];

      function logChange(val) {
        console.log("Selected: " + val);
      }



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
      onAddressTextInput={this.handleAddressTextInput}
      onEventTypeInput={this.handleEventTypeInput}
      onAudienceInput={this.handleAudienceInput}
      eventTypes={this.state.eventTypes}
      audienceTypes={this.state.audience}
      handleSelectedEventTypes={this.handleSelectedEventTypes}
      selectedEventTypes={this.state.selectedEventTypes}
      handleSelectedAudienceTypes={this.handleSelectedAudienceTypes}
      selectedAudienceTypes={this.state.selectedAudienceTypes}
      />

      <CalendarList events={this.state} />

    </Loader>
  </div>
    );
  }
}

export default Calendar;
