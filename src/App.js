import React from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'

import './App.css'
import HomePage from './containers/HomePage'
import AuthAction from './auth/AuthAction'
import { createUser, loginUser, getCurrentUser } from './Adapter'

const testUser = {
  "id": 2,
  "username": "Gabriel",
  "household_id": 1,
}

class App extends React.Component {

  state = {
    current_user: null,
  }

  postAuth = (userData) => {
    if (userData.error) {
      alert(userData.error)
    } else {
      localStorage.setItem('token', userData.token)
      this.updateCurrentUser(userData.token)
      this.props.history.push('/home')
    }
  }

  signUp = (username, password) => {
    createUser(username, password).then( this.postAuth )
  }

  login = (username, password) => {
    loginUser(username, password).then( this.postAuth )
  }

  logout = () => {
    console.log("log out")
    this.setState({
      current_user: null
    })
    this.props.history.push('/login')
    localStorage.clear()
  }

  updateCurrentUser = (token) => {
    getCurrentUser(token).then( userData => {
      if (userData.error) {
        this.logout()
      } else {
        this.setState({
          current_user: userData.user_data
        })
      }
    })
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.updateCurrentUser(localStorage.getItem('token'))
    }
  }

  render() {
    return (
      <div className="App">
        {
          !this.state.current_user ?
          <Switch>
              <Route path="/signup" render={ () => {
                return <AuthAction header="Sign Up" submit={this.signUp} />
              }} />
              <Route path="/login" render={ () => {
                return <AuthAction header="Log In" submit={this.login} />
              }} />
              <Redirect to="/login" />
          </Switch>
          :
          <React.Fragment>
            <Route path="/" render={ () => {
              return <HomePage user={this.state.current_user} logout={this.logout} />
            }} />
            <Redirect to="/" />
          </React.Fragment>
          }
      </div>
    )
  }
}

export default withRouter(App);
