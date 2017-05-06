import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import {  BrowserRouter as Router, Link, Route, IndexRoute, browserHistory, NavLink, Redirect, Switch } from 'react-router-dom';
import App from './App';
import './index.css';
import './App.css';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ExerciseList from './Components/Exercise/ExerciseList';
import ExerciseSingle from './Components/Exercise/ExerciseSingle';

ReactDOM.render((
	  <Router>
	  	<div>

	  		{/*<Route path="/" component={App}/>*/}
	  		{<App />}
	  		<Switch>
			    <Route exact path="/" component={Home}/>
			    <Route exact path="/exercise" component={ExerciseList}/>
			    <Route exact path="/exercise/:id" component={ExerciseSingle} />
			    <Route component={NoMatch}/>
		    </Switch>
		    < Footer />
	    </div>
	  </Router>
  ),

  document.getElementById('root')
);

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)
