import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class MySelect extends React.Component{

  constructor(){
     super();
     this.logChange = this.logChange.bind(this);
  }

  logChange(val) {
    this.props.handleSelectedItem(val);
  }

  render(){

    var options = [];
    this.props.data.map(function(element){
      options.push({
        value: element.name,
        label: element.name
      });
    });

    return(

      <Select
          name="form-field-name"
          value={this.props.selectedItems}
          options={options}
          onChange={this.logChange.bind(this)}
          multi={false}
          placeholder={this.props.placeholder}
      />
    );
  }
}

export default MySelect;