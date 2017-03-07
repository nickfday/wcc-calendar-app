import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App';
import './index.css';
import './App.css';
//import { Navbar, Jumbotron, Button, Navigation } from 'react-bootstrap';
import Workout from './Components/ToDoView';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ExerciseList from './Components/Exercise/ExerciseList';
import ExerciseSingle from './Components/Exercise/ExerciseSingle';





ReactDOM.render((
	<div>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
     	<Route path="/exercise" component={ExerciseList}/>
     	<Route path="/workout" component={Workout} />
     	<Route path="/exercise/813b0238-96f9x4db7-be0a-ca54f2c5c0df" component={ExerciseSingle}/>
      {/* make them children of `App` */}
    </Route>
  </Router>
  <Footer/>
  </div>
  ),
  document.getElementById('root')
);
