import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className = 'nav'>
      <div className ="title">
      Big Day Out-ify
      </div>
      <div className = 'menu'>
        <div className = 'friend'><Link to = '/BDO/Friends'>Friend</Link></div>
        <div className = 'romantic'><Link to = '/BDO/Family'>Family</Link></div>
        <div className = 'rainy'><Link to = '/BDO/Lovers'>Couple</Link></div>
      </div>
    </div>
  )
}

export default Nav
