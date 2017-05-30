import React, { Component } from 'react';
import Filter from './Filter/Filter';
var Loader = require('react-loader');
import axios from 'axios';
import { Link } from 'react-router-dom';
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
      eventTypes: [],
      audienceTypes: [],
      selectedAudienceTypes: '',
      selectedEventTypes: '',
      startDate: null,
      endDate: null
    };
    this.handleTitleTextInput = this.handleTitleTextInput.bind(this);
    this.handleAddressTextInput = this.handleAddressTextInput.bind(this);
    this.handleEventTypeInput = this.handleEventTypeInput.bind(this);
    this.handleSelectedEventTypes = this.handleSelectedEventTypes.bind(this);
    this.handleAudienceInput = this.handleAudienceInput.bind(this);
    this.handleSelectedAudienceTypes = this.handleSelectedAudienceTypes.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);

    this.handleReset = this.handleReset.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  handleStartDate(startDate) {
    this.setState({
      startDate: startDate
    })
  }

  handleEndDate(endDate) {
    this.setState({
      endDate: endDate
    })
  }

  handleTitleTextInput(titleText) {
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

  handleReset(event) {
    event.preventDefault();
    this.setState({
      titleText: '',
      addressText: '',
      selectedEventTypes: '',
      selectedAudienceTypes: '',
      startDate: null,
      endDate: null
    });
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
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  componentDidMount(){
    this.getEvents();
    this.getEventTypes();
    this.getAudienceTypes();
  }


  render() {
    return(
      <div className="content exercise-list container">
        <div className="sp-breadcrumbs"></div>
        <Loader loaded={this.state.loaded}>
          <div className="sp-head row">
            <Link to="/" className="go-up icon-arrow-left"></Link>
            <h1>Events</h1>
          </div>

          <p>Browse the events calendar to find out about big council-run events. We also list a wide variety of groups, meet-ups, classes and workshops run by and on behalf of the Westminster community.</p>

          <div className="row">
            <div className="col-sm-3">
              <Filter
                calenderState={this.state}
                titleText={this.state.titleText}
                addressText={this.state.addressText}
                onTitleTextInput={this.handleTitleTextInput}
                onAddressTextInput={this.handleAddressTextInput}
                onEventTypeInput={this.handleEventTypeInput}
                onAudienceInput={this.handleAudienceInput}
                eventTypes={this.state.eventTypes}
                audienceTypes={this.state.audience}
                handleSelectedEventTypes={this.handleSelectedEventTypes}
                selectedEventTypes={this.state.selectedEventTypes}
                handleSelectedAudienceTypes={this.handleSelectedAudienceTypes}
                selectedAudienceTypes={this.state.selectedAudienceTypes}
                handleReset={this.handleReset}
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                handleStartDate={this.handleStartDate}
                handleEndDate={this.handleEndDate}
              />
            </div>

            <div className="col-sm-9">
              <CalendarList events={this.state} handleReset={this.handleReset} />
            </div>
          </div>
        </Loader>
    </div>
    );
  }
}

export default Calendar;
