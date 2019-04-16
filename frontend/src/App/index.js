import React, { Component } from 'react';
import './App.css';
import './bot.css';
import ChatitemManage from '../Components/Chatitemmanage';
import Conclusion from '../Components/Conclusion';
import Spinner from '../Components/Spinner';
import Statistics from '../Components/Statistics';
import Again from '../Components/Again';
import Du from '../img/du.png';
import Wahl from '../img/wahl.png';
import api from '../api.js'
import Alexandra from '../img/alexandra.png';
import Georg from '../img/georg.png';
import Herbert from '../img/herbert.png';
import John from '../img/john.png';
import Sanja from '../img/sanja.png';
let botPic = {'Alexandra': Alexandra, 'Georg': Georg, 'Herbert': Herbert, 'John': John, 'Sanja':Sanja}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 2,
      project: this.props.match.params.id,
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
    newItem.push(<ChatitemManage key={this.state.counter} questionId={i} clickable={true} next={this.nextQuestion} conclusion={this.conclusion} scrollToBottm={this.scrollToBottom} bot={this.state.bot} user={Du}/>);
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
  
  // Statistik zeigen
  showStatistics = (i) => {
    let newItem = this.state.itemList;
    newItem.push(<Statistics id={this.state.project} bot={this.state.bot} user={Du}/>)
    //newItem.push(<Again startover={this.startover} key={this.state.counter+2} id={i} user={Du}/>)
    let newCounter = this.state.counter;
    newCounter +=3;
    
    this.setState({
      itemList: newItem,
      counter: newCounter
    })
  }
  
  //Get conclusion
  conclusion = (i) => {
    let newItem = this.state.itemList;
    //console.log(this.showStatistics)
    newItem.push(<Conclusion key={this.state.counter} id={i} bot={this.state.bot}/>)
    //newItem.push(<Statistics key={this.state.counter+1} id={this.state.project} bot={this.state.bot}/>)
    newItem.push(<Again startover={this.startover} showStatistics={this.showStatistics} key={this.state.counter+2} id={i} user={Du}/>)
    let newCounter = this.state.counter;
    newCounter +=3;
    
    this.setState({
      itemList: newItem,
      counter: newCounter
    })
  }
  
  componentDidMount() {
    //fetch first question ID for choosen Project
    fetch(`${api}/landingpage`)
    .then(res => res.json())
    .then(item => {      
      //let tmp = item.find( el => el.id == this.props.match.params.id);
      let tmp = item.find( el => el.id === Number(this.state.project));
      this.setState({bot: botPic[tmp.bot]})
    });
    fetch(`${api}/projects/firstquestion/${this.state.project}`)
    .then(res => res.json())
    .then(item => {
      let firstItem = [];
      firstItem.push(<ChatitemManage key={1} questionId={item.id} clickable={true} next={this.nextQuestion} conclusion={this.conclusion} scrollToBottm={this.scrollToBottom} bot={this.state.bot} user={Wahl}/>);
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