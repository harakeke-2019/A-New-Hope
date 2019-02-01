import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className = 'btns'>
      <button className = 'btn'><Link to = '/BDO/Friends'>Friend</Link></button>
      <button className = 'btn'><Link to = '/BDO/Family'>Family</Link></button>
      <button className = 'btn'><Link to = '/BDO/Lovers'>Couple</Link></button>
    </div>
  )
}

export default Nav
