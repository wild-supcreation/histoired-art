import React, { Component } from 'react';
import './App.css';
import PageAccueil from './PageAccueil.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PageInscription from './PageInscription.js';
import BuyTickets from './buytickets';

class App extends Component {

  state = {
    ticketBuy: false
  }

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PageAccueil} />
          <Route path="/PageInscription" component={PageInscription} />
          <Route path="/AchatBillets" render={ () => <BuyTickets state={this.state}/> } />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
