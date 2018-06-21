import React from 'react'
import '../style/Map.css'
import {Link} from 'react-router-dom'

class Map extends React.Component {

    state={
        open: false
    }

    MouseEnter = () =>
    this.setState({open: true})
    MouseOut= () =>
    this.setState({open: false})


    render () {
        return (
<div className='Map'>
<div style={{display: this.state.open === true ? 'block' : 'none'}} className='notif'> <p>Et tu pres pour decouvrir les 7 erreurs dans la photo de Nadar?Click sur le nr 1 pour commencer.</p><br/><button className='enter'>ENTER</button></div>
<button onMouseOver ={() => this.MouseEnter()} onMouseLeave={()=>this.MouseOut()} className='un'></button>
<button className='deux'></button>
</div>
        )
    }
}
export default Map