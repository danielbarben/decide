//Functional component
//Renders the conclusion
//Takes as Props:

import React, { Component } from 'react';
//import '../Chatitemrender/transition.css';
import Spinner from '../Spinner'
import Userrender from '../Userrender'
const api = 'https://cors-anywhere.herokuapp.com/http://newsdesign.ch:8000'

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


 /*
        <div>
          <div className='chatitem bot'>{avatarBot}
          <div className='msg'>
          <ReactCSSTransitionGroup
            transitionName="bot"
            transitionAppear={true} 
            transitionAppearTimeout={500}
            transitionLeave={false}
            transitionEnter={false}>
            <p>{this.props.text}</p>
            <p>Das sind die anderen:</p>
            {this.props.statistics}
          </ReactCSSTransitionGroup>
          </div>
        </div>
        <div className='chatitem user'>{avatarUser}
        <div className='msg'>
          <ReactCSSTransitionGroup
            transitionName="user"
            transitionAppear={true} 
            transitionLeave={true}
            transitionAppearTimeout={500}
            transitionLeaveTimeout={0}
            transitionEnter={false}>
            <p><Twitter twitterText={this.props.twitterText}/></p>
            <p><a onClick={'http://www.newsdesign.ch'}> Noch einmal</a></p>
        </ReactCSSTransitionGroup>
        </div>
      </div>
      </div>*/