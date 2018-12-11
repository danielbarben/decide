//Functional component
//Renders the conclusion
//Takes as Props:

import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../Chatitemrender/transition.css';


class Conclusion extends Component {
  
  render() {
    console.log(this.props.text)
    const avatarBot = <div className='avatar'><ReactCSSTransitionGroup transitionName='bot' transitionAppear={true} transitionAppearTimeout={500} transitionEnter={false} transitionLeave={false}><img src={this.props.bot} alt=''/></ReactCSSTransitionGroup></div>

    if (this.props.text) {

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
            <p>{this.props.text}</p>
            <p>{this.props.statistics}</p>
            
            
          </ReactCSSTransitionGroup>
          </div>
        </div>
      </div>
      )} else {return <p/>} 
    //)
  }
}

export default Conclusion;