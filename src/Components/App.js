import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import './app.css';
import Home from './Home';
import Footer from './Footer';
import ExerciseList from './Exercise/ExerciseList';
import ExerciseSingle from './Exercise/ExerciseSingle';

const NoMatch = ({ location }) => (
  <div className="container content">
    <h3>404- No match for <code>{location.pathname}</code></h3>
  </div>
);

class App extends Component {
  render() {
		return(
			<Router>
	  	<div>
	  		{<Layout />}
	  		<Switch>
			    <Route exact path="/" component={ExerciseList}/>
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
