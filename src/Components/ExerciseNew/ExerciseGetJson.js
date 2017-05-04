import React, { Component } from 'react';
import { Link } from "react-router";
import $ from 'jquery';


class ExerciseGetJson extends Component {
	constructor(){
		super();
		this.state = {
			exercises:[],
		}
	}

	getExercises(){
    $.ajax({
      url: 'http://fitnessremoted7.dev/api/rest/views/exercise.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({exercises: data}, function(){
          console.log('exercises state is '+ this.state);
        },
        );
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

	componentWillMount(){
    this.getExercises();
  }

  componentDidMount(){
    this.getExercises();
  }

   render(){

        return (
        	<div>
        		{this.state.exercises.map(exercise =>
        			<div>{exercise.title}</div>
        			)}
        	</div>
        );
    }
}



export default ExerciseGetJson;