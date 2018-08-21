import React from 'react'

import FeedTitle from '../components/FeedTitle'
import FeedList from '../components/FeedList'
import ExpenseDetails from '../components/ExpenseDetails'
import PaymentStatusSquare from '../components/PaymentStatusSquare'
import PaymentDetails from '../components/PaymentDetails'
import { getExpensesBy, getPaymentsBy } from '../Adapter'

class PaymentFeedContainer extends React.Component {
  state = {
    fetched: false,
    data: [],
  }


  fetchPayments = () => {
    this.props.householdId && !this.state.fetched &&
      getPaymentsBy(this.props.householdId)
        .then((payments) => this.setState({
          fetched: true,
          data: payments
        }))
  }

  componentDidUpdate() {
    this.fetchPayments()
  }




  render() {

    const newArr = this.state.data.filter(data => data.payment_data.paid)

    const posts = newArr.map( payment => <PaymentDetails data={payment.payment_data}/>)

    return (
      <React.Fragment>
        <div className="one wide column"></div>
        <div className="feed six wide column">
          <h3>{this.props.header}</h3>
          {posts}
        </div>
        <div className="one wide column"></div>
      </React.Fragment>
    )
  }
}


export default PaymentFeedContainer
