import React, { Component } from 'react';

class ExerciseNewDetail extends Component {
    render(){
        // Car array
        const exercises = this.props.route.data;
        // Car Id from param
        const id = this.props.params.id;

        // Filter car with ID
        const exercise = exercises.filter(exercise => {
            if(exercise.id == id) {
                return exercise;
            }
        });

        return (
            <div className="content exercise-detail container">
                <h1>{exercise[0].name}</h1>

                <div className="embed-responsive embed-responsive-16by9">
  								<iframe width="560" height="315" src={exercise[0].video} frameborder="0" allowfullscreen></iframe>
								</div>

								<dl className="dl-horizontal">
									<dt>Primary Muscle</dt>
									<dd>{exercise[0].primaryMuscle}</dd>
									<dt>Secondary Muscle</dt>
									<dd>{exercise[0].secondaryMuscle}</dd>
									<dt>Equipment</dt>
									<dd>{exercise[0].equipment}</dd>
								</dl>

								<h3 className="page-header">Description</h3>
								<p>{exercise[0].body}</p>
								<h3 className="page-header">How to Perform</h3>
								<p>{exercise[0].instructions}</p>
								<h3 className="page-header">Facts</h3>
								<p>{exercise[0].facts}</p>
								<h3 className="page-header">Strength Standards</h3>
								<h3 className="page-header">Related Articles</h3>
								<p>{exercise[0].relatedArticles}</p>
								<h3 className="page-header">Related Exercises</h3>
								<p>{exercise[0].relatedExercises}</p>
            </div>
        );
    }
}

export default ExerciseNewDetail;