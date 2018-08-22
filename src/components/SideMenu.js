import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const SideMenu = ({ logout }) => {
  return (
    <React.Fragment>
      <Link
        to="#"
        onClick={logout}
      ><Button secondary>Logout</Button></Link>
      <NavLink
        to="/"
        exact
      ><Button primary>Home</Button></NavLink>
      <NavLink
        to="/new-expense"
        exact
      ><Button primary>New Expense</Button></NavLink>
    </React.Fragment>
  )
}

export default SideMenu
