import React, { Component } from 'react';
import CalendarRow from './CalendarRow';

class CalendarList extends Component {
  render() {
    let eventArray = this.props.events;
    let eventItems = [];
    const noResultsText = 'No results - please adjust filters';

    eventArray.events.forEach((eventItem) => {
      //Search filter condition
      if (
        (eventArray.titleText !=='') &&
        (eventItem.title.toLowerCase().indexOf(eventArray.titleText.toLowerCase()) === -1)
       ) {
        return;
      }
      //Address Filter condition
      if (
        (eventArray.addressText !=='') &&
        (eventItem.location.toLowerCase().indexOf(eventArray.addressText.toLowerCase()) === -1)
       ) {
        return;
      }
      //Event Filter condition
      if (
        (eventArray.selectedEventTypes !=='') &&
        (eventItem.event_type !== eventArray.selectedEventTypes.value)
       ) {
        return;
      }
      //Audience Filter condition
      if (
        (eventArray.selectedAudienceTypes !=='') &&
        (eventItem.audience !== eventArray.selectedAudienceTypes.value)
       ) {
        return;
      }

      //Show eventItems
      eventItems.push( <CalendarRow events={eventItem} key={eventItem.uuid} />);
      return;
    });
    // at loop end
   if (eventItems.length === 0) {
    eventItems.push(
      <div className="eventItem"  key={'no results'}>
      <div className="col-sm-12">
        <p>{noResultsText} <a href="" onClick={this.props.handleReset}>Reset</a></p>
      </div>
      </div>
    );
   }

    return(
      <div className="">
        { eventItems }
      </div>
    );
  }
}

export default CalendarList;
