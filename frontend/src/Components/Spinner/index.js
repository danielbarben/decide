import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

class Spinner extends Component {
  render() {
    return (<Loader type='ThreeDots' color='#dd007A' height={40} width={40} />)
  }
}

export default Spinner;
