import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'
import App from './App';
import './index.css';
import './App.css';
//import { Navbar, Jumbotron, Button, Navigation } from 'react-bootstrap';
import Workout from './Components/ToDoView';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ExerciseList from './Components/Exercise/ExerciseList';



ReactDOM.render((
	<div>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
     	<Route path="/exercise" component={ExerciseList}/>
     	<Route path="/workout" component={Workout}/>
      {/* make them children of `App` */}
    </Route>
  </Router>
  <Footer/>
  </div>
  ),
  document.getElementById('root')
);
