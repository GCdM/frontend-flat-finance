import React from 'react'
//render two feeds and build payment details
import PaymentStatusSquare from './PaymentStatusSquare'

class ExpenseDetails extends React.Component {

  state = {}
  render(){
  return (

    <React.Fragment>
      <br></br>
      <div style = {{border: "1px solid black"}}>
      <h5>{this.props.data.username} </h5>
      <h4> {this.props.data.purchase} for £{this.props.data.amount}</h4>
      <br></br>

      <br></br>
      {this.props.paymentSquares(this.props.data.members)}

     </div>

    </React.Fragment>
  )
  }
}

export default ExpenseDetails
