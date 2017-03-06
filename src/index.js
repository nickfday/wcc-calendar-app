import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import $ from 'jquery';
import { Navbar, Jumbotron, Button, Navigation } from 'react-bootstrap';
import Projects from './Components/Projects';
import Todos from './Components/Todos';
import Exercise from './Components/Exercise';
import Users from './Components/Users';
import Home from './Components/Home';
import Footer from './Components/Footer';



ReactDOM.render((
	<div>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
     	<Route path="/users" component={Users}/>
     	<Route path="/exercise" component={Exercise}/>
      {/* make them children of `App` */}
    </Route>
  </Router>
  <Footer/>
  </div>
  ),
  document.getElementById('root')
);
