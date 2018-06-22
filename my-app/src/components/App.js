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
import Map from './Map.js'
import Erreur from './Erreur.js'
import Erreur2 from './Erreur2';
import "../../node_modules/video-react/dist/video-react.css";

class App extends Component {
    constructor() {
        super()
    }

    state = {
        pageSwitch: false,
        open: false,
        open2: false,
        correct: [],
        fini: false
    };

    closePageAccueil = () => setTimeout(() => {
        this.setState({pageSwitch: true})

    }, 3000);

    MouseEnter = () =>
        this.setState({open: true});

    MouseOff = () =>
        this.setState({open: false});
    MouseEnter2 = () =>
        this.setState({open2: true});

    MouseOff2 = () =>
        this.setState({open2: false, fini: true});


    correctPush = {
        correctPush1: () => {
            if (!this.state.correct.includes(1)) return this.setState({correct: [...this.state.correct, 1]})
        },
        correctPush2: () => {
            if (!this.state.correct.includes(2)) return this.setState({correct: [...this.state.correct, 2]})
        },
        correctPush3: () => {
            if (!this.state.correct.includes(3)) return this.setState({correct: [...this.state.correct, 3]})
        },
        correctPush4: () => {
            if (!this.state.correct.includes(4)) return this.setState({correct: [...this.state.correct, 4]})
        },
        correctPush5: () => {
            if (!this.state.correct.includes(5)) return this.setState({correct: [...this.state.correct, 5]})
        },
        correctPush6: () => {
            if (!this.state.correct.includes(6)) return this.setState({correct: [...this.state.correct, 6]})
        },
        correctPush7: () => {
            if (!this.state.correct.includes(7)) return this.setState({correct: [...this.state.correct, 7]})
        }
    }


    render() {
        if (this.state.pageSwitch === false) {
            this.closePageAccueil();
            return (
                <div>
                    <PageAccueil closePageAccueil={this.closePageAccueil}/>
                </div>
            )
        } else {
            return (
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={PageInscription}/>
                        <Route path="/Map" render={() => <Map state={this.state} MouseEnter={this.MouseEnter} MouseOff={this.MouseOff} MouseEnter2={this.MouseEnter2} MouseOff2={this.MouseOff2}/>}/>
                        <Route path="/Erreur" render={() => <Erreur state={this.state} correctPush={this.correctPush}/>}/>
                        <Route path="/Erreur2" render={() => <Erreur2/>}/>
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
}

export default App;
