import React, { Component } from 'react';
import './App.css';
import PageAccueil from './PageAccueil.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PageInscription from './PageInscription.js';
import BuyTickets from './buytickets';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PageAccueil} />
          <Route path="/PageInscription" component={PageInscription} />
          <Route path="/AchatBillets" component={BuyTickets} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
