import React from 'react'

import FeedTitle from '../components/FeedTitle'
import FeedList from '../components/FeedList'
import ExpenseDetails from '../components/ExpenseDetails'
import PaymentStatusSquare from '../components/PaymentStatusSquare'
import PaymentDetails from '../components/PaymentDetails'

const PLACEHOLDER = "Whatever"

class FeedContainer extends React.Component {
  state = {
    dummyData: {
      username: "Louis",
      date: "20/12/13 10pm",
      purchase: "Milk",
      note: "I AM A B0ss, cos i got  teh Milk",
      amount:"30",
      members:["Allegra","Jigar","Gabriel","Hugo","Lucy","Marju","Louis"],
      payments: {"Allegra" :"paid",
                  "Jigar" : "unpaid",
                  "Gabriel" :"unpaid",
                  "Hugo":"paid",
                  "Lucy":"unpaid",
                  "Marju":"paid",
                  "Louis":"unpaid",
                }

      },
      examplePayment: {
        payee:"Jigar",
        recipient:"Louis",
        amount:"£10",
        date: "21/4/2230 10:43pm"
      }

  }


  makeSpan =  (input) =>   <h1>{input}</h1>


paymentSquares = (array) => {
  return   this.state.dummyData.members.map ((member) => <PaymentStatusSquare data={this.state.dummyData.payments} checkMemberPaid={this.checkMemberPaid} member={member}/>)
    }

checkMemberPaid = (name) =>{
  return this.state.dummyData.payments[name]
    }



  render() {
    return (
      <React.Fragment>
        <FeedTitle title={PLACEHOLDER}/>
        <FeedList list={PLACEHOLDER}/>
        <ExpenseDetails data= {this.state.dummyData} paymentSquares={this.paymentSquares}/>
        <PaymentDetails data= {this.state.examplePayment}/>

      </React.Fragment>
    )
  }
}


export default FeedContainer
