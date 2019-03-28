import React, { Component } from 'react';
import './landingpage.css';

class Intro extends Component {

  render() {
    const content = <div className='intro'>Bei welcher Entscheidung dürfen wir Dir helfen? Bitte triff eine Wahl:</div>
    return <div>{content}</div>
  }
}

export default Intro;