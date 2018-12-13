import React, { Component } from 'react';
import './App.css';
import ChatitemManage from '../Components/Chatitemmanage';
import Conclusion from '../Components/Conclusion';
import Spinner from '../Components/Spinner';
import Statistics from '../Components/Statistics';
import Again from '../Components/Again';
import Sanja from './sanja.png';
import Du from './du.png';
import Wahl from './wahl.png';

const api = 'https://cors-anywhere.herokuapp.com/http://newsdesign.ch:8000'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter:2,
      bot: Sanja,
      itemList: []
    }
  }
  //scroll to bottom
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  //Ask next question
  nextQuestion = (i) => {
    // define new Item
    let newItem = this.state.itemList;
    newItem.push(<ChatitemManage key={this.state.counter} questionId={i} clickable={true} next={this.nextQuestion} conclusion={this.conclusion}scrollToBottm={this.scrollToBottom} bot={Sanja} user={Du}/>);
    // counter for react-key
    let newCounter = this.state.counter;
    newCounter++;
    //add new Chatitem to state
    this.setState({
      //user: Du,
      itemList: newItem,
      counter: newCounter
    })
  }
  //Get conclusion
  conclusion = (i) => {
    let newItem = this.state.itemList;
    newItem.push(<Conclusion key={this.state.counter} id={i} bot={this.state.bot}/>)
    newItem.push(<Statistics key={this.state.counter+1} id={this.props.match.params.id} bot={this.state.bot}/>)
    newItem.push(<Again key={this.state.counter+2} id={i} user={Du}/>)
    let newCounter = this.state.counter;
    newCounter +=3;
    
    this.setState({
      itemList: newItem,
      counter: newCounter
    })
    
  }
  
  componentDidMount() {
    //fetch first question ID for choosen Project
    fetch(`${api}/projects/firstquestion/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(item => {
      let firstItem = [];
      firstItem.push(<ChatitemManage key={1} questionId={item.id} clickable={true} next={this.nextQuestion} conclusion={this.conclusion} scrollToBottm={this.scrollToBottom} bot={Sanja} user={Wahl}/>);
      this.setState({
        itemList:firstItem,
        loading:false
      })
    })
  }

  componentDidUpdate() {
    setTimeout(this.scrollToBottom, 1000)
  }

  render() {
    // return spinner until first question is fetched
    if (this.state.loading) {
      return (
      <div>
        <Spinner/>
        <div style={{ float:"left", clear: "both"}} ref={(el) => { this.messagesEnd = el; }}/>
      </div>)
      } else {
        return (
        <div>
        {this.state.itemList.map((item, index) => (item))}
        <div style={{ float:"left", clear: "both"}} ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>
      )
    } 
  }
}

export default App;