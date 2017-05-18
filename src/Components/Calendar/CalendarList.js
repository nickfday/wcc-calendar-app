import React, { Component } from 'react';
import { Table } from 'reactstrap';
import CalendarRow from './CalendarRow';

class CalendarList extends Component {
  render() {
    let eventItems = [];
    let emptyText = [];
    let eventArray = this.props.events;
    const noResultsText = "No results - please adjust filters";

    eventArray.events.map((eventItem) => {
      //Search filter condition
      if (
        (eventArray.titleText !=='') &&
        (eventItem.title.toLowerCase().indexOf(eventArray.titleText.toLowerCase()) === -1)
       ) {
        return;
      }

      if (
        (eventArray.addressText !=='') &&
        (eventItem.location.toLowerCase().indexOf(eventArray.addressText.toLowerCase()) === -1)
       ) {
        return;
      }


      //Primary Muscle condition
      // if (
      //   (eventArray.title !== 'Any Primary Muscle') &&
      //   (eventItem.title.indexOf(eventArray.title))) {
      //   return;
      // }

      //Show eventItems
      eventItems.push( <CalendarRow events={eventItem} key={eventItem.uuid} />);
    });
    // at loop end
   if (eventItems.length === 0) {
    console.log('no results');
    eventItems.push(
      <div className="eventItem">
      <div className="col-sm-12">
        <p key={'no results'}>{noResultsText}</p>
      </div>
      </div>
    );
   }

    // at loop end
   if (eventItems.length === 0) {
    eventItems.push(
      <div className="eventItem">
      <div className="col-sm-12">
        <p key={'no results'}>{noResultsText}</p>
      </div>
      </div>
    );
   }

    return(
      <div className="col-sm-12">
        <h2>Calendar List</h2>
        { eventItems }
      </div>
    );
  }
}

export default CalendarList;
