import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class MySelect extends Component {
  logChange(val) {
    this.props.handleSelectedItem(val);
    if (val == null) {
      this.props.handleSelectedItem('');
    }
  }

  render() {
    let options = [];
    this.props.data.map((element) => {
      return options.push({
        value: element.name,
        label: element.name
      });
    });

    return (
      <Select
        name="form-field-name"
        value={this.props.selectedItems}
        options={options}
        onChange={this.logChange.bind(this)}
        multi={false}
        placeholder={this.props.placeholder}
        className="form-group"
      />
    );
  }
}

export default MySelect;