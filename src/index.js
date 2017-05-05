import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App';
import './index.css';
import './App.css';
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
     	<Route path="/exercise/:id" component={ExerciseSingle} />
    </Route>
  </Router>
  <Footer/>

  </div>
  ),
  document.getElementById('root')
);
