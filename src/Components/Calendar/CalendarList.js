import React, { Component } from 'react';
import { Table } from 'reactstrap';
import CalendarRow from './CalendarRow';
var Loader = require('react-loader');
import axios from 'axios';
import $ from 'jquery';
import FetchApi from '../FetchApi';
//import { DateField } from 'react-date-picker';
//import 'react-date-picker/index.css';

class CalendarList extends Component {
  render() {
    let rows = [];
    let emptyText = [];
    let exerciseList = this.props.events;
    console.log(exerciseList);
    const noResultsText = "No results - please adjust filters";

    exerciseList.events.forEach(function(row){
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
      rows.push( <CalendarRow events={row} key={row.uuid} />);
    });
    // at loop end
   if (rows.length === 0) {
    console.log('no results');
    rows.push(
      <div className="row">
      <div className="col-sm-12">
        <p key={'no results'}>{noResultsText}</p>
      </div>
      </div>
    );
   }

    // at loop end
   if (rows.length === 0) {
    console.log('no results');
    rows.push(
      <div className="row">
      <div className="col-sm-12">
        <p key={'no results'}>{noResultsText}</p>
      </div>
      </div>
    );
   }

    return(
      <div className="col-sm-12">
        <h2>Calendar List</h2>
        { rows }
      </div>
    );
  }
}

export default CalendarList;
