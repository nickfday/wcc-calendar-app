import React, { Component } from 'react';
import $ from 'jquery';


class ExerciseHelper extends Component {
	constructor(){
		super();
		this.state = {
			exercises:[]
		}
	}

	getTodos(){
    $.ajax({
      url: 'http://fitnessremoted7.dev/api/rest/views/exercise.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

	componentWillMount(){
    this.getTodos();
    console.log('nick' + this.getTodos());
  }

  componentDidMount(){
    this.getTodos();
  }

  export default ExerciseHelper;