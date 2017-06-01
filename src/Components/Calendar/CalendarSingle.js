import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './calendar-list.css';
import { Button, Modal } from 'react-bootstrap';
import moment from 'moment';



class CalendarSingle extends Component {
  constructor(props) {
    super();
    this.state = {
      showModal: false
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }

  // Render endTime only if differs to startTime
  renderTime() {
    let startTime = moment(this.props.location.state.events.date).format('h:ma');
    let endTime = moment(this.props.location.state.events.end_date).format('h:ma');
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
      const event = this.props.location.state.events;
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
              <div className="cursor-pointer" onClick={this.open}>
                <span className="glyphicon glyphicon-globe" aria-hidden="true"></span> {event.location}
              </div>

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

          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>{event.location}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?hl=en&amp;q=' + {event.location} + '&amp;z=14&amp;t=m&amp;output=embed">
              </iframe>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>

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