import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';


class BSModal extends Component {
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

render() {
  return(
    <div>

    <div className="cursor-pointer" onClick={this.open}>
         <span className="glyphicon glyphicon-globe" aria-hidden="true"></span> {this.props.buttonLabel}
    </div>

      <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.buttonLabel}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {this.props.map &&
            <iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src={this.props.map} onLoad={console.log('loaded')}>
             </iframe>
            }
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>

    </div>
    )
}
}

export default BSModal;