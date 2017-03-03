import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {

  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        //console.log(project);
        return (
          <ProjectItem project={project} />
        );
      });
    }
    return (
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
					<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<a className="navbar-brand" href="#">Navbar</a>

					<div className="collapse navbar-collapse" id="navbarsExampleDefault">
					<ul className="navbar-nav mr-auto">
						{projectItems}
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<input className="form-control mr-sm-2" type="text" placeholder="Search" />
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
					</form>
				</div>
			</nav>
    );
  }
}

Projects.propTypes = {
  projects: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default Projects;