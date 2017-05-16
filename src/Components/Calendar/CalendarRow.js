import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './calendar-list.css';


class CalendarRow extends Component {
  render() {
    const event = this.props.events;
    const eventURL = event.uuid.replace(/\s+/g, '-').toLowerCase();

    //extract year
    const eventYear = event.date.slice(0,4);
    //extract day
    const eventDay = event.date.slice(8, 11);
    //extract month
    const eventMonth = event.date.slice(5,7);
    //extract time
    const eventTime = event.date.slice(11,16);

    return (
      <div className="event-row row">
        <div className="event-info col-xs-10">
         <h3>
           <Link to={{
             pathname: `/event/${eventURL}`,
             state: { events: event}
              }}>{event.title}
           </Link>
         </h3>
         <br />
         <div>
           {event.body}...
           <Link to={{
           pathname: `/event/${eventURL}`,
           state: { event: event}
            }}>Read More
         </Link>
         </div>
          <br />
         <div>
          {eventDay} {eventMonth} {eventYear} {eventTime}
         </div>
          <br />
         <div>
           {event.location}
         </div>
          <br />
         <div>
           {event.event_type}
         </div>
          <br />
         <div>
           {event.audience}
         </div>

         </div>

         <div className="col-xs-2 pull-right">
          <div className="date-info">
            <div className="custom-dayOfWeek">
              Thu      </div>
            <div className="custom-day">
              {eventDay}      </div>
            <div className="custom-month">
              {eventMonth}      </div>
            <div className="custom-year">
              {eventYear}      </div>
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