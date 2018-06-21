import React, { Component } from 'react';
import './App.css';
import PageAccueil from './PageAccueil.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PageInscription from './PageInscription.js';
import BuyTickets from './buytickets';

class App extends Component {

  state = {
    ticketBuy: true,
  // title : ['ACHETER UN BILLET', 'VOTRE COMMANDE','CONFIRMATION ACHAT']
  }

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PageAccueil} />
          <Route path="/PageInscription" component={PageInscription} />
          <Route path="/AchatBillets" render={() => <BuyTickets state={!this.state.ticketBuy} />} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
