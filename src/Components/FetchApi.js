import React, { Component } from 'react';
import axios from 'axios';

class FetchApi extends Component {
  constructor(props) {
    super(props);
      this.state = {
        data: [],
      }
  }

   fetchData(){
    const self = this;
    axios.get(this.props.fetchUrl)
    .then(function(response) {
      self.setState({exercises: response.data, loaded: true}, function(){
        console.log(response);
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }


  componentWillMount(){
    this.fetchData();
  }

  componentDidMount(){
    this.fetchData();
  }

render() {
  return(
  null
 );
}
}

export default FetchApi;