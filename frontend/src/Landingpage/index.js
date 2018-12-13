import React, { Component } from 'react';
import Spinner from '../Components/Spinner';
import './landingpage.css';
import '../Components/Botrender/transition.css';
import Sanja from '../App/sanja.png';
import Herbert from '../App/herbert.png';
import Georg from '../App/georg.png';
import { Link } from 'react-router-dom';

//const api = 'https://cors-anywhere.herokuapp.com/http://newsdesign.ch:8000';
const api = 'http://newsdesign.ch:8000';

class Landingpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
      loading: true
    }
  }
  
  componentDidMount() {
    fetch(`${api}/landingpage`)
    .then(res => res.json())
    .then(item => {
      let e = item.map((item, index) => {
        let bot = Sanja;
        if (item.bot === 'Sanja') {bot = Sanja}
        if (item.bot === 'Herbert') {bot = Herbert}
        if (item.bot === 'Georg') {bot = Georg}
        const avatar = <div className='avatar'><img src={bot} alt=''/></div>;
        let newItem = <div className='chatitem bot' key={index}><div className='chatitem bot'>{avatar}<Link to={'/'+item.id} className='droplet'><p>{item.description}</p><p className='autor'>Text: {item.autor}</p></Link></div></div>;

        let newItemlist = this.state.itemList;
        newItemlist.push(newItem);
        this.setState({
          itemList: newItemlist,
        })
      })
      this.setState({loading:false})
    })
  }

  render() {

    if (this.state.loading) {
      return <Spinner/>
      } else {
        return <div>{this.state.itemList}</div>
    } 
  }
}

export default Landingpage;