import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import NavBarContainer from './NavBarContainer'
import MainContentContainer from './MainContentContainer'
import HouseForm from '../components/HouseForm'
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
        {
          user.household_id ?
          <Switch>
            <Route path="/new-expense" render={ () => {
              return <ExpenseForm userId={user.id} />
            }} />
            <Route path="/" render={ () => {
              return <MainContentContainer user={user} />
            }} />
            <Redirect to="/" />
          </Switch>
          :
          <Switch>
            <Route path="/choose-house" render={ () => {
              return <HouseForm />
            }} />
            <Redirect to="/choose-house" />
          </Switch>

        }
      </React.Fragment>
    )
  }
}

export default HomePage
