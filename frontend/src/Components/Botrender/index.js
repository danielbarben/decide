import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './transition.css';

class BotRender extends Component {
  render() {
    
    const avatarBot = <div className='avatar'><ReactCSSTransitionGroup transitionName='bot' transitionAppear={true} transitionAppearTimeout={500} transitionEnter={false} transitionLeave={false}><img src={this.props.bot} alt=''/></ReactCSSTransitionGroup></div>
    
  return (
  <div>
    <div className='chatitem bot'>{ avatarBot }
    <div className='msg'>
    <ReactCSSTransitionGroup
            transitionName="bot"
            transitionAppear={true} 
            transitionAppearTimeout={500}
            transitionLeave={false}
            transitionEnter={false}>
            {this.props.text}
        </ReactCSSTransitionGroup>
        </div>
      </div>
    </div>
    )
  }
}

export default BotRender;