import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavList from './NavList';

class Layout extends Component {
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
        link: '/exercise'
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

export default Layout;
