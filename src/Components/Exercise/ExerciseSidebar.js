import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import Scrollspy from 'react-scrollspy'


class ExerciseSidebar extends Component {
    render(){


        configureAnchors({offset: -60, scrollDuration: 200})

        //const exercises = this.props.location.state.exercise

        return (
          <div className="sticky">
										<div id="innerMenu">
								          <Scrollspy classNitems={ ['video', 'description', 'howToPerform', 'facts', 'strengthStandards', 'relatedArticles', 'relatedExercises' ] } currentClassName="is-current" offset={-60}
								           className="nav nav-pills">
								          <li className="nav-item"><a href='#videoHeader' className="nav-link">Video</a></li>
								          <li className="nav-item"><a href='#descriptionHeader' className="nav-link">Description</a></li>
								          <li className="nav-item"><a href='#howToPerformHeader' className="nav-link">How to Perform</a></li>
								          <li className="nav-item"><a href='#factsHeader' className="nav-link">Facts</a></li>
								          <li className="nav-item"><a href='#strengthStandardsHeader' className="nav-link">Strength Standards</a></li>
								          <li className="nav-item"><a href='#relatedArticlesHeader' className="nav-link">Related Articles</a></li>
								          <li className="nav-item"><a href='#relatedExercisesHeader' className="nav-link">Related Exercises</a></li>
											  </Scrollspy>
							      </div>
							    </div>
        );
    }
}

export default ExerciseSidebar;