import React, { Component } from 'react';
import TextBox from './TextBox';


class Filter extends Component {

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
          <label className="sr-only" for="exampleInputEmail3">Even Type</label>
          <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Event Type"/>
        </div>
        <div className="form-group col-sm-4">
          <label className="sr-only" for="exampleInputEmail3">Who it's for</label>
          <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Who it's for"/>
        </div>
      </div>

      </div>
    );
  }
}

export default Filter;
