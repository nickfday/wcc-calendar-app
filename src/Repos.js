import React, { Component } from 'react';

// Repos.js
import { Link } from 'react-router'
// ...
export default React.createClass({
  render() {
    return (
      <div>
      <br/>
      <br/>
      <br/>
      <br/>
        <h2>Repos</h2>

        {/* add some links */}
        <ul>
          <li><Link to="/repos/reactjs/react-router">React Router</Link></li>
          <li><Link to="/repos/facebook/react">React</Link></li>
        </ul>
         {this.props.children}

      </div>
    )
  }
})
