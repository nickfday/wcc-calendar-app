import React, { Component } from 'react';
import $ from 'jquery';
import Exercise from './Exercise';

class ExerciseSingle extends Component {
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
        this.setState({exercises: data}, function(){
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


		const data = [
    	{
        uuid: '813b0238-96f9-4db7-be0a-ca54f2c5c0df',
        title: 'Incline Press'
      },
      {
        uuid: '1',
        title: 'Nick'
      },
    ]

		  	//working old
		  	const exercises = data;
        //console.log(exercisesData);
        // Car Id from param
        const id = this.props.params.id;

        // Filter car with ID
        const exercise = exercises.filter(exercise => {
            if(exercise.uuid == id) {
                return exercise;
            }
        });



     	// const exercisesData = this.state.exercises;
     	// const id = this.props.params.id;

     	// console.log('Exercises here:' + exercisesData);

     	// //filter

     	// const myExercise = exercisesData.filter(myExercise => {
     	// 	if (myExercise.uuid == id) {
     	// 		return myExercise;
     	// 	}
     	// })

     	// console.log('hello: ' + myExercise);







		return (
			//working old
			<div class="container content">


				<br/>
				<br/>
				<h1>Exercise Single</h1>

				<h1>{this.props.params.id}</h1>


				  	<ul>
       <li><strong>UUID</strong>: {exercise[0].uuid}</li>
       <li><strong>Title</strong>: {exercise[0].title}</li>
       </ul>





			</div>
		)
		}
}

export default ExerciseSingle;