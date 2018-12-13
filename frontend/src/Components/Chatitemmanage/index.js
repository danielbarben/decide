//Manages Components Botrender and Chatrender
//fetches question/answers
//handles click on answer

import React, { Component } from 'react';
//import Sanja from './sanja.png';
import Du from '../../App/du.png';
import Botrender from '../Botrender'
import Userrender from '../Userrender';
//import Userrender from '../Userrender/index.js';
import Spinner from '../Spinner'
const api = 'https://cors-anywhere.herokuapp.com/http://newsdesign.ch:8000'

class ChatitemManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickable: true,
      answers: '',
      question: '',
      bot: this.props.bot,
      user: this.props.user
    }
  }
  
  clickFunction = (i) => {
    //remove other answers
    this.setState({clickable:false});
    let chosenAnswer = [];
    //this.state.answers[i].props.className
    chosenAnswer.push(this.state.answers[i]);
    //component is no longer clickable
    this.setState({
      answers: chosenAnswer,
      user: Du
    });
    
    let next = this.state.answers[i].nxt;
    //is next a question or a conclusion?
    //let next = this.state.answers[0].nxt;
    if (next[0]==='q') {
      // it is a question
      this.props.next(next.slice(1))
    } else if (next[0]==='c') {
      // it is an answer
      this.props.conclusion(next.slice(1));
    }
  }

componentDidMount() {
    //fetches first question/answers -> set to state
   fetch(`${api}/questions/${this.props.questionId}`)
    .then(res => res.json())
    .then(item => {
      this.setState({
        question: <p>{item.question}</p>,
        answers: item.answers,
        //test: item.answers
      });
    });
  }


render() {
let allAnswers = '';
  if (this.state.answers) {allAnswers = this.state.answers.map((item, index) => <p key = {index} id = {index} nxt = {item.nxt} className = {this.state.clickable ? 'button' : ''} onClick = {() => this.state.clickable ? this.clickFunction(index) : ''}> {item.answer} </p>)}

  if (!this.state.answers) {
    return (<Spinner />)
  } else {
    return (
    <div>
      <Botrender bot={this.state.bot} text={this.state.question}/>
      <Userrender user={this.state.user} text={allAnswers}/>
    </div>)
    }
  }
}

export default ChatitemManage;