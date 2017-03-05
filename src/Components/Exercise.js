import React, { Component } from 'react';
import $ from 'jquery';
import Todos from './Todos';


class Exercise extends Component {
	constructor(){
		super();
		this.state = {
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

	componentWillMount(){
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }

  render() {
  	return(
  		<div>
  		<Todos todos={this.state.todos} />
  		</div>
  	)
  }


}

export default Exercise;