import React, { Component } from 'react';
import { Link } from "react-router";

class ProjectItem extends Component {
  render() {
    return (
    	<li className="nav-item active">
							<Link className="nav-link" to={this.props.project.link}>{this.props.project.title} <span className="sr-only"></span></Link>
						</li>
    );
  }
}

ProjectItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default ProjectItem;