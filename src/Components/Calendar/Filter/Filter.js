import React, { Component } from 'react';
import TextBox from './TextBox';
import MySelect from './MySelect';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
     value: ''
    }
  }

  logChange(val) {
    console.log("Selected: " + val.value);
    this.setState({value: val.value});
  }



  render() {

    return(
      <div>
       <div className="">
          <form id="exerciseForm" className="calendar-form">
          <div class="row">
            <div className="form-group col-sm-4">
            <TextBox
              filterText={this.props.filterText}
              onFilterTextInput={this.props.onFilterTextInput}
              placeholder='Search for keyword on filter'
              calenderState={this.props.calendarState}
            />
            </div>
            <div className="form-group col-sm-4">
              <TextBox
                filterText={this.props.filterText}
                onFilterTextInput={this.props.onAddressTextInput}
                placeholder='Search by address on filter'
              />
            </div>

          </div>
        </form>
      </div>{/*End Filters */}

        <div className="form-group col-sm-2">
        <label className="sr-only" for="exampleInputEmail3">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Start Date"/>
      </div>

      <div className="form-group col-sm-2">
      <label className="sr-only" for="exampleInputEmail3">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail3" placeholder="End Date"/>
      </div>

      <div class="row">
        <div className="form-group col-sm-4">

          <label className="sr-only" for="exampleInputEmail3">Event Type</label>

          <MySelect
            data={this.props.calenderState.eventTypes}
            selectedItems={this.props.calenderState.selectedEventTypes}
            handleSelectedItem={this.props.handleSelectedEventTypes}
            placeholder='Select Event Type'
          />

          {/*<MySelect
            data={this.props.calenderState.audience}
            selectedItems={this.props.calenderState.selectedAudienceTypes}
            handleSelectedItem={this.props.handleSelectedAudienceTypes}
            placeholder='Select Audience Type'
          /> */}

        </div>
        <div className="form-group col-sm-4">
          <label className="sr-only" for="exampleInputEmail3">Who it's for</label>
          <TextBox
                filterText={this.props.filterText}
                onFilterTextInput={this.props.onAudienceInput}
                placeholder='who it is for'
              />
        </div>
      </div>

      </div>
    );
  }
}

export default Filter;
