import React from 'react'
import FeedContainer from './FeedContainer'
import Adapter from '../Adapter'
import Summary from '../components/Summary'
class MainContentContainer extends React.Component {



  state = {
    household: { id: 1, name: "Fun House" },
    household: {},
    members: [],
  }

  // const getExpenses = () => {
  //   return fetch(baseURL + `expenses`)
  //     .then( resp => resp.json() )
  // }//SHOULD BE DEFINED IN ADAPTER BUT JUST GETTING TO WORK



  componentDidMount(){
    // getExpenses()
    //   .then(data => console.table(data))
    //   .then()
    //defined in the adapter.

  }
  render() {
    const { household, member_ids } = this.state

    return (
      <React.Fragment>
        <Summary
          title={household.name}
          info ={this.state.members}

        />

        <FeedContainer/>
      </React.Fragment>
    )
  }
}


export default MainContentContainer
