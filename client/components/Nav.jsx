import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className = 'btn'>
      <Link to = '/BDO/Friends'>Friend</Link>
      <Link to = '/BDO/Family'>Family</Link>
      <Link to = '/BDO/Lovers'>Couple</Link>
    </div>
  )
}

export default Nav
