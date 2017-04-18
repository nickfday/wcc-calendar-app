import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import { Scrollspy } from 'react-scrollspy'
// var Scrollspy = require('react-scrollspy').Scrollspy;

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

        configureAnchors({offset: -60, scrollDuration: 200})

        return (
            <div className="content exercise-detail container">
            	<div className="row">
		            <div className="col-sm-10">
		                <h1>{exercise[0].name}</h1>
		                <section id='video' className="page-header">
										<ScrollableAnchor id={'videoHeader'}><h3>Video</h3></ScrollableAnchor>
			                <div className="embed-responsive embed-responsive-16by9">
			  								<iframe width="560" height="315" src={exercise[0].video} frameborder="0" allowfullscreen></iframe>
											</div>
										</section>
										<dl className="dl-horizontal">
											<dt>Primary Muscle</dt>
											<dd>{exercise[0].primaryMuscle}</dd>
											<dt>Secondary Muscle</dt>
											<dd>{exercise[0].secondaryMuscle}</dd>
											<dt>Equipment</dt>
											<dd>{exercise[0].equipment}</dd>
										</dl>

										<section id='description' className="page-header">
										<ScrollableAnchor id={'descriptionHeader'}><h3>Description</h3></ScrollableAnchor>
						        <p>{exercise[0].body}</p>
						        </section>

						        <section id='howToPerform' className="page-header">
										<ScrollableAnchor id={'howToPerformHeader'}><h3>How to Perform</h3></ScrollableAnchor>
						        <p>{exercise[0].instructions}</p>
						        </section>

						        <section id='facts' className="page-header">
										<ScrollableAnchor id={'factsHeader'}><h3>Facts</h3></ScrollableAnchor>
						        <p>{exercise[0].facts}</p>
						        </section>

						        <section id='strengthStandards' className="page-header">
										<ScrollableAnchor id={'strengthStandardsHeader'}><h3>Strength Standards</h3></ScrollableAnchor>
						        <p>Strength Standards</p>
						        </section>

						        <section id='relatedArticles' className="page-header">
										<ScrollableAnchor id={'relatedArticlesHeader'}><h3>Related Articles</h3></ScrollableAnchor>
						        <p>{exercise[0].relatedArticles}</p>
						        </section>

						        <section id='relatedExercises' className="page-header">
										<ScrollableAnchor id={'relatedExercisesHeader'}><h3>Related Exercises</h3></ScrollableAnchor>
						        <p>{exercise[0].relatedExercises}</p>
						        </section>



		            </div>

		            <div className="col-sm-2">
		            	<div className="sticky">
										<div id="innerMenu">
								          <Scrollspy items={ ['video', 'description', 'howToPerform', 'howToPerform', 'facts', 'strengthStandards', 'relatedArticles', 'relatedExercises' ] } currentClassName="is-current">
								          <li><a href='#video'>Video</a></li>
								          <li><a href='#descriptionHeader'>Description</a></li>
								          <li><a href='#howToPerformHeader'>How to Perform</a></li>
								          <li><a href='#factsHeader'>Facts</a></li>
								          <li><a href='#strengthStandardsHeader'>Strength Standards</a></li>
								          <li><a href='#relatedArticlesHeader'>Related Articles</a></li>
								          <li><a href='#relatedExercisesHeader'>Related Exercises</a></li>
											  </Scrollspy>
							      </div>
							    </div>
		            </div>

            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        );
    }
}

export default ExerciseNewDetail;