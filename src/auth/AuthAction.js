import React from 'react'

class AuthAction extends React.Component {

  state = {
    username: "",
    password: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.props.header}</h1>
        <form onSubmit={ e => {
          e.preventDefault()
          this.props.submit(this.state.username, this.state.password)
        }}>
          <label htmlFor="username" >Username</label>
          <br></br>
          <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
          <br></br>
          <label htmlFor="password" >Password</label>
          <br></br>
          <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
          <br></br>
          <input type="submit" />
        </form>
      </React.Fragment>
    )
  }
}


export default AuthAction
