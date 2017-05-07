import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import ExerciseSidebar from './ExerciseSidebar';


class ExerciseNewDetail extends Component {
    render(){


        configureAnchors({offset: -60, scrollDuration: 200})

        //const exercises = this.props.location.state.exercise

        return (
            <div className="content exercise-detail container">
            	<div className="row">
		            <div className="col-sm-10">
		                <h1>{this.props.location.state.exercise.title}</h1>
		                <section id='video' className="page-header">
										<ScrollableAnchor id={'videoHeader'}><span></span></ScrollableAnchor>
			                <div className="embed-responsive embed-responsive-16by9">
			  								<iframe width="560" height="315" src={this.props.location.state.exercise.video_url} frameBorder="0" allowFullScreen></iframe>
											</div>
										</section>
										<dl className="dl-horizontal">
											<dt>Primary Muscle</dt>
											<dd>{this.props.location.state.exercise.primary_muscle}</dd>
											<dt>Secondary Muscle</dt>
											<dd>{this.props.location.state.exercise.secondary_muscle}</dd>
											<dt>Equipment</dt>
											<dd>{this.props.location.state.exercise.equipment}</dd>
										</dl>

										<section id='description' className="page-header">
										<ScrollableAnchor id={'descriptionHeader'}><h3>Description</h3></ScrollableAnchor>
						        <div dangerouslySetInnerHTML={{__html: `<p>${this.props.location.state.exercise.body}</p>`}}></div>
						        </section>

						        <section id='howToPerform' className="page-header">
										<ScrollableAnchor id={'howToPerformHeader'}><h3>How to Perform</h3></ScrollableAnchor>
						       	<div dangerouslySetInnerHTML={{__html: `<div>${this.props.location.state.exercise.instructions}</div>`}}></div>
						        </section>

						        <section id='facts' className="page-header">
										<ScrollableAnchor id={'factsHeader'}><h3>Facts</h3></ScrollableAnchor>
						        <p>Facts Here</p>
						        </section>

						        <section id='strengthStandards' className="page-header">
										<ScrollableAnchor id={'strengthStandardsHeader'}><h3>Strength Standards</h3></ScrollableAnchor>
						        <p>Strength Standards</p>
						        </section>

						        <section id='relatedArticles' className="page-header">
										<ScrollableAnchor id={'relatedArticlesHeader'}><h3>Related Articles</h3></ScrollableAnchor>
						        <p>Related Articles</p>
						        </section>

						        <section id='relatedExercises' className="page-header">
										<ScrollableAnchor id={'relatedExercisesHeader'}><h3>Related Exercises</h3></ScrollableAnchor>
						        <p>Related Exercises</p>
						        </section>



		            </div>

		            <div className="col-sm-2">
		            	<ExerciseSidebar />
		            </div>
            </div>
          </div>
        );
    }
}

export default ExerciseNewDetail;