import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import {  BrowserRouter as Router, Link, Route, IndexRoute, browserHistory, NavLink, Redirect, Switch } from 'react-router-dom';
import Layout from './Layout';
import './app.css';
import Home from './Home';
import Footer from './Footer';
import ExerciseList from './Exercise/ExerciseList';
import ExerciseSingle from './Exercise/ExerciseSingle';

class App extends Component {
	render() {
		return(
			<Router>
	  	<div>
	  		{<Layout />}
	  		<Switch>
			    <Route exact path="/" component={Home}/>
			    <Route exact path="/exercise" component={ExerciseList}/>
			    <Route exact path="/exercise/:id" component={ExerciseSingle} />
			    <Route component={NoMatch}/>
		    </Switch>
		    < Footer />
	    </div>
	  </Router>
			)
	}
}

export default App;

ReactDOM.render((
	  <Router>
	  	<div>
	  		{<Layout />}
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
  <div className="container content">
    <h3>404- No match for <code>{location.pathname}</code></h3>
  </div>
)
