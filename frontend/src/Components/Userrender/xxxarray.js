import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './transition.css';

class UserRender extends Component {
  render() {
    
    const avatarUser = <div className='avatar'><ReactCSSTransitionGroup transitionName='user' transitionAppear={true} transitionEnter = {false} transitionAppearTimeout={500} transitionLeave={false}><img src={this.props.user} alt=''/></ReactCSSTransitionGroup></div>

    //const allAnswers = this.props.text.map((item, index) => (
    //  <p key = {index} id = {index} nxt = {item.nxt} className = {this.props.clickable ? 'button' : ''} onClick = {() => this.props.clickable ? this.props.clickFunction(index) : ''}> {item.answer} </p>));
  return (
  <div>
    <div className='chatitem user'>{ avatarUser }
    <div className='msg'>
    <ReactCSSTransitionGroup
            transitionName='user'
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

export default UserRender;