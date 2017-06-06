import React, { Component } from 'react';
import CalendarRow from './CalendarRow';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import events from './events';

import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer


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

      //Date Filter condition
      let selectedStartDate = moment(eventArray.startDate);
      let selectedEndDate = moment(eventArray.endDate);
      let rowDate = moment(eventItem.date);

      if (selectedStartDate > rowDate) {
        return;
      }

      if (selectedEndDate < rowDate) {
        return;
      }

      //Show eventItems
      eventItems.push(
        <CalendarRow events={eventItem} key={eventItem.uuid} />
      );
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

   //if list view toggle show eventItems else render calendar component
    return(
      <div className="">
        { this.props.events.isListViewOn ?
          <div>{ eventItems }</div> :
            <BigCalendar
            {...this.props}
              events={events}
              defaultDate={new Date(2015, 3, 1)}
            />
        }
      </div>
    );
  }
}

export default CalendarList;
