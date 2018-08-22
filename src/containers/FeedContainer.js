import React from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

import FeedTitle from '../components/FeedTitle'
import FeedList from '../components/FeedList'
import ExpenseDetails from '../components/ExpenseDetails'
import PaymentStatusSquare from '../components/PaymentStatusSquare'
import PaymentDetails from '../components/PaymentDetails'
import { getExpensesBy } from '../Adapter'

class FeedContainer extends React.Component {
  state = {
    fetched: false,
    data: [],
    activeIndex: -1,
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

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  componentDidUpdate() {
    this.fetchExpenses()
  }

  render() {
    const feedList = this.state.data.map( (data,index) => <ExpenseDetails activeIndex={this.state.activeIndex} index={index} expense={data.expense_data} handleClick={this.handleClick}/> )

    return (
      <React.Fragment>
        <div className="one wide column"></div>
        <div className="feed six wide column">
          <h3>{this.props.header}</h3>
          <Accordion styled>
            {feedList}
          </Accordion>
        </div>
        <div className="one wide column"></div>
      </React.Fragment>
    )
  }
}


export default FeedContainer
