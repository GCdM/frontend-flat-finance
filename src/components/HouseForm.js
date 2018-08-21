import React from 'react'
import { withRouter } from 'react-router-dom'

import { createHousehold, addUserToHousehold } from '../Adapter'

class HouseForm extends React.Component {

  state = {
    id: 0,
    name: "",
  }

  handleNewHouse = (event) => {
    event.preventDefault()
    createHousehold(this.state.name, this.props.userId)
      .then( this.props.history.push('/') )
      .then( window.location.reload() )
  }

  handleExistingHouse = (event) => {
    event.preventDefault()
    addUserToHousehold(this.props.userId, this.state.id)
      .then( this.props.history.push('/') )
      .then( window.location.reload() )
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <br></br>
        <h3>Create a New Household or Choose an Existing One</h3>
        <br></br>
        <form onSubmit={this.handleExistingHouse}>
          <label>Existing Household ID (can be found under Household name)</label>
          <br></br>
          <input type="number" name="id" value={this.state.id} onChange={this.handleChange} />
          <input type="submit" />
        </form>
        <br></br>
        <div>OR</div>
        <br></br>
        <form onSubmit={this.handleNewHouse}>
          <label>New Household Name</label>
          <br></br>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </React.Fragment>
    )
  }
}

export default withRouter(HouseForm)
