import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const linkStyle = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const activeLinkStyle = {
  backgroundColor: 'darkblue'
}

const SideMenu = ({ logout }) => {
  return (
    <React.Fragment>
      <NavLink
        to="/"
        style={linkStyle}
        activeStyle={activeLinkStyle}
      >Home</NavLink>
      <Link
        to="#"
        onClick={logout}
      >Logout</Link>
    </React.Fragment>
  )
}

export default SideMenu
