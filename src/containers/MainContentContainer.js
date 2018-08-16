import React from 'react'
import SummaryContainer from './SummaryContainer'
import FeedContainer from './FeedContainer'

class MainContentContainer extends React.Component {

  state = {
    household: { id: 1, name: "Fun House" },
    member_ids: [],
  }

  render() {
    const { household, member_ids } = this.state

    return (
      <React.Fragment>
        <SummaryContainer
          title={household.name}
        />
        <FeedContainer/>
      </React.Fragment>
    )
  }
}


export default MainContentContainer
