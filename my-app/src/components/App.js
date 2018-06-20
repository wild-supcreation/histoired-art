import React, { Component } from 'react';
import './App.css';
import PageAccueil from './PageAccueil.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PageInscription from './PageInscription.js';
import Map from './Map.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PageAccueil} />
          <Route path="/PageInscription" component={PageInscription} />
          <Route path="/Map" component={Map} />
        </Switch>
      </BrowserRouter>
      
    )
  }
}

export default App;
