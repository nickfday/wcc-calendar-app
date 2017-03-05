import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router'
import Projects from './Components/Projects';
//import Layout from './Components/Layout';
import Home from './Components/Home';


class App extends Component {
	constructor(){
		super();
		this.state = {
			todos:[],
		  projects: [],

		}
	}

	 getProjects(){
    this.setState({projects: [
      {
        title: 'Home',
        link: 'home'
      },
      {
        title: 'Exercise',
        link: 'user'
      },
      {
        title: 'Workout'
      }
    ]});
  }

	componentWillMount(){
    this.getProjects();
    //this.getTodos();
  }




	// getTodos(){
 //    $.ajax({
 //      url: 'https://jsonplaceholder.typicode.com/todos',
 //      dataType:'json',
 //      cache: false,
 //      success: function(data){
 //        this.setState({todos: data}, function(){
 //          console.log(this.state);
 //        });
 //      }.bind(this),
 //      error: function(xhr, status, err){
 //        console.log(err);
 //      }
 //    });
 //  }

  componentDidMount(){
  	this.getProjects();
    //this.getTodos();
  }

   			//<Todos todos={this.state.todos} />


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
