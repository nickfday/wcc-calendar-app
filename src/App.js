import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
//import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router'
import Projects from './Components/Projects';
import Home from './Components/Home';


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
        title: 'Workout',
        link: 'workout'
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
    	<Projects projects={this.state.projects} />
    	</div>
		);
	}
}

export default App;
