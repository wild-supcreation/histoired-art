import React, { Component } from 'react';
import './App.css';
import PageAccueil from './PageAccueil.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PageInscription from './PageInscription.js';
import Map from './Map.js'
import Erreur from './Erreur.js'

class App extends Component {
  constructor(){
    super()
    
   
  

  }
    state={
    pageSwitch: true
  }

closePageAccueil = () => setTimeout(() => { this.setState = ({pageSwitch: true})
  
}, 3000) 


  

  render() {
  
    if (this.state.pageSwitch === false){
      return (
        <div>
        {() => this.closePageAccueil()}
        <PageAccueil closePageAccueil={this.closePageAccueil}/>
        </div>
      )
    } else {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PageInscription} />
          <Route path="/Map" component={Map} />
          <Route path="/Erreur" component={Erreur} />
        </Switch>
      </BrowserRouter>
      
    )}
  }
}

export default App;
