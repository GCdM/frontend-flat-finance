import React from 'react'

import SideMenu from '../components/SideMenu'

//Should receive props: user
class NavBarContainer extends React.Component {


  render() {
    const {
      username,
      debit,
      credit,
    } = this.props.user

    return (
      <div className="row navbar">
        <div className="six wide column">
          <SideMenu logout={this.props.logout} />
        </div>
        <div className="four wide column">
          <h1>{username}</h1>
        </div>
        <div className="three wide column debit-preview">
          <h5>Debit</h5>
          <h4>{debit}</h4>
        </div>
        <div className="three wide column credit-preview">
          <h5>Credit</h5>
          <h4>{credit}</h4>
        </div>
      </div>
    )
  }
}


export default NavBarContainer
