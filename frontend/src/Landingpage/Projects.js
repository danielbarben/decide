import React, { Component } from 'react';
import Spinner from '../Components/Spinner';
import './landingpage.css';
import Alexandra from '../img/alexandra.png';
import Georg from '../img/georg.png';
import Herbert from '../img/herbert.png';
import John from '../img/john.png';
import Sanja from '../img/sanja.png';

import { Link } from 'react-router-dom';
import api from '../api.js'
let botPic = {'Alexandra': Alexandra, 'Georg': Georg, 'Herbert': Herbert, 'John': John, 'Sanja':Sanja}

class Projects extends Component {
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
      this.setState({itemList: item, loading: false})
    })
  }

  render() {
    if (this.state.loading) {
      return <Spinner/>
      } else {
        return this.state.itemList.map((item, index) => {
          const avatar = <div className='avatar'><img src={botPic[item.bot]} alt=''/></div>;
          return <div className='chatitem bot' key={index}><div className='chatitem bot'>{avatar}<Link to={'/'+item.id} className='droplet'><p>{item.description}</p><p className='autor'>Text: {item.autor}</p></Link></div></div>;
        })
    }
  }
}

export default Projects;