import React from 'react'
//render two feeds and build payment details
import PaymentStatusSquare from './PaymentStatusSquare'
import { getExpensePaymentsBy } from '../Adapter'

class ExpenseDetails extends React.Component {

  state = {
    payments: [],
  }


  componentDidMount() {
    getExpensePaymentsBy(this.props.expense.id)
      .then( payments => {
        this.setState({
          payments
        })
      })
  }

  defaultProps = {
    expense : {
    "id": 1,
    "user_id": 1,
    "date": "-4712-01-01T00:00:00.000Z",
    "purchase": "Hoover",
    "description": "Replacement hoover, since you guys broke Henry",
    "amount": 230.0,
    "created_at": "2018-08-20T10:41:05.628Z",
    "updated_at": "2018-08-20T10:41:05.628Z"
  },
  }

  render() {
    return (

      <React.Fragment>
        <br></br>
        <div style = {{border: "1px solid black"}}>
          <h5>{this.props.expense.user_id} </h5>
          <h4> {this.props.expense.purchase} for £{this.props.expense.amount}</h4>
          <br></br>
          <h4>{this.props.expense.description}</h4>
          <br></br>

       </div>

      </React.Fragment>
    )
  }
}

export default ExpenseDetails
