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
		  navItems: []
		}
	}

	 getNavItems(){
    this.setState({navItems: [
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
    this.getNavItems();
  }

  componentDidMount(){
  	this.getNavItems();
  }

	render() {
		return (
			 <div>
    	<NavList navItems={this.state.navItems} />
    	</div>
		);
	}
}

export default App;
