import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import Navigation from './Components/Navigation';

class App extends Component {
	constructor(){
		super();
		this.state = {
			projects: [],
		}
	}

	getProjects(){
    this.setState({projects: [
      {
        title: 'Business Website',
        category: 'Web Deisgn'
      },
      {
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});
  }

	componentWillMount(){
    this.getProjects();
  }

	render() {
		return (
			<div className="App">
				<Navigation />
		</div>
		);
	}
}

export default App;
