import React, { Component } from 'react';

class ExercisSelect extends Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

   handleSelectChange(e) {
   	console.log('HELLO');
    this.props.onSelectTextInput(e.target.value);
  }

  render() {
  	// improve code
  	var muscles = [];
  	var newMuscles = [];
  	var newnewmuscles = [];
  	this.props.muscles.map(function(muscle, index){
      muscles.push(muscle.primary_muscle);
  	})
  	newMuscles = Array.from(new Set(muscles));
  	newMuscles.map(function(newmuscle, index){
  		newnewmuscles.push(
  			<option key={index}>{newmuscle}</option>
  			)
  	})


    return(
      <select onChange={this.handleSelectChange}>
        <option>Primary Muscle</option>
        {newnewmuscles}
      </select>
    );
  }
}

export default ExercisSelect;
