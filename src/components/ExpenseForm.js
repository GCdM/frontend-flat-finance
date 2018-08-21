import React from 'react'

import { createExpense } from '../Adapter'

class ExpenseForm extends React.Component {
  state = {
    purchase: "",
    description: "",
    amount: 0.00,
    date: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const info = {...this.state, user_id: this.props.userId}
    console.log(this.props.userId)
    console.log(info)
    createExpense(info)
      .then(console.log)
  }

  render() {
    return (
      <div className="expense-form">
        <h4>New Expense</h4>
        <form onSubmit={this.handleSubmit} >
          <label htmlFor="date" >Date of Expense</label>
          <input type="date" name="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <br></br>
          <label htmlFor="purchase" >Purchase</label>
          <input type="text" name="purchase"
            value={this.state.purchase}
            onChange={this.handleChange}
          />
          <br></br>
          <label htmlFor="description" >Description</label>
          <input type="text" name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <br></br>
          <label htmlFor="amount" >Amount (£)</label>
          <input type="number" name="amount" step="any"
            value={this.state.amount}
            onChange={this.handleChange}
          />
          <br></br>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default ExpenseForm
