import React from 'react'

import Summary from '../components/Summary'
import FeedContainer from './FeedContainer'
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
          info={members}
        />
        <FeedContainer/>
      </React.Fragment>
    )
  }
}


export default MainContentContainer
