import React from 'react'

const PaymentStatusSquare = (props) => <span style = {{border: "1px solid black"}}>{ props.member} {props.checkMemberPaid(props.member)} </span>

export default PaymentStatusSquare
