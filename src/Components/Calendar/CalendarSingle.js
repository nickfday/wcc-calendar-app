import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './calendar-list.css';
import moment from 'moment';
import BSModal from '../Misc/BSModal'

class CalendarSingle extends Component {

  // Render endTime only if differs to startTime
  renderTime() {
    let startTime = moment(event.date).format('h:ma');
    let endTime = moment(event.end_date).format('h:ma');
      if (startTime === endTime) {
        return(
          <span>{startTime}</span>
        );
      }
        else {
          return(
          <span>{startTime} to {endTime}</span>
        );
      }
    }

    render(){

      var event;
      console.log(this);

      try{
      if(typeof this.props.location.state.events !== 'undefined') {
          event = this.props.location.state.events;
      }
    } catch(e){
      //console.log('responde[0].title is undefined');
    }

      try{
      if(typeof this.props.history.event !== 'undefined') {
         event = this.props.history.event;
      }
    } catch(e){
      console.log('responde[0].title is undefined');
    }

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
        <div className="content exercise-list container">
        <div className="sp-breadcrumbs"></div>
         <div className="sp-head row">
            <Link to="/" className="go-up icon-arrow-left"></Link>
            <h1>{event.title}</h1>
          </div>
          <div className="event-row clearfix">
            <div className="col-xs-2">
              <div className="date-info pull-left">
                <div className="custom-dayOfWeek">
                  {moment(event.date).format('ddd')}
                 </div>
                <div className="custom-day">
                  {moment(event.date).format('D')}
                </div>
                <div className="custom-month">
                  {moment(event.date).format('MMM')}
                </div>
                <div className="custom-year">
                 {moment(event.date).format('YYYY')}
                </div>
              </div>
            </div>

            <div className="event-info col-xs-7">
            <div>
              { this.renderTime() }
              <br />
              <BSModal
                 buttonLabel={event.location}
                 map={'https://www.google.com/maps/embed/v1/place?key=AIzaSyD8cbhTTREwAxNI3IxRLwMGfE1xb_eOINc&q='+event.location}
                 />

              <section>
              <h4>Price</h4>
                {event.price}
              </section>

              <section>
              <h4>How to Book</h4>
                {event.how_to_book}
              </section>

              <hr />

              <section>
                {event.body}
              </section>
            </div>
          <div>



         </div>
          <br />
         {eventItem}
          <br />
          <div className="clearfix"></div>

          {audienceItem}

          <div className="clearfix"></div>
          <div className="clearfix"></div>

          <Link to='/'>Back to All Events</Link>


      </div>

       <div className="col-xs-3">
         <div>
           <img src={event.featured_image} alt={event.featured_image_alt_text} />
         </div>
       </div>


      </div>
      </div>
        );
    }
}

export default CalendarSingle;