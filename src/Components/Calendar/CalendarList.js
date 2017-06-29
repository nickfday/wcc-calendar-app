import React, { Component } from 'react';
import CalendarRow from './CalendarRow';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import events from './events';

import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer


class CalendarList extends Component {
  noResults() {
    alert();
    // eventItems.push(
    //   <div className="eventItem"  key={'no results'}>
    //   <div className="col-sm-12">
    //     <p>{noResultsText} <a href="" onClick={this.props.handleReset}>Reset</a></p>
    //   </div>
    //   </div>
    // );
  }

  render() {
    let eventArray = this.props.events;
    let eventItems = [];
    let selectedEvents = [];
    let selectedAudience = [];
    const noResultsText = 'No results - please adjust filters';
    let self = this;
    var uniqueMatched = [];

    //Retrieve events value
    if (eventArray.selectedEventTypes !=='') {
      eventArray.selectedEventTypes.forEach((element, index) => {
      selectedEvents.push(element.value);
      });
    }

    //Retrieve audience value
    if (eventArray.selectedAudienceTypes !=='') {
      eventArray.selectedAudienceTypes.forEach((element, index) => {
      selectedAudience.push(element.value);
      });
    }

    // Filter Listings
    eventArray.events.forEach((eventItem, index) => {
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

      // console.log(selectedEvents);
      // //Event Filter condition
      //   if (eventArray.selectedEventTypes !=='' &&
      //      selectedEvents.indexOf(eventItem.event_type) === -1 )
      //     {
      //       return
      //     }

      //Audience Filter condition

        console.log(eventItem.audience.split(", "));

        // looping each event
        // empty match array
        const matchedTag = [];
          // loop sorted selected audience
          console.log(this.props.events.selectedAudienceTypes);
          Object.keys(this.props.events.selectedAudienceTypes).sort().map((selectedTag) => {
             // loop all sorted tags
             eventItem.audience.split(", ").sort().map((tag) => {
              console.log(tag);
              console.log(self.props.events.selectedAudienceTypes[selectedTag]);
              // if selected audience value == tag push onto matched event
              if (self.props.events.selectedAudienceTypes[selectedTag].value == tag) {
                console.log('MATCHED');
                matchedTag.push(eventItem);
              }
             })


          })


          //if selectedTag length == matchedEvent length display record


        // if ((eventArray.selectedAudienceTypes !=='') &&
        //    (selectedAudience.indexOf(eventItem.audience) === -1 ))
        //   {
        //     return
        //   }

      // if (
      //   (eventArray.selectedAudienceTypes !=='') &&
      //   (eventItem.audience !== eventArray.selectedAudienceTypes.value)
      //  ) {
      //   return;
      // }

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
      console.log(uniqueMatched);
      console.log(eventItem);






       console.log(matchedTag.length);
      console.log(self.props.events.selectedAudienceTypes.length);
      if (matchedTag.length == self.props.events.selectedAudienceTypes.length) {
        console.log(eventItem);
        uniqueMatched.push(eventItem);
      }



     uniqueMatched.map(function(element){
        if (element.title == eventItem.title) {
          console.log('final match');
          eventItems.push(
        <CalendarRow events={eventItem} key={eventItem.uuid} />
      );
        }
      });







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
