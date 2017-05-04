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
		  projects: []
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
      }
    ]});
  }

	componentWillMount(){
    this.getProjects();
  }

  componentDidMount(){
  	this.getProjects();
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
