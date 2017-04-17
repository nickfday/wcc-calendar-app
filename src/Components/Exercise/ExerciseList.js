import React, { Component } from 'react';
import $ from 'jquery';
import Exercise from './Exercise';


class ExerciseView extends Component {
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
  }

  componentDidMount(){
    this.getTodos();
  }

  render() {
  	const exercise = this.props.route.data;

  	return(
  		<div>
  		<Exercise todos={this.state.todos} />
  		</div>
  	)
  }


}

export default ExerciseView;
