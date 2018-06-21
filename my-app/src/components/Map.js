import React from 'react'
import '../style/Map.css'

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
<div style={{display: this.state.open === true ? 'block' : 'none'}} className='notif'> coucou</div>
<button onMouseOver ={() => this.MouseEnter()} onMouseLeave={()=>this.MouseOut()} className='un'></button>
<button className='deux'></button>
<button className='onze'></button>
<button className='trois'></button>
<button className='dix'></button>
<button className='neuf'></button>
<button className='quatre'></button>
<button className='huit'></button>
<button className='six'></button>
<button className='cinq'></button>
<button className='sept'></button>
</div>
        )
    }
}
export default Map