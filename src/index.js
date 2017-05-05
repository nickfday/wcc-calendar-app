import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import {  BrowserRouter as Router, Link, Route, IndexRoute, browserHistory, NavLink, Redirect } from 'react-router-dom';
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
	  		<Route path="/" component={App}/>
		    <Route exact path="/" component={Home}/>
		    <Route exact path="/exercise" component={ExerciseList}/>
		    <Route exact path="/exercise/:id" component={ExerciseSingle} />
	    </div>
	  </Router>
  ),
  document.getElementById('root')
);
