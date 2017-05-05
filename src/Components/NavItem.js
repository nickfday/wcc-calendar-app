import React, { Component } from 'react';
//import { Link } from "react-router";
import { BrowserRouter, Link, Route, IndexRoute, browserHistory, NavLink, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';


class NavItem extends Component {
  render() {
    return (
    	<li className="nav-item active">
							<NavLink className="nav-link" activeClassName="active" to={this.props.project.link}>{this.props.project.title} <span className="sr-only"></span></NavLink>
						</li>
    );
  }
}

NavItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default NavItem;