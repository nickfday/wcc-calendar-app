import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import $ from 'jquery';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import Projects from './Components/Projects';
import Layout from './Components/Layout';
import Todos from './Components/Todos';
import Users from './Components/Users';
import Home from './Components/Home';



ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
     	<Route path="/users" component={Users}/>
      {/* make them children of `App` */}
      </Route>
  </Router>
  ),
  document.getElementById('root')
);
