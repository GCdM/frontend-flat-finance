import React from 'react'

import SummaryTitle from '../components/SummaryTitle'
import SummaryDetails from '../components/SummaryDetails'

class SummaryContainer extends React.Component {



  render() {
    return (
      <div className="row">
        <SummaryTitle title="HouseHold Name"/>
        <SummaryDetails />
      </div>
    )
  }
}


export default SummaryContainer
