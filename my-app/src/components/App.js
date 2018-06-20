import React, { Component } from 'react';
import './App.css';
import PageAccueil from './PageAccueil.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PageAccueil} />
        </Switch>
      </BrowserRouter>
      
    )
  }
}

export default App;
