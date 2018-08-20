import React from 'react'

const paidStatus = (value) => {
  if (value == true){
    return "Paid"
  }else {
    "Unpaid"
  }
}
const PaymentStatusSquare = (props) => <span className = {props.payment.payment_data.paid ? "green" : "red"} style = {{border: "1px solid black"}}> {`${props.payment.payment_data.user}`}  </span>

export default PaymentStatusSquare
