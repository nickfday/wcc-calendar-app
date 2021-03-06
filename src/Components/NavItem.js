import React, { Component } from 'react';
//import { Link } from "react-router";
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';


class NavItem extends Component {
  render() {
    return (
    	<li className="nav-item">
							<NavLink className="nav-link"
							to={this.props.project.link}>
								{this.props.project.title}
								<span className="sr-only"></span>
							</NavLink>
						</li>
    );
  }
}

NavItem.propTypes = {
  project: PropTypes.object,
  onDelete: PropTypes.func
}

export default NavItem;