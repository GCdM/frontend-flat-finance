import React from 'react'


import PaymentFeedContainer from './PaymentFeedContainer'
import FeedContainer from './FeedContainer'
import Summary from '../components/Summary'
import { getHouseholdBy } from '../Adapter'

//Should receive props: user
class MainContentContainer extends React.Component {

  state = {
    household: {
      id: 0,
      name: "",
    },
    members: [],
  }

  componentDidMount() {
    getHouseholdBy(this.props.user.household_id)
      .then( info => {
        this.setState( info.household_data )
      })
  }

  render() {
    const { household, members } = this.state

    return (
      <React.Fragment>
        <div className="row">
          <Summary
            household={household}
            members={members}
          />
        </div>
        <div className="feed-container row">
          <FeedContainer header="Expenses" householdId={this.state.household.id} />
          <PaymentFeedContainer header="Payments" householdId={this.state.household.id} />
        </div>
      </React.Fragment>
    )
  }
}


export default MainContentContainer
