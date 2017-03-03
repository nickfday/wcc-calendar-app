import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    return (
    	<li className="nav-item active">
							<a className="nav-link" href="#">{this.props.project.title} <span class="sr-only"></span></a>
						</li>
    );
  }
}

ProjectItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default ProjectItem;