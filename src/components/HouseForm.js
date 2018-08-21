import React from 'react'

class HouseForm extends React.Component {

  handleExistingHouse = () => {

  }

  handleNewHouse = () => {
    
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
          <input type="number" name="id"/>
          <input type="submit" />
        </form>
        <br></br>
        <div>OR</div>
        <br></br>
        <form onSubmit={this.handleNewHouse}>
          <label>New Household Name</label>
          <br></br>
          <input type="text" name="name" />
          <input type="submit" />
        </form>
      </React.Fragment>
    )
  }
}

export default HouseForm
