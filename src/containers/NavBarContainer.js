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
      <div className="row">
        <div className="col">
          <SideMenu logout={this.props.logout} />
        </div>
        <div className="col">
          <h1>{username}</h1>
        </div>
        <div className="col">
          <div className="row preview">
            <div className="col debit-preview">
              <h5>Debit</h5>
              <h4>{debit}</h4>
            </div>
            <div className="col credit-preview">
              <h5>Credit</h5>
              <h4>{credit}</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default NavBarContainer
