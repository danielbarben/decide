//Manages Render_chat
//fetches question/answers
//handles click on answer

import React, { Component } from 'react';
import ChatitemRender from '../Chatitemrender';
import sanja from './sanja.png';
import Loader from 'react-loader-spinner';



class ChatitemManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickable:this.props.clickable,
      answers: '',
      //answers: [{answer:'antwort', nxt:0, con:0 },{answer:'antwort', nxt:0, con:0 },{answer:'antwort', nxt:0, con:0 }],
      question: ''
    }
  }
  clickFunction = (i) => {
    //component is no longer clickable
    this.setState({clickable:false});
    //remove other answers
    let chosenAnswer = [];
    chosenAnswer.push(this.state.answers[i]);
    let next = chosenAnswer[0].nxt;
    this.setState({answers: chosenAnswer});
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
   fetch(`https://cors-anywhere.herokuapp.com/http://newsdesign.ch:8000/questions/${this.props.questionId}`)
    .then(res => res.json())
    .then(item => {
      this.setState({
        question: item.question,
        answers: item.answers
      });
    });
  }

render() {
  //when question/answers have been fetched, map array an send to render_chat
  if (this.state.answers!=='') {
    const allAnswers = this.state.answers.map((item, index) => (
    <p key = {index} id = {index} nxt = {item.nxt} className = {this.state.clickable ? 'button' : ''} onClick = {() => this.state.clickable ?this.clickFunction(index) : ''}> {item.answer} </p>));
    return (
    <ChatitemRender bot={sanja} question={this.state.question} answers={allAnswers}/>);
  } else {
    return <Loader type="ThreeDots" color="#dd007A" height={40} width={40} />
  }
}
}

export default ChatitemManage;
