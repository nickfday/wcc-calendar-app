import React, { Component } from 'react';


class ExerciseNewDetail extends Component {
    render(){

        //const exercises = this.props.location.state.exercise

        return (
            <div className="content exercise-detail container">
            	<div className="row">
		            <div className="col-sm-12">
		                <h1>{this.props.location.state.exercise.title}</h1>


										<section id='description' className="page-header">

						        </section>

						        <section id='howToPerform' className="page-header">

						        </section>

						        <section id='facts' className="page-header">

						        </section>

						        <section id='strengthStandards' className="page-header">

						        </section>

						        <section id='relatedArticles' className="page-header">

						        </section>

						        <section id='relatedExercises' className="page-header">

						        </section>

		            </div>
            </div>
          </div>
        );
    }
}

export default ExerciseNewDetail;