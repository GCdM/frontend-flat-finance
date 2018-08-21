import React from 'react'

const PaymentDetails = (props) => {
  return (
    <React.Fragment >
      <br></br>
      <div style = {{border: "1px solid black"}}>
       {props.data.user} paid {props.data.amount} on {props.data.updated_at} for {props.data.expense_purchase} 
      </div>
    </React.Fragment>
  )
}

export default PaymentDetails
