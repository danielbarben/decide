import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Header from './Landingpage/Header.js';
import Footer from './Landingpage/Footer.js';
import App from './App';
import Landingpage from './Landingpage';

ReactDOM.render(
  <BrowserRouter >
  <div>
    <Header/>
    <Switch>
      <Route exact path="/" component = { Landingpage } />
      <Route exact path="/:id" component = { App } />
    </Switch>
    <Footer/>
    </div>
  </BrowserRouter>
, document.getElementById('root'));