import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router'
import Projects from './Components/Projects';
import Home from './Components/Home';


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
        link: 'users'
      },
      {
        title: 'Workout',
        link: 'exercise'
      }
    ]});
  }

	componentWillMount(){
    this.getProjects();
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
