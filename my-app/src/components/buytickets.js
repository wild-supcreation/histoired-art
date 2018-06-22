import React, { Component } from 'react'
import BuyTop from './buytop.js'
import BuyDown from './buydown.js';


class BuyTickets extends Component {


  state = {
    buy : false,
    valid : false,
    page : 'QeR'
  }

  changeTicket = () => {
    this.setState({ buy : true })
  }

  changeValid = () => {
    this.setState({ valid: true })
  }

  canceled = () => this.setState({ buy  : false , valid : false})
  

  render() {

    return (
      <div>
        <BuyTop buy={this.state.buy } valid={this.state.valid} title={this.state.title} canceled={this.canceled} />
        <BuyDown changeTicket={this.changeTicket}
         buy={this.state.buy } valid={this.state.valid}
         page={this.state.page} changeValid={this.changeValid} canceled={this.canceled} />
      </div>
    )
  }
}

export default BuyTickets