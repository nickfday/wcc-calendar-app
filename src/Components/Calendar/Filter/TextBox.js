import React, { Component } from 'react';

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    return(
       <div className="form-group">
         <label className="sr-only" htmlFor="exampleInputEmail3">{this.props.placeholder}</label>
         <input type="text"
           className="form-control"
           placeholder={this.props.placeholder}
           value={this.props.filterText}
           onChange={this.handleFilterTextInputChange}
         />
       </div>
    );
  }
}

export default TextBox;
