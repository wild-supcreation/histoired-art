import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import PageInscription from '../component_pages/PageInscription'
import PageAccueil from '../component_pages/PageAccueil';
import CreateAvatar from '../component_pages/CreateAvatar';
import CreateAvatarFiltre from '../component_pages/CreateAvatarFiltre';
import PartageAvatar from '../component_pages/PartageAvatar';
import OnBoarding from '../component_pages/OnBoarding';
import ActiverNotif from '../component_pages/ActiverNotif';
import Avantage from '../component_pages/Avantage';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={PageAccueil}/>
                   <Route path="/PageInscription" component={PageInscription}/>
                    <Route path="/CreateAvatar" component={CreateAvatar}/>
                    <Route path="/CreateAvatarFiltre" component={CreateAvatarFiltre}/>
                    <Route path="/ActiverNotif" component={ActiverNotif}/>
                    <Route path="/PartageAvatar" component={PartageAvatar}/>
                    <Route path="/Avantage" component={Avantage}/>
                    <Route path="/OnBoarding" component={OnBoarding}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
