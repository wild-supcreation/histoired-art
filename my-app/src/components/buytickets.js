import React, {Component } from 'react'
import BuyTop from './buytop.js'
import BuyDown from './buydown.js';


class BuyTickets extends Component {


  state = {
    ticketBuy: false,
    title: 'VOTRE COMMANDE'
    // title : ['ACHETER UN BILLET', 'VOTRE COMMANDE','CONFIRMATION ACHAT']
  }

  changeTicket = () => {
    this.setState({ ticketBuy: true })
  }
  render() {

    if (this.state.ticketBuy)
      this.setState({ title: 'ACHETER UN BILLET' })

    return (
    <div>
      <BuyTop buy={this.state.ticketBuy} title={this.state.title} />
      <BuyDown buy={this.state.ticketBuy} />
    </div>
    )

  }
}

export default BuyTickets