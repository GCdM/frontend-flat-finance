import React from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

//render two feeds and build payment details
import PaymentStatusSquare from './PaymentStatusSquare'
import { getExpensePaymentsBy, postPaymentBy } from '../Adapter'

class ExpenseDetails extends React.Component {

  state = {
    payments: [],
  }

  handlePayment = (id) => {
    const postPromise = postPaymentBy(id)
    postPromise.then(payments => {
      this.setState({
        payments
      })

      // getExpensePaymentsBy(this.props.expense.id).then(payments => {
      // this.setState({
      //   payments
      // })
    })
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
        <Accordion.Title active={this.props.activeIndex === this.props.index} index={this.props.index} onClick={this.props.handleClick}>
          <i className="dropdown icon"></i>
          {this.props.expense.user}
          <br></br>
          {this.props.expense.purchase} for {this.props.expense.amount}
        </Accordion.Title>
        <Accordion.Content active={this.props.activeIndex === this.props.index}>
          <p>{this.props.expense.description}</p>
          <br></br>
          {this.state.payments.map( payment => < PaymentStatusSquare payment={payment} handleClick={this.handlePayment} />)}
        </Accordion.Content>
      </React.Fragment>
    )
  }
}

export default ExpenseDetails
