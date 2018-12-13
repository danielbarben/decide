//Loads Twitterfunctin and Restarts the Game
//Takes Props id of conclusion and avatar of user

import React, { Component } from 'react';
//import { BrowserRouter, Route, Redirect, Link} from 'react-router-dom';
import Userrender from '../Userrender';
import { TwitterShareButton } from 'react-twitter-embed';
import Spinner from '../Spinner';
const api = 'https://cors-anywhere.herokuapp.com/http://newsdesign.ch:8000'


class Conclusion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twitter: '',
      clickable: true,
    }
  }
  
  componentDidMount () {
    fetch(`${api}/conclusions/${this.props.id}`)
    .then(res => res.json())
    .then(itemloaded => {
      this.setState({twitter: <div><p>Resultat twittern: <TwitterShareButton
        url={'https://newsdesign.ch'}
        options={{ text: itemloaded.twittertext + 'Und Du? Probier es aus:'}}
      /></p></div>})
      })
    }

    clickFunction () {
      console.log('clicked')
      //<Redirect to='/dashboard' />
    }
  
  render() {
    if (!this.state.twitter) {return <Spinner/>}
    else {
      return <div>
        <Userrender user={this.props.user} text={this.state.twitter}/>
        <Userrender user={this.props.user} text={<p className = {this.state.clickable ? 'button' : ''} onClick = {() => this.state.clickable ? this.clickFunction() : ''}>Noch einmal spielen</p>}/>
      </div>
  }
}
}

export default Conclusion;