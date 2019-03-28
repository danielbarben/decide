//Functional component
//Renders the conclusion
//Takes as Props:

import React, { Component } from 'react';
import Spinner from '../Spinner'
import Botrender from '../Botrender'
import api from '../../api.js'

class Conclusion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      tmptext: 'Na, zufrieden?'
    }
  }

  componentDidMount () {
    fetch(`${api}/conclusions/${this.props.id}`)
    .then(res => res.json())
    .then(itemloaded => {
      this.setState({text:<><p>{itemloaded.conclusion}</p><p> Na, zufrieden?</p></>})
      const body = JSON.stringify({conclusion: itemloaded.title})
      const headers = new Headers({
        'Content-Type': 'application/json'
      })
      const config = {
        headers: headers,
        method: 'POST',
        body: body
      }
      fetch(`${api}/statistics`, config)
    });
  }

  render() {
    if (!this.state.text) {
      return (
        <Spinner />
      )} else {return <div><Botrender bot={this.props.bot} text={this.state.text}/></div>} 
  }
}

export default Conclusion;