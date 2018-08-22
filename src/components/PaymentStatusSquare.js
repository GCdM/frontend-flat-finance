import React from 'react'

const PaymentStatusSquare = (props) => <span onClick={() => props.handleClick(props.payment.payment_data.id)} className = {props.payment.payment_data.paid ? "status-square green" : "status-square red"} ><b> {`${props.payment.payment_data.user}`} </b></span>

export default PaymentStatusSquare
