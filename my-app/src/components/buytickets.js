import React, { Component } from 'react'
import BuyTop from './buytop.js'
import BuyDown from './buydown.js';


class BuyTickets extends Component {


  state = {
    ticketBuy: false,
    valid: false,
    title: 'TA COMMANDE',
    page: ''
  }

  changeTicket = () => {
    this.setState({ ticketBuy: true })
  }

  changeValid = () => {
    this.setState({ valid: true })
  }

  componentDidMount() {
    if (!this.state.ticketBuy && !this.state.valid)
      this.setState({ title: 'ACHETER UN BILLET' })
    else if (this.state.ticketBuy && this.state.valid)
      this.setState({ title: 'TA COMMANDE' })
    else
      this.setState({ title: 'CONFIRMATION ACHAT' })
  }

  render() {

    return (
      <div>
        <BuyTop buy={this.state.ticketBuy} valid={this.state.valid} title={this.state.title} />
        <BuyDown changeTicket={this.changeTicket} buy={this.state.ticketBuy} valid={this.state.valid} page={this.state.page} changeValid={this.changeValid} />
      </div>
    )
  }
}

export default BuyTickets