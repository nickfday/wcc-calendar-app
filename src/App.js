import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
//import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import NavList from './Components/NavList';
import Home from './Components/Home';
var Spinner = require('react-spinkit');



class App extends Component {
	constructor(){
		super();
		this.state = {
		  projects: [],
		  exercises: []
		}
	}

	 getProjects(){
    this.setState({projects: [
      {
        title: 'Home',
        link: '/'
      },
      {
        title: 'Exercise',
        link: 'exercise'
      },
       {
        title: 'Cars',
        link: 'cars'
      },
      {
        title: 'Exercise New',
        link: 'exercises'
      }
    ]});
  }

  getExercises(){
  	this.setState({exercises: [
  		{
  			title: 'Bench Press'
  		},
  		{
  			title: 'Shoulder Press'
  		}]}
  		)
  }

	componentWillMount(){
    this.getProjects();
    this.getExercises();
  }

  componentDidMount(){
  	this.getProjects();
  	this.getExercises();
  }


	render() {
		return (
			 <div>
			 {this.props.children || <Home/>}
    	<NavList projects={this.state.projects} />
    	</div>
		);
	}
}

export default App;
