//Functional component
//Renders the conclusion
//Takes as Props:

import React, { Component } from 'react';
//import '../Chatitemrender/transition.css';
import Spinner from '../Spinner'
import Botrender from '../Botrender'
const api = 'https://cors-anywhere.herokuapp.com/http://newsdesign.ch:8000'

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  componentDidMount() {
    fetch(`${api}/statistics/${this.props.id}`)
    .then(res => res.json())
    .then(item => {
      let beautify = item.map((item, index) => <p className='conclusion' key={index}>{item.count}% {item.item}</p>);
      this.setState({
        text: beautify
      })
    })
  } 

  render() {
    //console.log(this.state.text)
    const zwischentext = <p>Das sind die anderen</p>;
    if (!this.state.text) {
      return (
      <Spinner />
      )
    } else {
      return (
      <div>
        <Botrender bot={this.props.bot} text={zwischentext}/>
        <Botrender bot={this.props.bot} text={this.state.text}/>
        </div>)
    }
  }
}

export default Statistics;


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