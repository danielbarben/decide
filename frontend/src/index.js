import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Header from './Landingpage/Header.js';
import Footer from './Landingpage/Footer.js';
import App from './App';
import Landingpage from './Landingpage';

ReactDOM.render(
  <HashRouter basename='/'>
  <div>
    <Header/>
    <Switch>
      <Route exact path="/" component = { Landingpage } />
      <Route exact path="/:id" component = { App } />
    </Switch>
    <Footer/>
    </div>
  </HashRouter>
, document.getElementById('root'));