import React, { Component } from 'react';
import './App.css';
import ChatitemManage from '../Chatitemmanage';
import Conclusion from '../Conclusion';
import Sanja from './sanja.png';
import Loader from 'react-loader-spinner'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //chat: [{key:1, questionId:1}],
      chat: '',
      counter:2,
      conclusion:'',
      statistics: ''
    }
  }
  //scroll to bottom
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  //Ask next question
  nextQuestion = (i) => {
    // define new Chatitem
    let newChat = this.state.chat;
    newChat.push({key:this.state.counter, questionId:i});
    // counter for react-key
    let newCounter = this.state.counter;
    newCounter++;
    //add new Chatitem to state
    this.setState({chat:newChat, counter:newCounter})
  }
  //Get conclusion
  conclusion = (i) => {
    //fetch conclusion nr. i
    fetch(`https://cors-anywhere.herokuapp.com/http://newsdesign.ch:8000/conclusions/${i}`)
    .then(res => res.json())
    .then(itemloaded => {
      this.setState({
        conclusion: itemloaded.conclusion
      });

      //=======================================================
      const body = JSON.stringify({conclusion: itemloaded.title})
      const headers = new Headers({
        'Content-Type': 'application/json'
      })
      const config = {
        headers: headers,
        method: "POST",
        body: body
      }
      fetch(`https://cors-anywhere.herokuapp.com/http://newsdesign.ch:8000/statistics`, config)

      //==========================================================
    });

    //Post conclusion
    
    // fetch statistics    
    fetch(`https://cors-anywhere.herokuapp.com/http://newsdesign.ch:8000/statistics/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(item => {
      let beautify = item.map((item, index) => <p className='conclusion' key={index}>{item.count}% {item.item}</p>);
      //console.log(beautify)
      this.setState({
        statistics: beautify
      })
    })
  }
  
  componentDidMount() {
    //fetch first question for choosen game
    fetch(`https://cors-anywhere.herokuapp.com/http://newsdesign.ch:8000/projects/firstquestion/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(item => {
      this.setState({
        chat: [{key:1, questionId:item.id}]
      })
    })
  }

  componentDidUpdate() {
    setTimeout(this.scrollToBottom, 1000)
  }

  render() {
    // return spinner until first question is fetched
    if (this.state.chat !=='') {
    return (
    <div>
      {this.state.chat.map((item, index) => (
      <ChatitemManage key={item.key} questionId={item.questionId} clickable={true} next={this.nextQuestion} conclusion={this.conclusion} scrollToBottm={this.scrollToBottom}/>))}
      <Conclusion text={this.state.conclusion} statistics={this.state.statistics} bot={Sanja}/>
      <div style={{ float:"left", clear: "both"}} ref={(el) => { this.messagesEnd = el; }}>
        </div>
    </div>
    )} else {
      return (
        <div>
          <Loader type="ThreeDots" color="#dd007A" height={80} width={80} /> 
          <div style={{ float:"left", clear: "both"}} ref={(el) => { this.messagesEnd = el; }}/>
        </div>)
        }
      }
    }

export default App;