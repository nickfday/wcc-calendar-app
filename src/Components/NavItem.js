import React, { Component } from 'react';
import { Link } from "react-router";
import PropTypes from 'prop-types';


class NavItem extends Component {
  render() {
    return (
    	<li className="nav-item active">
							<Link className="nav-link" activeClassName="active" to={this.props.project.link}>{this.props.project.title} <span className="sr-only"></span></Link>
						</li>
    );
  }
}

NavItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default NavItem;