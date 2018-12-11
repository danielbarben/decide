import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App/App';

ReactDOM.render(
  <BrowserRouter>
  <div>
    <Switch>
      <Route exact path="/:id" component={ App } />
      </Switch>
    </div>
  </BrowserRouter>
, document.getElementById('root'));