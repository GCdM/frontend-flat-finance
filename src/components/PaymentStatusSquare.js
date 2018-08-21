import React from 'react'

const PaymentStatusSquare = (props) => <span onClick={() => props.handleClick(props.payment.payment_data.id)} className = {props.payment.payment_data.paid ? "green" : "red"} style = {{border: "1px solid black"}} > {`${props.payment.payment_data.user}`}   </span>

export default PaymentStatusSquare
