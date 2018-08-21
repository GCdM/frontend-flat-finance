import React from 'react'

import FeedTitle from '../components/FeedTitle'
import FeedList from '../components/FeedList'
import ExpenseDetails from '../components/ExpenseDetails'
import PaymentStatusSquare from '../components/PaymentStatusSquare'
import PaymentDetails from '../components/PaymentDetails'
import { getExpensesBy } from '../Adapter'

class FeedContainer extends React.Component {
  state = {
    data: []
  }




  checkMemberPaid = (name) =>{
    return this.state.dummyData.payments[name]
      }

  fetchExpenses = () => {
    this.props.householdId && this.state.data.length === 0 &&
      getExpensesBy(this.props.householdId)
        .then((expenses) =>
          this.setState({
            data: expenses
        }))
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
