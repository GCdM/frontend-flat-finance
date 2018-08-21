import React from 'react'


import PaymentFeedContainer from './PaymentFeedContainer'
import FeedContainer from './FeedContainer'
import Summary from '../components/Summary'
import { getHouseholdBy } from '../Adapter'

//Should receive props: user
class MainContentContainer extends React.Component {

  state = {
    household: {},
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
        <Summary
          title={household.name}
          members={members}
        />
      <div className='row'>
        <FeedContainer header="Expenses" householdId={this.state.household.id} />
        <PaymentFeedContainer header="Payments" householdId={this.state.household.id} />
      </div>
    </React.Fragment>
    )
  }
}


export default MainContentContainer
