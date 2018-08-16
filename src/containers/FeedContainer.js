import React from 'react'

import FeedTitle from '../components/FeedTitle'
import FeedList from '../components/FeedList'

const PLACEHOLDER = "Whatever"

class FeedContainer extends React.Component {

  render() {
    return (
      <React.Fragment>
        <FeedTitle title={PLACEHOLDER}/>
        <FeedList list={PLACEHOLDER}/>
      </React.Fragment>
    )
  }
}


export default FeedContainer
