// modules/Repo.js
import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
      <br/>
      <br/>
      <br/>
      <br/>
        <h2>{this.props.params.repoName}</h2>
      </div>
    )
  }
})