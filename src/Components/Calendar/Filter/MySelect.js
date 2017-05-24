import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class MySelect extends React.Component{

  logChange(val) {
    console.log(val);
    this.props.handleSelectedItem(val);
    if (val == null) {
      this.props.handleSelectedItem('');
    }
  }

  render(){

    let options = [];
    console.log(this.props.data);
    this.props.data.map(function(element){
      options.push({
        value: element.name,
        label: element.name
      });
    });
    console.log(options);


    return(

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