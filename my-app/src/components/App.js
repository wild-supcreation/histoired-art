import React, { Component } from 'react'
import './App.css'
import PageAccueil from './PageAccueil.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PageInscription from './PageInscription.js'
import BuyTickets from './buytickets'
import QrCode from './qrCode.js'
class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PageAccueil} />
          <Route path="/PageInscription" component={PageInscription} />
          <Route path="/AchatBillets" component={BuyTickets} />
          <Route path="/QR" component={QrCode} />
        </Switch>
      </BrowserRouter>
    )

  }
}

export default App
