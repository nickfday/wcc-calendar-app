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
        link: '/'
      },
      {
        title: 'Exercise',
        link: 'exercise'
      },
      {
        title: 'Workout',
        link: 'users'
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