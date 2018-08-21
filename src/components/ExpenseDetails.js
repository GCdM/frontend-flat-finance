import React from 'react'
//render two feeds and build payment details
import PaymentStatusSquare from './PaymentStatusSquare'
import { getExpensePaymentsBy, postPaymentBy } from '../Adapter'

class ExpenseDetails extends React.Component {

  state = {
    payments: [],
  }

  handlePayment = (id) => {
    console.log(id)
    postPaymentBy(id)
  }

  createPaymentSquares = () => {
    this.state.payments.map( payment => < PaymentStatusSquare payment={payment} />)
  }

  componentDidMount() {
    getExpensePaymentsBy(this.props.expense.id)
      .then( payments => {
        this.setState({
          payments
        })
      })
  }



  render() {
    return (

      <React.Fragment>
        <br></br>
        <div style = {{border: "1px solid black"}}>
          <h5>{this.props.expense.user} </h5>
          <h4> {this.props.expense.purchase} for {this.props.expense.amount}</h4>
          <br></br>
          <h4>{this.props.expense.description}</h4>
          <br></br>
          {this.state.payments.map( payment => < PaymentStatusSquare payment={payment} handleClick={this.handlePayment} />)}
       </div>

      </React.Fragment>
    )
  }
}

export default ExpenseDetails
