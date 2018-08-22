import React from 'react'

class AuthAction extends React.Component {

  state = {
    login: {
      username: "",
      password: "",
    },
    signup: {
      username: "",
      password: "",
    }
  }

  handleLoginChange = (event) => {
    this.setState({
      login: {
        ...this.state.login,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSignupChange = (event) => {
    this.setState({
      signup: {
        ...this.state.signup,
        [event.target.name]: event.target.value
      }
    })
  }

  render() {
    return (
      <div className="ui equal width grid">
        <div className="column">
          <h1>Log In</h1>
          <form onSubmit={ e => {
            e.preventDefault()
            this.props.login(this.state.login.username, this.state.login.password)
          }}>
            <label htmlFor="username" >Username</label>
            <br></br>
            <input name="username" type="text" value={this.state.login.username} onChange={this.handleLoginChange}/>
            <br></br>
            <label htmlFor="password" >Password</label>
            <br></br>
            <input name="password" type="password" value={this.state.login.password} onChange={this.handleLoginChange}/>
            <br></br>
            <input type="submit" />
          </form>
        </div>
        <div className="column">
          <h1>Sign Up</h1>
          <form onSubmit={ e => {
            e.preventDefault()
            this.props.signup(this.state.signup.username, this.state.signup.password)
          }}>
            <label htmlFor="username" >Username</label>
            <br></br>
            <input name="username" type="text" value={this.state.username} onChange={this.handleSignupChange}/>
            <br></br>
            <label htmlFor="password" >Password</label>
            <br></br>
            <input name="password" type="password" value={this.state.password} onChange={this.handleSignupChange}/>
            <br></br>
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}


export default AuthAction
