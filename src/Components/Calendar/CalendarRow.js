import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './calendar-list.css';
import { Button, Modal } from 'react-bootstrap';
import moment from 'moment';
import BSModal from '../Misc/BSModal'



class CalendarRow extends Component {

  render() {
    const event = this.props.events;
    const eventURL = event.uuid.replace(/\s+/g, '-').toLowerCase();
    const eventDateMoment = moment(event.date);

    let audienceItem = event.audience.split(',').map(function(element, index){
      return(
        <div className="audience-item"  key={index}>
          {element}
        </div>
      );
    });

    let eventItem = event.event_type.split(',').map(function(element, index){
      return(
        <div className="event-item" key={index}>
          {element}
        </div>
      );
    });

    return (
      <div className="event-row clearfix">
        <div className="col-xs-2">
          <div className="date-info pull-left">
            <div className="custom-dayOfWeek">
              {moment(eventDateMoment).format('ddd')}
            </div>
            <div className="custom-day">
              {moment(eventDateMoment).format('D')}
            </div>
            <div className="custom-month">
              {moment(eventDateMoment).format('MMM')}
            </div>
            <div className="custom-year">
               {moment(eventDateMoment).format('YYYY')}
            </div>
          </div>
        </div>

        <div className="event-info col-xs-7">
         <h3>
           <Link to={{
             pathname: `/event/${eventURL}`,
             state: { events: event}
           }}>
            {event.title}
           </Link>
         </h3>
         <br />
         <div>
           {event.body}...
           <Link to={{
             pathname: `/event/${eventURL}`,
             state: { events: event}
            }}>Read More
         </Link>
         </div>
          <br />
          <br />
         <div>

         <BSModal
         buttonLabel={event.location}
         map="https://maps.google.com/maps?hl=en&amp;q=' + {event.location} + '&amp;z=14&amp;t=m&amp;output=embed"
         />
         <br/>
         <br/>
         <br/>


         </div>
          <br />
         {eventItem}
          <br />
          <div className="clearfix"></div>

          {audienceItem}


      </div>

       <div className="col-xs-3">
         <div>
           <img src={event.featured_image} alt={event.featured_image_alt_text} />
         </div>
       </div>


      </div>

    );
  }
}

CalendarRow.propTypes = {
  todo: PropTypes.object
}

export default CalendarRow;