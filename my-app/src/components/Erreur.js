import React from 'react'
import '../style/Erreur.css'
import {Link} from 'react-router-dom'

 const Erreur =(props) =>{
    
console.log(props,'hehe')

 return (
        
        <div className='error'>
<button className={props.state.correct.includes(1) ? 'error1bis' : 'error1'} onClick={() => props.correctPush.correctPush1()}></button>
<button className={props.state.correct.includes(2) ? 'error2bis' : 'error2'}onClick={() => props.correctPush.correctPush2()}></button>
<button className={props.state.correct.includes(3) ? 'error3bis' : 'error3'} onClick={() => props.correctPush.correctPush3()}></button>
<button className={props.state.correct.includes(4) ? 'error4bis' : 'error4'}onClick={() => props.correctPush.correctPush4()}></button>
<button className={props.state.correct.includes(5) ? 'error5bis' : 'error5'}onClick={() => props.correctPush.correctPush5()}></button>
<button className={props.state.correct.includes(6) ? 'error6bis' : 'error6'}onClick={() => props.correctPush.correctPush6()}></button>
<button className={props.state.correct.includes(7) ? 'error7bis' : 'error7'}onClick={() => props.correctPush.correctPush7()}></button>
<Link to='/Map'><div className='felicitation' style={{display: props.state.correct.length === 7 ? 'block' : 'none'}}>BRAVO !</div></Link> 
        </div>
    )


}
export default Erreur