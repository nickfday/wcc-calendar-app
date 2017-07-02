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
    let selectedEvents = [];
    let selectedAudience = [];
    const noResultsText = 'No results - please adjust filters';
    let self = this;
    var uniqueAudienceMatched = [];
    var uniqueEventMatched = [];
    let matchedTag = [];

    function filterMultiSelect(selectVal, itemVal, eventItem, uniqueArray, match) {
      matchedTag = [];
      var uniqueMatched = [];
      match = true;
      // loop sorted selected audience
      Object.keys(selectVal).sort().map((selectedTag) => {
      //loop all sorted tags
        itemVal.split(", ").sort().map((tag) => {
        //if selected audience value == tag push onto matched event
          if (selectVal[selectedTag].value == tag) {
            matchedTag.push(itemVal);
          }
        });
      });
       //Show eventItems
       console.log('HIT');
      if (matchedTag.length == selectVal.length) {
          uniqueMatched.push(eventItem);
      }
      console.log(uniqueMatched.length);
       if (uniqueMatched.length==0) {
        match = false;
      }
      return match;
    }



    function renderItem(item) {
      console.log("render" + item);
       eventItems.push(
        <CalendarRow events={item} key={item.uuid} />
      );
    }

    function noResults(eventItems, self) {
        if (eventItems.length === 0) {
      eventItems.push(
        <div className="eventItem"  key={'no results'}>
        <div className="col-sm-12">
          <p>{noResultsText} <a href="" onClick={self.props.handleReset}>Reset</a></p>
        </div>
        </div>
      );
     }
    }





    // Filter Listings
    eventArray.events.forEach((eventItem, index) => {
      var audienceMatch = true;
      var eventMatch = true;
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



      //filterMultiSelect(self.props.events.selectedEventTypes, eventItem.event_type, eventItem);



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

      //Event Filter Condition
      eventMatch = filterMultiSelect(self.props.events.selectedEventTypes, eventItem.event_type, eventItem, this.eventMatch);

      //Audience Filter condition
      audienceMatch = filterMultiSelect(self.props.events.selectedAudienceTypes, eventItem.audience, eventItem, uniqueAudienceMatched, this.audienceMatch);

      if (audienceMatch && eventMatch) {
        renderItem(eventItem);
      }
      else {
        return;
      }
    // end event loop
    });

    noResults(eventItems, this);


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
