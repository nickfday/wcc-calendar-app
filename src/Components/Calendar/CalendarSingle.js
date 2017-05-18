import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class CalendarSingle extends Component {
    render(){
      const event = this.props.location.state.events;

      //extract year
    const eventYear = event.date.slice(0,4);
    //extract day
    const eventDay = event.date.slice(8, 11);
    //extract month
    const eventMonth = event.date.slice(5,7);
    //extract time
    const eventTime = event.date.slice(11,16);

        return (
            <div className="content exercise-detail container">
              <div className="row">
		            <div className="col-sm-10">
		              <h1>{event.title}</h1>
                  <p>{event.body}</p>
                  <p>{event.location}</p>
                  <p>{event.date}</p>
                  <h4>Event Type</h4>
                  {event.event_type}
                  <h4>Event Audience</h4>
                  {event.audience}
                  <br />
                  <br />
                  <Link to='/'>Back to All Events</Link>


										<section id='description' className="page-header">

						        </section>

						        <section id='howToPerform' className="page-header">

						        </section>

						        <section id='facts' className="page-header">

						        </section>

						        <section id='strengthStandards' className="page-header">

						        </section>

						        <section id='relatedArticles' className="page-header">

						        </section>

						        <section id='relatedExercises' className="page-header">

						        </section>

		            </div>

          <div className="col-xs-2 pull-right">
            <div className="date-info">
              <div className="custom-dayOfWeek">
                Thu
              </div>
              <div className="custom-day">
                {eventDay}
              </div>
              <div className="custom-month">
                {eventMonth}
              </div>
              <div className="custom-year">
                {eventYear}
              </div>
            </div>
          </div>






          </div>
          </div>
        );
    }
}

export default CalendarSingle;