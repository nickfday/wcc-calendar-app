import React, { Component } from 'react';
import TextBox from './TextBox';
import MySelect from './MySelect';

class Filter extends Component {

  render() {

    return(
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Filter Events</h3>
        </div>
        <div className="panel-body">

        <form id="exerciseForm" className="calendar-form">


            <TextBox
              filterText={this.props.titleText}
              onFilterTextInput={this.props.onTitleTextInput}
              placeholder='Search for keyword on filter'
              //calenderState={this.props.calendarState}
            />


              <TextBox
                filterText={this.props.addressText}
                onFilterTextInput={this.props.onAddressTextInput}
                placeholder='Search by address on filter'
              />

              <div className='form-group'>
              <label className="sr-only" for="exampleInputEmail3">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Start Date"/>
              </div>


            <div className='form-group'>
            <label className="sr-only" for="exampleInputEmail3">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail3" placeholder="End Date"/>
            </div>




          <label className="sr-only" for="exampleInputEmail3">Event Type</label>
          <MySelect
            data={this.props.calenderState.eventTypes}
            selectedItems={this.props.calenderState.selectedEventTypes}
            handleSelectedItem={this.props.handleSelectedEventTypes}
            placeholder='Select Event Type'
          />

          <label className="sr-only" for="exampleInputEmail3">Who it's for</label>
          <MySelect
            data={this.props.calenderState.audienceTypes}
            selectedItems={this.props.calenderState.selectedAudienceTypes}
            handleSelectedItem={this.props.handleSelectedAudienceTypes}
            placeholder='Select Audience Type'
          />
        </form>




        </div>
      </div>
    );
  }
}

export default Filter;
