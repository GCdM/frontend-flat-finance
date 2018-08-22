import React from 'react'

const PaymentDetails = (props) => {
  return (
    <React.Fragment >
      <br></br>
      <div className="payment-detail">
       <b>{props.data.user}</b> paid {props.data.amount} on {props.data.updated_at} for <i>{props.data.expense_purchase}</i>
       <hr></hr>
      </div>
    </React.Fragment>
  )
}

export default PaymentDetails
