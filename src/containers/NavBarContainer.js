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
          <h1 className="current-user">{username}</h1>
        </div>
        <div className="three wide column debit-preview">
          <h4 className="debit">Debit</h4>
          <h3 className="debit-value">{debit}</h3>
        </div>
        <div className="three wide column credit-preview">
          <h4 className="credit">Credit</h4>
          <h3 className="credit-value">{credit}</h3>
        </div>
      </div>
    )
  }
}


export default NavBarContainer
