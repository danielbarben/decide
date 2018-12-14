//Functional component
//Renders the conclusion
//Takes as Props:

import React, { Component } from 'react';
import Spinner from '../Spinner'
import Userrender from '../Userrender'

class Conclusion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    if (!this.state.text) {
      return (
        <Spinner />
      )} else {return <Userrender user={this.props.user} text={'hello'}/>} 
  }
}

export default Conclusion;