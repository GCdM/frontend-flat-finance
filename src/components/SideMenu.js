import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const linkStyle = {
  // width: '100px',
  // padding: '12px',
  // margin: '0 6px 6px',
  // backgroundColor: 'blue',
  // textDecoration: 'none',
  // color: 'white',
}

const activeLinkStyle = {
  // backgroundColor: 'darkblue'
}

const SideMenu = ({ logout }) => {
  return (
    <React.Fragment>
      <Link
        to="#"
        onClick={logout}
        ><Button secondary>Logout</Button></Link>
      <span></span>
      <NavLink
        to="/"
        exact
        style={linkStyle}
        activeStyle={activeLinkStyle}
        ><Button primary>Home</Button></NavLink>
      <NavLink
        to="/new-expense"
        exact
        style={linkStyle}
        activeStyle={activeLinkStyle}
      ><Button primary>New Expense</Button></NavLink>
    </React.Fragment>
  )
}

export default SideMenu
