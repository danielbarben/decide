import React, { Component } from 'react';
import './App.css';
import Render_chat from '../Render_chat';
import sanja from './sanja.png';

class Add_chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question : 'Loading...',
      bot: sanja,
      'clickable': true,
      //answers :'',
      answers: [
        {answer:'ja', nxt:2, con:0},{answer:'nein', nxt:2, con:0},{answer:'vielleicht', nxt:2, con:0}]
    }
  }
  removeAnswers(i) {
    console.log([this.state.answers[i]]);
    this.setState({'clickable': false});
    const chosenAnswer = [];
    chosenAnswer.push(this.state.answers[i]);
    this.setState({answers:chosenAnswer})
    //this.setState({clickable:false})
    //this.setState({answers[i]})
    //this.setState({answers: [this.state.answers[i]]});
    //this.addNew();
    //this.setState({'clickable':false})
    //this.setState({'rerender':false})
    //this.props.callbak();
  }
  
componentDidMount() {
  fetch('https://cors-anywhere.herokuapp.com/http://newsdesign.ch/questions/1')
  .then(res => res.json())
  .then(item => {
    this.setState({
      question: item.question,
      answers: item.answers
    });
  });
}

  render() {
    if (this.state.answers!=='') {
    return (
      <div>
        <Renderchat question={this.state.question} answers={this.state.answers} bot={this.state.bot} clickFunction  = {this.removeAnswers.bind(this)} clickable={this.state.clickable}/>
      </div>
    );
  }
  else {return(<p></p>)}
  }
}

export default Add_chat;
