import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to = '/BDO/Friend'>Friend</Link>
      <Link to = '/BDO/Family'>Family</Link>
      <Link to = '/BDO/Couple'>Couple</Link>
    </div>
  )
}

export default Nav
