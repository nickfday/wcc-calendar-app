import React, { Component } from 'react';

class ExerciseFilter extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    return(
      <div>
        <h3>Filters</h3>
          <form>
            <input type="text"
              placeholder="Search..."
              value={this.props.filterText}
              onChange={this.handleFilterTextInputChange}
             />
          </form>
        </div>
    );
  }
}

export default ExerciseFilter;
