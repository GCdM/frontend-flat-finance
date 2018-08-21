import React from 'react'

import FeedTitle from '../components/FeedTitle'
import FeedList from '../components/FeedList'
import ExpenseDetails from '../components/ExpenseDetails'
import PaymentStatusSquare from '../components/PaymentStatusSquare'
import PaymentDetails from '../components/PaymentDetails'
import { getExpensesBy } from '../Adapter'

class FeedContainer extends React.Component {
  state = {
    fetched: false,
    data: []
  }

  checkMemberPaid = (name) =>{
    return this.state.dummyData.payments[name]
      }

  fetchExpenses = () => {
    if (this.props.householdId && !this.state.fetched) {
      getExpensesBy(this.props.householdId)
        .then((expenses) =>
          this.setState({
            data: expenses,
            fetched: true,
        }))
    }
  }

  componentDidUpdate() {
    this.fetchExpenses()
  }

  render() {
    const feedList = this.state.data.map( data => <ExpenseDetails expense={data.expense_data} /> )

    return (
      <div className="feed col">
        <h3>{this.props.header}</h3>
        {feedList}
      </div>
    )
  }
}


export default FeedContainer
