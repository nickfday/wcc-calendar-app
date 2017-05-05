import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NavItem from './NavItem';
import PropTypes from 'prop-types';


class NavList extends Component {

  render() {
    let NavItems;
    if(this.props.projects){
      NavItems = this.props.projects.map(project => {
        //console.log(project);
        return (
          <NavItem project={project} key={project.title} />
        );
      });
    }
    return (

        <Navbar className="bg-inverse" fixedTop={true} inverse={true} >
		      <Navbar.Header>
				      <Navbar.Brand>
				        <a href="#">React-Bootstrap</a>
				      </Navbar.Brand>
		      		<Navbar.Toggle className="navbar-toggler-icon" />
		    	</Navbar.Header>

					<Navbar.Collapse>
						<Nav>
							{NavItems}
						</Nav>
						<form className="form-inline my-2 my-lg-0 pull-right">
							<input className="form-control mr-sm-2" type="text" placeholder="Search" />
							<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
					</form>
					</Navbar.Collapse>

			</Navbar>
    );
  }
}

NavList.propTypes = {
  projects: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default NavList;