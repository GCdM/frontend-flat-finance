import React from 'react'

const PaymentDetails = (props) => {
  return (
    <React.Fragment >
      <br></br>
      <div style = {{border: "1px solid black"}}>
       {props.data.user} paid {props.data.amount} on {props.data.created_at} for Expense_id{props.data.expense_id}
      </div>
    </React.Fragment>
  )
}

export default PaymentDetails
