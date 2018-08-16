import React from 'react'
import NavBar from '../components/NavBar'

//Should receive props: user
class NavBarContainer extends React.Component {


  render() {
    return (
      <div className="row">
        <div className="col">
          I'm the menu
        </div>
        <div className="col">
          <h1>{this.props.user.username}</h1>
        </div>
        <div className="col">
          <div className="row preview">
            <div className="col debit-preview">
              <h5>Debit</h5>
              <h4>£0.00</h4>
            </div>
            <div className="col credit-preview">
              <h5>Credit</h5>
              <h4>£0.00</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default NavBarContainer
