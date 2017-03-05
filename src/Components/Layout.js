import React, { Component } from 'react';
import Projects from './Projects';


class Layout extends Component {
	constructor(){
		super();
		this.state = {
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
  }

  componentDidMount(){
    this.getProjects();
  }

  render() {
    return (
    	<div>
    	<Projects projects={this.state.projects} />
    	</div>
    );
  }
}

export default Layout;