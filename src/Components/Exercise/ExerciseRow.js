import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './exercise-list.css';


class ExerciseRow extends Component {
  render() {
    const exercises = this.props.exercises;
    const exerciseURL = exercises.uuid.replace(/\s+/g, '-').toLowerCase();

    //extract year
    const eventYear = exercises.date.slice(0,4);
    //extract day
    const eventDay = exercises.date.slice(8, 11);
    //extract month
    const eventMonth = exercises.date.slice(5,7);
    //extract time
    const eventTime = exercises.date.slice(11,16);

    return (
      <div className="event-row row">
        <div className="event-info col-xs-10">
         <h3>
           <Link to={{
             pathname: `/exercise/${exerciseURL}`,
             state: { exercise: exercises}
              }}>{exercises.title}
           </Link>
         </h3>
         <br />
         <div>
           {exercises.body}...
           <Link to={{
           pathname: `/exercise/${exerciseURL}`,
           state: { exercise: exercises}
            }}>Read More
         </Link>
         </div>
          <br />
         <div>
          {eventDay} {eventMonth} {eventYear} {eventTime}
         </div>
          <br />
         <div>
           {exercises.location}
         </div>
          <br />
         <div>
           {exercises.event_type}
         </div>
          <br />
         <div>
           {exercises.audience}
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

ExerciseRow.propTypes = {
  todo: PropTypes.object
}

export default ExerciseRow;