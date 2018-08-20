import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NavBarContainer from './NavBarContainer'
import MainContentContainer from './MainContentContainer'
import ExpenseForm from '../components/ExpenseForm'


class HomePage extends React.Component {

  render() {
    const {
      user,
      logout,
    } = this.props

    return (
      <React.Fragment>
        <NavBarContainer user={user} logout={logout} />
        <Switch>
          <Route path="/new-expense" render={ () => {
            return <ExpenseForm />
          }} />
          <Route path="/" render={ () => {
            return <MainContentContainer user={user} />
          }} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default HomePage
