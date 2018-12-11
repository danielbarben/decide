import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './transition.css';
import du from './du.png';

class Render_chat extends Component {
  render() {
    const avatarUser = <div className='avatar'><ReactCSSTransitionGroup transitionName='user' transitionAppear={true} transitionEnter = {false} transitionAppearTimeout={500} transitionLeave={false}><img src={du} alt=''/></ReactCSSTransitionGroup></div>
    const avatarBot = <div className='avatar'><ReactCSSTransitionGroup transitionName='bot' transitionAppear={true} transitionAppearTimeout={500} transitionEnter={false} transitionLeave={false}><img src={this.props.bot} alt=''/></ReactCSSTransitionGroup></div>
    const allAnswers = this.props.answers.map((item, index) => (
      <p key = {index} id = {index} nxt = {item.nxt} con = {item.con} className = {this.props.clickable ? 'button' : ''} onClick = {() => this.props.clickable ?this.props.clickFunction(index) : ''}> {item.answer} </p>));

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
            {allAnswers}
        </ReactCSSTransitionGroup>
        </div>
      </div>
    </div>
    )
  }
}

export default Render_chat;