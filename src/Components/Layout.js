import React, { Component } from 'react';
import NavList from './NavList';


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
      },
      {
        title: 'Test',
        link: 'test'
      },
       {
        title: 'Cars',
        link: 'car'
      },
      {
        title: 'Exercise New',
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
    	<Projects projects={this.state.projects} />
    	</div>
    );
  }
}

export default Layout;