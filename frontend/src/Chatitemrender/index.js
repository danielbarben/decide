//Functional component
//Renders the chat
//Takes as Props: - picture of the bot, question, answers as objects (name, next, conclusion)   

import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './transition.css';
import du from './du.png';

class ChatitemRender extends Component {
  render() {
    //Pictures of user and avatar as div, including transitions
    const avatarUser = <div className='avatar'><ReactCSSTransitionGroup transitionName='user' transitionAppear={true} transitionEnter = {false} transitionAppearTimeout={500} transitionLeave={false}><img src={du} alt=''/></ReactCSSTransitionGroup></div>
    const avatarBot = <div className='avatar'><ReactCSSTransitionGroup transitionName='bot' transitionAppear={true} transitionAppearTimeout={500} transitionEnter={false} transitionLeave={false}><img src={this.props.bot} alt=''/></ReactCSSTransitionGroup></div>
    
  return (
  <div>
    <div className='chatitem bot'>{avatarBot}
    <div className='msg'>
    <ReactCSSTransitionGroup
            transitionName="bot"
            transitionAppear={true} 
            transitionAppearTimeout={500}
            transitionLeave={false}
            transitionEnter={false}>
            <p>{this.props.question}</p>
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
            {this.props.answers}
        </ReactCSSTransitionGroup>
        </div>
      </div>
    </div>
    )
  }
}

export default ChatitemRender;