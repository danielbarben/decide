import React, { Component } from 'react';
import './landingpage.css';

class Footer extends Component {

  render() {
    const content = <div className='footer'><hr/>Programmierung: <a href="daniel.barben@tamedia.ch">Daniel Barben</a> / Tamedia 2018</div>
    return <div>{content}</div>
  }
}

export default Footer;