import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import $ from 'jquery';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Projects from './Components/Projects';
import Todos from './Components/Todos';
import Users from './Components/Users';


class App extends Component {
	constructor(){
		super();
		this.state = {
			projects: [],
			todos:[]
		}
	}

	getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

	getProjects(){
    this.setState({projects: [
      {
        title: 'Home',
      },
      {
        title: 'Exercise',
      },
      {
        title: 'Workout',
      }
    ]});
  }

	componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }

	render() {
		return (
			<div className="App">
				<Router history={browserHistory}>
					<Route path="/user" component={Users}></Route>
  			</Router>
				<Projects projects={this.state.projects} />
				<Todos todos={this.state.todos} />
		</div>
		);
	}
}

export default App;
