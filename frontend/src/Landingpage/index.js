import React, { Component } from 'react';
import Projects from './Projects';
import Intro from './Intro';
import './landingpage.css';
import '../Components/Botrender/transition.css';

import api from '../api.js'

class Landingpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
      loading: true
    }
  }

  componentDidMount() {
    fetch(`${api}/landingpage`)
    .then(res => res.json())
    .then(item => {
      this.setState({itemList: item, loading: false})
    })
  }
  render() {
    return <div><Intro/><Projects/></div>
  }
}

export default Landingpage;