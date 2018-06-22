import React from 'react'
import '../style/Map.css'
import {Link} from 'react-router-dom'


class Map extends React.Component {

    render() {
        return (
            <div className='Map'>
                <div style={{display: this.props.state.open2 === true ? 'block' : 'none'}} className='notif2'><p>Nous y
                    voila ! Découvre quelques anecdotes concernant NADAR. C’est parti !</p><br/><Link to='/Erreur2'>
                    <button onClick={() => this.props.MouseOff2()} className='enter2'>ENTER</button>
                </Link></div>
                <div style={{display: this.props.state.open === true ? 'block' : 'none'}} className='notif'><p>Dans le
                    studio de NADAR, 7 erreurs se sont nichées ! Seras-tu capable de les retrouver ? À toi de jouer
                    !</p><br/><Link to='/Erreur'>
                    <button onClick={() => this.props.MouseOff()} className='enter'>ENTER</button>
                </Link></div>
                <button onMouseOver={() => this.props.MouseEnter()} className={this.props.state.correct.length === 7 ? `unbis` : 'un'}></button>
                <button onMouseOver={() => this.props.MouseEnter2()} className={this.props.state.fini === true ? 'deuxbis' : 'deux'}></button>
            </div>
        )
    }
}

export default Map
