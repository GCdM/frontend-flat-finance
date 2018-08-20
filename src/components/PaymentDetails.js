import React from 'react'

const PaymentDetails = (props) => {
  return (
    <React.Fragment >
      <br></br>
      <div style = {{border: "1px solid black"}}>
        {props.data.date}
      <br></br>
      <b>{props.data.payee} Paid {props.data.amount} to {props.data.recipient} for milk</b>
      </div>
    </React.Fragment>
  )
}

export default PaymentDetails
